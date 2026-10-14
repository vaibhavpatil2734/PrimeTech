
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// Trust proxy only when your deployment is behind a trusted proxy.
// Configure this according to your hosting provider before enabling it.

// Security headers
app.use(helmet());

// CORS configuration
const allowedOrigins = (
  process.env.FRONTEND_URL || "http://localhost:5173"
)
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Limit incoming JSON payload size
app.use(express.json({ limit: "10kb" }));

// Rate limit repeated enquiry submissions
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many enquiries. Please try again later.",
  },
});

app.use("/api/enquiries", enquiryLimiter);

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PrimeTech project enquiry API is running.",
  });
});

// Submit project enquiry
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body || {};

    // Validate field types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof projectType !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // Trim user input
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanProjectType = projectType.trim();
    const cleanMessage = message.trim();

    // Validate required fields and maximum lengths
    if (
      !cleanName ||
      !cleanEmail ||
      !cleanProjectType ||
      !cleanMessage ||
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanProjectType.length > 100 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid details and try again.",
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Prevent header injection through email-related fields
    if (/[\r\n]/.test(cleanEmail) || /[\r\n]/.test(cleanName)) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid details and try again.",
      });
    }

    // Check required email configuration
    if (
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.ENQUIRY_TO_EMAIL
    ) {
      console.error("Email environment variables are not configured.");

      return res.status(500).json({
        success: false,
        message: "Enquiry service is not configured yet.",
      });
    }

    // Send enquiry email
    await transporter.sendMail({
      from: `"PrimeTech Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO_EMAIL,
      replyTo: {
        name: cleanName,
        address: cleanEmail,
      },
      subject: `New Project Enquiry - ${cleanProjectType}`,
      text: [
        "New project enquiry received from the PrimeTech website.",
        "",
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Project Type: ${cleanProjectType}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully!",
    });
  } catch (error) {
    // Log diagnostic information privately; don't expose it to clients
    console.error("Enquiry email failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to send your enquiry right now. Please try again.",
    });
  }
});

// Handle invalid JSON and other Express errors
app.use((err, req, res, next) => {
  if (err.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      message: "Request is too large.",
    });
  }

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request body.",
    });
  }

  console.error("Server error:", err.message);

  return res.status(500).json({
    success: false,
    message: "An unexpected server error occurred.",
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PrimeTech backend running on port ${PORT}`);
});
