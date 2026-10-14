

import { useState } from "react";

import { motion, useReducedMotion } from "framer-motion";

import {

  ArrowDown,

  ArrowDownRight,

  ArrowRight,

  ArrowUpRight,

  Check,

  Code2,

  Layers3,

  Menu,

  MonitorSmartphone,

  Send,

  ShieldCheck,

  ShoppingBag,

  Sparkles,

  Workflow,

  X,

  Zap,

  Globe,

  Handshake,

} from "lucide-react";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "https://primetech-dxof.onrender.com").replace(/\/+$/, "");



const projects = [

  {

    number: "01",

    name: "PrimeFix",

    type: "Business website",

    description:

      "A polished digital experience created to help a business establish its online presence.",

    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-Stack"],

    theme: "blue",

    icon: Globe,

    href: "https://primefix1.netlify.app/",

  },

  {

    number: "02",

    name: "PrimeGo",

    type: "Modern web experience",

    description:

      "A contemporary web experience focused on clean interfaces, smooth navigation, and usability.",

    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-Stack"],

    theme: "dark",

    icon: Zap,

    href: "https://prime-go.netlify.app/",

  },

];



const services = [

  {

    icon: MonitorSmartphone,

    number: "01",

    title: "Website Development",

    description:

      "Fast, responsive websites that communicate your brand and turn visitors into customers.",

    tags: ["Business websites", "Landing pages"],

  },

  {

    icon: ShoppingBag,

    number: "02",

    title: "E-commerce Solutions",

    description:

      "Online stores with smooth shopping, product management, and simple checkout experiences.",

    tags: ["Online stores", "Payment integration"],

  },

  {

    icon: Layers3,

    number: "03",

    title: "Web Applications",

    description:

      "Useful digital products, admin panels, and dashboards designed around your workflow.",

    tags: ["SaaS", "Dashboards"],

  },

  {

    icon: Sparkles,

    number: "04",

    title: "UI/UX Design",

    description:

      "Thoughtful layouts, clear user journeys, and polished interfaces that feel effortless.",

    tags: ["Wireframes", "Prototypes"],

  },

  {

    icon: ShieldCheck,

    number: "05",

    title: "Security & Maintenance",

    description:

      "Practical improvements to website reliability, security, and ongoing performance.",

    tags: ["Security basics", "Maintenance"],

  },

  {

    icon: Workflow,

    number: "06",

    title: "Business Automation",

    description:

      "Connect repetitive tasks and simplify the everyday processes that slow your business down.",

    tags: ["Integrations", "Automation"],

  },

];



const process = [

  {

    number: "01",

    title: "Discover",

    description:

      "We learn about your idea, your audience, and what success looks like.",

  },

  {

    number: "02",

    title: "Design",

    description:

      "We plan the experience and shape a visual direction for your product.",

  },

  {

    number: "03",

    title: "Build",

    description:

      "We turn the plan into a responsive, reliable, and useful digital product.",

  },

  {

    number: "04",

    title: "Launch",

    description:

      "We test, refine, and help you take your product into the world.",

  },

];



const team = [

  {

    number: "01",

    name: "Tanvi Desai",

    title: "Business Development",

    icon: Handshake,

    theme: "team-purple",

    initials: "BD",

    image: "./bd.png",

  },

  {

    number: "02",

    name: "Pranay Shinde",

    title: "Full-Stack Developer",

    icon: Code2,

    theme: "team-green",

    initials: "FE",

    image: "./fd.png",

  },

  {

    number: "03",

    name: "Sandesh Jadhav",

    title: "Full-Stack Developer",

    icon: Layers3,

    theme: "team-orange",

    initials: "FS",

    image: "./sbd.png",

  },

  {

    number: "04",

    name: "Vaibhav Patil",

    title: "CyberSecurity Specialist",

    icon: ShieldCheck,

    theme: "team-blue",

    initials: "CS",

    image: "./cs.png",

  },

];



const reveal = {

  hidden: { opacity: 0, y: 24 },

  visible: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },

  },

};



function Reveal({ children, className = "", delay = 0 }) {

  const reduceMotion = useReducedMotion();



  return (

    <motion.div

      className={className}

      variants={reveal}

      initial={reduceMotion ? false : "hidden"}

      whileInView="visible"

      viewport={{ once: true, amount: 0.12 }}

      transition={{ delay }}

    >

      {children}

    </motion.div>

  );

}



function Brand() {

  return (

    <a href="#home" className="pt-brand" aria-label="PrimeTech home">

      <span className="pt-brand-mark">

        <span />

        <span />

        <span />

        <span />

      </span>

      <span>

        Prime<span className="pt-brand-accent">Tech</span>

      </span>

    </a>

  );

}



function SectionLabel({ children }) {

  return (

    <div className="pt-section-label">

      <span />

      {children}

    </div>

  );

}



function ProjectPreview({ project }) {

  const Icon = project.icon;



  return (

    <div className={`pt-project-preview pt-preview-${project.theme}`}>

      <div className="pt-preview-browser">

        <div className="pt-browser-dots">

          <i />

          <i />

          <i />

        </div>

        <span>PRIMETECH / PROJECT PREVIEW</span>

        <ArrowUpRight size={15} />

      </div>



      <div className="pt-preview-art">

        <div className="pt-preview-orbit">

          <Icon size={58} strokeWidth={1.3} />

        </div>

        <span className="pt-preview-kicker">DESIGNED TO MAKE AN IMPACT</span>

        <h3>

          Digital.

          <br />

          <em>Done right.</em>

        </h3>

        <div className="pt-preview-lines">

          <span />

          <span />

          <span />

        </div>

      </div>

    </div>

  );

}



function WhatsAppButton() {

  return (

    <a

      className="pt-whatsapp"

      href="https://wa.me/918483812734?text=Hi%20PrimeTech!%20I%20want%20to%20discuss%20a%20project."

      target="_blank"

      rel="noopener noreferrer"

      aria-label="Chat with PrimeTech on WhatsApp"

    >

      <span className="pt-whatsapp-icon" aria-hidden="true">

        <svg

          viewBox="0 0 32 32"

          width="36"

          height="36"

          fill="currentColor"

          xmlns="http://www.w3.org/2000/svg"

        >

          <path d="M16.02 3.2A12.66 12.66 0 0 0 5.14 22.34L3.35 28.8l6.61-1.73A12.67 12.67 0 1 0 16.02 3.2Zm0 23.1c-1.9 0-3.77-.51-5.4-1.49l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.4 10.4 0 1 1 8.91 4.91Zm5.72-7.79c-.31-.16-1.84-.91-2.12-1.02-.28-.1-.49-.16-.7.16-.2.31-.8 1.02-.98 1.23-.18.2-.36.23-.67.08-.31-.16-1.31-.49-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.13.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.58s1.1 2.99 1.26 3.2c.15.2 2.16 3.3 5.23 4.63.73.31 1.3.5 1.75.64.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />

        </svg>

      </span>



      <span className="pt-whatsapp-copy">

        <strong>Chat with us</strong>

        <small>We’re just a message away</small>

      </span>



      <span className="pt-whatsapp-arrow" aria-hidden="true">

        <ArrowUpRight size={20} />

      </span>

    </a>

  );

}



export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({

    name: "",

    email: "",

    service: "",

    message: "",

  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");



  const closeMenu = () => setMenuOpen(false);



  const updateForm = (event) => {

    setForm({ ...form, [event.target.name]: event.target.value });

  };



  const submitForm = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("");
    setSubmitMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          projectType: form.service,
          message: form.message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again."
        );
      }

      setSubmitStatus("success");
      setSubmitMessage(
        result.message || "Your enquiry has been sent successfully!"
      );
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("PrimeTech enquiry submission failed:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error.message ||
          "Could not connect to the server. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };



  return (

    <div className="pt-site">

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');



        :root {

          font-family: 'DM Sans', sans-serif;

          color: #20223b;

          background: #f8f9fc;

          font-synthesis: none;

          text-rendering: optimizeLegibility;

          -webkit-font-smoothing: antialiased;

          --pt-ink: #20223b;

          --pt-muted: #62677d;

          --pt-purple: #6855ed;

          --pt-purple-light: #eeebff;

          --pt-lime: #c8fa62;

          --pt-line: #e6e8f0;

          --pt-font-head: 'Space Grotesk', sans-serif;

        }



        *, *::before, *::after { box-sizing: border-box; }

        html { scroll-behavior: smooth; scroll-padding-top: 90px; }

        body { margin: 0; min-width: 320px; }

        body, #root { min-height: 100vh; }

        button, input, textarea, select { font: inherit; }

        a { color: inherit; text-decoration: none; }

        button { -webkit-tap-highlight-color: transparent; }

        ::selection { background: #d8ff91; color: #20223b; }



        .pt-site { overflow: clip; background: #f8f9fc; color: var(--pt-ink); min-height: 100vh; }

        .pt-wrap { width: min(1160px, calc(100% - 64px)); margin-inline: auto; }



        .pt-header {

          height: 78px; display: flex; align-items: center; justify-content: space-between;

          width: min(1320px, calc(100% - 64px)); margin: auto; position: relative; z-index: 30;

          border-bottom: 1px solid #e8e9f1;

        }

        .pt-brand {

          display: inline-flex; align-items: center; gap: 10px;

          font: 700 23px var(--pt-font-head); letter-spacing: -1.1px; flex-shrink: 0;

        }

        .pt-brand-mark {

          width: 29px; height: 29px; display: grid; grid-template-columns: 1fr 1fr;

          gap: 3px; padding: 5px; border-radius: 9px; background: var(--pt-lime);

          transform: rotate(-8deg); transition: transform .35s;

        }

        .pt-brand:hover .pt-brand-mark { transform: rotate(8deg) scale(1.07); }

        .pt-brand-mark span { background: var(--pt-ink); border-radius: 2px; }

        .pt-brand-mark span:nth-child(2), .pt-brand-mark span:nth-child(3) { opacity: .45; }

        .pt-brand-accent { color: var(--pt-purple); }

        .pt-nav { display: flex; align-items: center; gap: 32px; }

        .pt-nav > a:not(.pt-nav-cta) { font-size: 13px; font-weight: 600; color: #555b72; transition: color .2s; }

        .pt-nav > a:not(.pt-nav-cta):hover { color: var(--pt-purple); }

        .pt-nav-cta {

          display: inline-flex; align-items: center; gap: 15px; padding: 13px 18px;

          border-radius: 12px; background: var(--pt-ink); color: #fff; font-size: 12px; font-weight: 700;

          transition: transform .25s, background .25s;

        }

        .pt-nav-cta:hover { background: var(--pt-purple); transform: translateY(-2px); }

        .pt-menu-button { display: none; background: none; border: 0; padding: 8px; color: var(--pt-ink); }



        .pt-hero {

          position: relative; padding: 92px 0 88px;

          display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: 66px;

          min-height: 650px;

        }

        .pt-hero::before {

          content: ''; position: absolute; z-index: 0; pointer-events: none;

          width: 470px; height: 470px; right: -95px; top: 50px; border-radius: 50%;

          background: #e9e5ff; filter: blur(4px); opacity: .75;

        }

        .pt-hero-copy { position: relative; z-index: 1; }

        .pt-pill {

          display: inline-flex; align-items: center; gap: 9px; padding: 10px 14px;

          border: 1px solid #e3defe; border-radius: 999px; color: #6253cb;

          background: #f1efff; font-size: 11px; font-weight: 700;

        }

        .pt-pill svg { color: var(--pt-purple); }

        .pt-hero h1 {

          font: 600 clamp(58px, 6.4vw, 84px)/.99 var(--pt-font-head);

          letter-spacing: -5.8px; margin: 27px 0 24px; max-width: 650px;

        }

        .pt-hero h1 span { display: block; }

        .pt-gradient-text {

          background: linear-gradient(95deg, #6855ed 5%, #9478f7 90%);

          color: #6855ed; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;

        }

        .pt-hero-description { max-width: 475px; color: var(--pt-muted); font-size: 15px; line-height: 1.9; margin: 0; }

        .pt-hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 13px; margin-top: 30px; }

        .pt-button {

          display: inline-flex; align-items: center; justify-content: center; gap: 12px;

          padding: 15px 19px; border-radius: 11px; font-size: 12px; font-weight: 700;

          border: 1px solid transparent; cursor: pointer; transition: transform .25s, box-shadow .25s, background .25s;

        }

        .pt-button:hover { transform: translateY(-3px); }

        .pt-button-primary { background: var(--pt-purple); color: #fff; box-shadow: 0 8px 22px #6855ed25; }

        .pt-button-primary:hover { box-shadow: 0 12px 28px #6855ed40; background: #5743dc; }

        .pt-button-secondary { background: #fff; border-color: #e3e5ef; color: var(--pt-ink); }

        .pt-button-secondary:hover { border-color: #c8c1ff; background: #f7f5ff; }

        .pt-proof { display: flex; align-items: center; gap: 12px; margin-top: 37px; }

        .pt-proof-icon { width: 37px; height: 37px; border-radius: 12px; background: #e9f8d5; color: #486b23; display: grid; place-items: center; }

        .pt-proof strong { display: block; font-size: 12px; }

        .pt-proof small { display: block; color: #777d90; font-size: 10px; margin-top: 4px; }



        .pt-hero-visual {

          min-width: 0; position: relative; z-index: 1; padding: 27px;

          border: 1px solid #e8e5fa; border-radius: 26px;

          background: linear-gradient(145deg, #efedff, #f5f4ff 55%, #e9f8d9);

        }

        .pt-visual-top { display: flex; justify-content: space-between; align-items: center; color: #646881; font-size: 10px; font-weight: 700; letter-spacing: 1px; }

        .pt-live { display: inline-flex; align-items: center; gap: 6px; color: #4b7a26; letter-spacing: 0; }

        .pt-live i { width: 7px; height: 7px; border-radius: 50%; background: #8ccf4d; box-shadow: 0 0 0 4px #c8fa6255; }

        .pt-hero-logo-card {

          min-height: 295px; display: flex; flex-direction: column; align-items: center; justify-content: center;

          text-align: center; border: 1px solid #fff; border-radius: 21px; background: #fff;

          margin-top: 21px; box-shadow: 0 15px 40px #35305d0c;

        }

        .pt-big-mark { width: 65px; height: 65px; padding: 11px; gap: 5px; border-radius: 19px; margin-bottom: 17px; }

        .pt-hero-logo-card h2 { font: 700 27px var(--pt-font-head); letter-spacing: -1.2px; margin: 0; }

        .pt-hero-logo-card p { color: #73788e; font-size: 11px; margin: 9px 0 0; }

        .pt-visual-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }

        .pt-mini-feature { display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid #fff; background: #ffffffb8; border-radius: 13px; min-width: 0; }

        .pt-mini-feature > span { width: 33px; height: 33px; flex-shrink: 0; display: grid; place-items: center; background: #e7e3ff; color: var(--pt-purple); border-radius: 10px; }

        .pt-mini-feature strong { display: block; font-size: 10px; }

        .pt-mini-feature small { display: block; margin-top: 4px; color: #777d90; font-size: 9px; line-height: 1.4; }

        .pt-floating-star { position: absolute; right: 4px; top: 3px; color: #7762ee; animation: pt-float 4s ease-in-out infinite; }

        .pt-scroll-hint { display: flex; align-items: center; gap: 9px; color: #7a8094; font-size: 10px; letter-spacing: 1px; margin-top: 35px; }

        .pt-scroll-hint svg { color: var(--pt-purple); animation: pt-bounce 1.8s ease-in-out infinite; }

        @keyframes pt-float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-9px) rotate(12deg); } }

        @keyframes pt-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(5px); } }



        .pt-marquee { overflow: hidden; border-block: 1px solid #e9eaf2; background: #fff; padding: 17px 0; }

        .pt-marquee-track { display: flex; width: max-content; animation: pt-marquee 34s linear infinite; }

        .pt-marquee-track span { display: flex; align-items: center; gap: 25px; padding-right: 25px; font-size: 10px; letter-spacing: 1.8px; font-weight: 700; color: #70768a; white-space: nowrap; }

        .pt-marquee-track i { font-style: normal; color: var(--pt-purple); font-size: 16px; }

        .pt-marquee:hover .pt-marquee-track { animation-play-state: paused; }

        @keyframes pt-marquee { to { transform: translateX(-50%); } }



        .pt-section { padding: 100px 0; }

        .pt-section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 35px; margin-bottom: 39px; }

        .pt-section-label { display: flex; align-items: center; gap: 9px; color: #6354d4; font-size: 10px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }

        .pt-section-label > span { width: 8px; height: 8px; border-radius: 50%; background: var(--pt-purple); box-shadow: 0 0 0 5px #eeeaff; }

        .pt-section-title { font: 600 clamp(39px, 4.8vw, 58px)/1.06 var(--pt-font-head); letter-spacing: -3px; margin: 19px 0 0; }

        .pt-section-title .pt-title-accent { color: var(--pt-purple); }

        .pt-section-intro { max-width: 355px; color: var(--pt-muted); font-size: 13px; line-height: 1.9; margin: 0 0 4px; }



        .pt-project-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 22px; }

        .pt-project-card { display: block; min-width: 0; overflow: hidden; background: #fff; border: 1px solid #e8e9f1; border-radius: 18px; transition: transform .35s, box-shadow .35s, border-color .35s; }

        .pt-project-card:hover { transform: translateY(-6px); border-color: #d9d3ff; box-shadow: 0 20px 45px #34315e0c; }

        .pt-project-preview { position: relative; height: 300px; padding: 18px; overflow: hidden; }

        .pt-preview-mint { background: #e6efdb; }

        .pt-preview-lavender { background: #e9e5ff; }

        .pt-preview-peach { background: #f7e4d8; }

        .pt-preview-blue { background: #dfeafa; }

        .pt-preview-dark { background: #252641; }

        .pt-preview-browser { height: 29px; display: flex; align-items: center; gap: 8px; position: relative; z-index: 2; color: #77798b; font-size: 7px; letter-spacing: 1px; }

        .pt-preview-dark .pt-preview-browser { color: #d2d3e8; }

        .pt-preview-browser > svg { margin-left: auto; }

        .pt-browser-dots { display: flex; gap: 4px; }

        .pt-browser-dots i { width: 6px; height: 6px; border-radius: 50%; background: #b4b5c2; }

        .pt-browser-dots i:first-child { background: #ef958e; }

        .pt-browser-dots i:nth-child(2) { background: #efcb76; }

        .pt-browser-dots i:nth-child(3) { background: #94c975; }

        .pt-preview-art {

          position: relative; height: calc(100% - 37px); overflow: hidden;

          display: flex; flex-direction: column; justify-content: center; align-items: flex-start;

          padding: 25px 30px; border-radius: 10px; background: #ffffffb8; color: #292a46;

        }

        .pt-preview-dark .pt-preview-art { background: #303151; color: #fff; }

        .pt-preview-orbit {

          position: absolute; right: 30px; top: 50%; transform: translateY(-50%);

          display: grid; place-items: center; width: 130px; height: 130px;

          border: 1px solid #b9b1f5; border-radius: 50%; color: var(--pt-purple);

        }

        .pt-preview-orbit::before { content: ''; position: absolute; inset: 15px; border: 1px dashed #b9b1f5; border-radius: 50%; }

        .pt-preview-orbit svg { z-index: 1; }

        .pt-preview-kicker { position: relative; z-index: 2; font-size: 7px; letter-spacing: 1.2px; color: #777d97; }

        .pt-preview-art h3 { position: relative; z-index: 2; font: 600 32px/.98 var(--pt-font-head); letter-spacing: -1.5px; margin: 13px 0 18px; }

        .pt-preview-art h3 em { color: var(--pt-purple); font-family: Georgia, serif; font-weight: 400; }

        .pt-preview-lines { position: relative; z-index: 2; display: flex; gap: 4px; }

        .pt-preview-lines span { height: 4px; width: 27px; border-radius: 8px; background: #b9afff; }

        .pt-preview-lines span:nth-child(2) { width: 17px; background: #c8fa62; }

        .pt-preview-lines span:nth-child(3) { width: 9px; background: #d5d8e8; }

        .pt-project-info { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 22px 23px 23px; }

        .pt-project-info h3 { font: 600 23px var(--pt-font-head); letter-spacing: -.7px; margin: 0 0 7px; }

        .pt-project-type { color: var(--pt-purple); font-size: 10px; font-weight: 700; }

        .pt-project-description { max-width: 470px; color: var(--pt-muted); font-size: 12px; line-height: 1.8; margin: 11px 0 15px; }

        .pt-project-tags { display: flex; flex-wrap: wrap; gap: 7px; }

        .pt-project-tags span { padding: 6px 9px; border: 1px solid #e8e8f1; border-radius: 6px; color: #656b80; font-size: 9px; }

        .pt-project-link { width: 40px; height: 40px; display: grid; place-items: center; flex-shrink: 0; border: 1px solid #e5e5ef; border-radius: 50%; color: var(--pt-purple); transition: background .25s, color .25s, transform .25s; }

        .pt-project-card:hover .pt-project-link { background: var(--pt-purple); color: #fff; transform: rotate(45deg); }

        .pt-section-bottom { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--pt-line); color: #73798d; font-size: 11px; }

        .pt-section-bottom a { display: inline-flex; align-items: center; gap: 7px; color: var(--pt-purple); font-weight: 700; }



        .pt-services-section, .pt-team-section { background: #f0f1f8; }

        .pt-service-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 15px; }

        .pt-service-card { position: relative; min-width: 0; padding: 25px 22px 22px; border: 1px solid #e2e4ef; background: #fff; border-radius: 15px; transition: transform .3s, border-color .3s, box-shadow .3s; }

        .pt-service-card:hover { transform: translateY(-5px); border-color: #d3ccff; box-shadow: 0 15px 35px #2c29500b; }

        .pt-service-top { display: flex; justify-content: space-between; align-items: center; }

        .pt-service-icon { width: 45px; height: 45px; display: grid; place-items: center; border-radius: 13px; color: var(--pt-purple); background: #efedff; }

        .pt-service-number { font-size: 10px; color: #9599aa; letter-spacing: 1px; }

        .pt-service-card h3 { font: 600 19px var(--pt-font-head); letter-spacing: -.4px; margin: 24px 0 10px; }

        .pt-service-card p { min-height: 66px; color: var(--pt-muted); font-size: 12px; line-height: 1.85; margin: 0 0 20px; }

        .pt-service-tags { display: flex; flex-wrap: wrap; gap: 6px; }

        .pt-service-tags span { color: #666c82; background: #f6f6fa; padding: 7px 8px; border-radius: 6px; font-size: 9px; }



        .pt-process-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; margin-top: 45px; }

        .pt-process-card { border-top: 1px solid #dfe1ec; padding-top: 19px; }

        .pt-process-top { display: flex; align-items: center; justify-content: space-between; color: var(--pt-purple); font-size: 11px; font-weight: 700; }

        .pt-process-top span:last-child { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; border: 1px solid #e0dcfa; }

        .pt-process-card h3 { font: 600 21px var(--pt-font-head); margin: 24px 0 10px; }

        .pt-process-card p { color: var(--pt-muted); font-size: 12px; line-height: 1.9; margin: 0; max-width: 230px; }



        .pt-about { display: grid; grid-template-columns: .95fr 1fr; gap: 75px; align-items: center; }

        .pt-about-visual { position: relative; min-height: 385px; display: grid; place-items: center; overflow: hidden; border-radius: 22px; background: #eae7ff; border: 1px solid #e0dcff; }

        .pt-about-visual::before, .pt-about-visual::after { content: ''; position: absolute; border: 1px solid #c9c0ff; border-radius: 50%; width: 260px; height: 260px; }

        .pt-about-visual::after { width: 320px; height: 320px; border-style: dashed; animation: pt-spin 35s linear infinite; }

        @keyframes pt-spin { to { transform: rotate(360deg); } }

        .pt-about-mark { position: relative; z-index: 2; width: 140px; height: 140px; padding: 23px; gap: 9px; border-radius: 37px; box-shadow: 0 22px 55px #6855ed26; }

        .pt-about-caption { position: absolute; bottom: 23px; left: 23px; right: 23px; display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #6259a2; font-size: 10px; }

        .pt-about-copy h2 { font: 600 clamp(39px,4.6vw,56px)/1.08 var(--pt-font-head); letter-spacing: -2.8px; margin: 20px 0; }

        .pt-about-copy h2 span { color: var(--pt-purple); }

        .pt-about-copy > p { color: var(--pt-muted); font-size: 13px; line-height: 1.95; margin: 0; }

        .pt-values { display: grid; gap: 15px; margin-top: 26px; }

        .pt-value { display: flex; align-items: center; gap: 12px; }

        .pt-value > span { width: 35px; height: 35px; flex-shrink: 0; display: grid; place-items: center; background: #eff9e2; color: #557d2b; border-radius: 11px; }

        .pt-value strong { display: block; font-size: 12px; }

        .pt-value small { display: block; color: #747a8f; font-size: 10px; margin-top: 4px; }



        /* TEAM */

        .pt-team-grid {

          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 20px;

          align-items: stretch;

        }

        .pt-team-card {

          --team-accent: #6855ed;

          --team-soft: #efedff;

          position: relative;

          display: flex;

          flex-direction: column;

          min-width: 0;

          padding: 24px 20px 20px;

          overflow: hidden;

          border: 1px solid #e2e4ef;

          border-radius: 20px;

          background: linear-gradient(160deg, #fff 0%, #fff 68%, var(--team-soft) 150%);

          box-shadow: 0 5px 18px #25244705;

          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;

        }

        .pt-team-card::before {

          content: '';

          position: absolute;

          top: 0;

          left: 0;

          right: 0;

          height: 4px;

          background: var(--team-accent);

          transform: scaleX(.35);

          transform-origin: left;

          transition: transform .35s ease;

        }

        .pt-team-card:hover {

          transform: translateY(-7px);

          border-color: color-mix(in srgb, var(--team-accent) 35%, white);

          box-shadow: 0 22px 45px #25244712;

        }

        .pt-team-card:hover::before { transform: scaleX(1); }

        .team-purple { --team-accent: #6855ed; --team-soft: #efedff; }

        .team-green { --team-accent: #557d37; --team-soft: #eef7e5; }

        .team-orange { --team-accent: #bd7045; --team-soft: #fff0e6; }

        .team-blue { --team-accent: #3976b9; --team-soft: #e8f2ff; }



        .pt-team-top {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;

        }

        .pt-team-number { color: #9297aa; font-size: 10px; font-weight: 700; letter-spacing: 1.3px; }

        .pt-team-symbol {

          display: grid;

          place-items: center;

          width: 42px;

          height: 42px;

          flex-shrink: 0;

          border-radius: 14px;

          color: var(--team-accent);

          background: var(--team-soft);

        }

        .pt-team-avatar {

          position: relative;

          width: 100%;

          height: 230px;

          margin: 20px 0 22px;

          overflow: hidden;

          border: 1px solid color-mix(in srgb, var(--team-accent) 20%, white);

          border-radius: 15px;

          background: var(--team-soft);

          box-shadow: 0 8px 20px #20223b0b;

        }

        .pt-team-avatar img {

          display: block;

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center 35%;

          transition: transform .5s ease;

        }

        .pt-team-card:hover .pt-team-avatar img { transform: scale(1.06); }

        .pt-team-card h3 {

          font: 600 19px/1.3 var(--pt-font-head);

          letter-spacing: -.5px;

          margin: 0 0 7px;

          overflow-wrap: anywhere;

        }

        .pt-team-title {

          display: inline-flex;

          align-self: flex-start;

          color: var(--team-accent);

          background: var(--team-soft);

          padding: 7px 9px;

          border-radius: 7px;

          font-size: 10px;

          line-height: 1.4;

          font-weight: 700;

          margin-bottom: 15px;

        }

        .pt-team-card p {

          color: var(--pt-muted);

          font-size: 12px;

          line-height: 1.8;

          margin: 0;

          flex: 1;

        }

        .pt-team-footer {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;

          border-top: 1px solid #e9eaf2;

          margin-top: 21px;

          padding-top: 15px;

        }

        .pt-team-footer span { color: #858ba0; font-size: 9px; font-weight: 700; letter-spacing: 1px; }

        .pt-team-footer svg { color: var(--team-accent); transition: transform .25s; }

        .pt-team-card:hover .pt-team-footer svg { transform: translate(3px, -3px); }



        .pt-contact {

          position: relative;

          display: grid;

          grid-template-columns: .85fr 1.15fr;

          gap: 50px;

          padding: 52px;

          border-radius: 23px;

          background: #22233d;

          color: #fff;

          overflow: hidden;

        }

        .pt-contact::before {

          content: '';

          position: absolute;

          width: 330px;

          height: 330px;

          border-radius: 50%;

          background: #6855ed;

          filter: blur(100px);

          opacity: .25;

          left: -100px;

          bottom: -200px;

          pointer-events: none;

        }

        .pt-contact-intro, .pt-contact-form { position: relative; z-index: 1; min-width: 0; }

        .pt-contact .pt-section-label { color: #d1caff; }

        .pt-contact .pt-section-label > span { background: var(--pt-lime); box-shadow: 0 0 0 5px #c8fa621a; }

        .pt-contact h2 { font: 600 clamp(41px,4.7vw,57px)/1.06 var(--pt-font-head); letter-spacing: -3px; margin: 23px 0 17px; }

        .pt-contact h2 span { color: var(--pt-lime); }

        .pt-contact-intro > p { max-width: 340px; color: #c0c2d5; font-size: 12px; line-height: 1.9; }



        .pt-contact-note {

          display: flex;

          gap: 11px;

          align-items: center;

          margin-top: 30px;

          padding-top: 21px;

          border-top: 1px solid #ffffff20;

        }

        .pt-contact-note > span {

          width: 39px;

          height: 39px;

          display: grid;

          place-items: center;

          background: #ffffff12;

          color: var(--pt-lime);

          border-radius: 12px;

        }

        .pt-contact-note strong { display: block; font-size: 11px; }

        .pt-contact-note small { display: block; font-size: 10px; color: #b3b5ca; margin-top: 5px; }



        /* WHATSAPP BUTTON: placed inside the contact section */

        .pt-whatsapp {

          display: inline-flex;

          align-items: center;

          gap: 12px;

          width: fit-content;

          max-width: 100%;

          margin-top: 22px;

          padding: 12px 15px;

          border: 1px solid rgba(37, 211, 102, 0.35);

          border-radius: 13px;

          background: rgba(37, 211, 102, 0.09);

          color: #fff;

          text-decoration: none;

          transition:

            background .25s ease,

            border-color .25s ease,

            transform .25s ease;

        }

        .pt-whatsapp:hover {

          background: rgba(37, 211, 102, 0.16);

          border-color: rgba(37, 211, 102, 0.75);

          transform: translateY(-2px);

        }

        .pt-whatsapp:focus-visible {

          outline: 2px solid #25d366;

          outline-offset: 4px;

        }

        .pt-whatsapp-icon {

          width: 39px;

          height: 39px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 11px;

          background: #25d366;

          color: #fff;

        }

        .pt-whatsapp-icon svg { display: block; width: 27px; height: 27px; }

        .pt-whatsapp-copy { display: flex; flex-direction: column; gap: 4px; }

        .pt-whatsapp-copy strong {

          font: 600 13px var(--pt-font-head);

          color: #fff;

        }

        .pt-whatsapp-copy small { color: #c0c2d5; font-size: 10px; }

        .pt-whatsapp-arrow {

          display: grid;

          place-items: center;

          margin-left: 5px;

          color: #25d366;

          transition: transform .25s ease;

        }

        .pt-whatsapp:hover .pt-whatsapp-arrow { transform: translate(2px, -2px); }



        .pt-contact-form { display: grid; gap: 15px; background: #fff; color: var(--pt-ink); border-radius: 16px; padding: 25px; }

        .pt-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }

        .pt-contact-form label { display: grid; gap: 8px; font-size: 10px; font-weight: 700; color: #4e536a; }

        .pt-contact-form input, .pt-contact-form select, .pt-contact-form textarea {

          width: 100%; min-width: 0; border: 1px solid #e1e3ef; background: #fafaff;

          color: var(--pt-ink); border-radius: 9px; padding: 12px; font-size: 11px; outline: none; transition: border .2s, box-shadow .2s;

        }

        .pt-contact-form input:focus, .pt-contact-form select:focus, .pt-contact-form textarea:focus { border-color: #9586ff; box-shadow: 0 0 0 3px #6855ed13; }

        .pt-contact-form textarea { min-height: 105px; resize: vertical; }

        .pt-contact-form input::placeholder, .pt-contact-form textarea::placeholder { color: #989cb0; }

        .pt-form-submit { width: 100%; border: 0; margin-top: 2px; }
        .pt-form-submit:disabled { opacity: .65; cursor: not-allowed; transform: none; }

        .pt-form-footnote { color: #888da1; font-size: 9px; line-height: 1.5; margin: -5px 0 0; }



        .pt-footer { display: flex; justify-content: space-between; align-items: center; gap: 22px; padding: 28px 0; }

        .pt-footer .pt-brand { font-size: 19px; }

        .pt-footer-copy { color: #747a8e; font-size: 10px; }

        .pt-footer-links { display: flex; align-items: center; gap: 20px; }

        .pt-footer-links a { color: #60667c; font-size: 11px; transition: color .2s; }

        .pt-footer-links a:hover { color: var(--pt-purple); }

        .pt-back-top { display: grid; place-items: center; width: 35px; height: 35px; border-radius: 50%; border: 1px solid #e1e3ed; color: var(--pt-purple); transition: .25s; }

        .pt-back-top:hover { color: #fff; background: var(--pt-purple); border-color: var(--pt-purple); transform: translateY(-3px); }



        @media (min-width: 1400px) {

          .pt-hero { min-height: 700px; }

          .pt-hero-logo-card { min-height: 325px; }

        }

        @media (max-width: 1000px) {

          .pt-wrap, .pt-header { width: calc(100% - 48px); }

          .pt-nav { gap: 19px; }

          .pt-hero { gap: 30px; grid-template-columns: 1fr .9fr; padding: 75px 0; }

          .pt-hero h1 { font-size: clamp(55px,6.7vw,70px); letter-spacing: -4px; }

          .pt-hero-visual { padding: 19px; }

          .pt-hero-logo-card { min-height: 270px; }

          .pt-service-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }

          .pt-about { gap: 40px; }

          .pt-contact { gap: 28px; padding: 36px; }

          .pt-team-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }

          .pt-team-avatar { height: 280px; }

        }

        @media (max-width: 700px) {

          html { scroll-padding-top: 75px; }

          .pt-wrap { width: calc(100% - 36px); }

          .pt-header { width: calc(100% - 36px); height: 70px; }

          .pt-brand { font-size: 21px; }

          .pt-menu-button { display: grid; place-items: center; }

          .pt-nav {

            display: none; position: absolute; top: 62px; left: 0; right: 0;

            padding: 13px; flex-direction: column; align-items: stretch; gap: 0;

            background: #fff; border: 1px solid #e6e7f0; border-radius: 14px;

            box-shadow: 0 20px 40px #28244b16;

          }

          .pt-nav.pt-nav-open { display: flex; }

          .pt-nav > a:not(.pt-nav-cta) { padding: 14px 9px; border-bottom: 1px solid #f0f0f5; }

          .pt-nav-cta { justify-content: center; margin-top: 11px; }

          .pt-hero { display: flex; flex-direction: column; align-items: stretch; gap: 38px; padding: 62px 0 58px; min-height: 0; }

          .pt-hero::before { width: 300px; height: 300px; right: -130px; top: 360px; }

          .pt-hero h1 { font-size: clamp(54px,12.5vw,74px); letter-spacing: -3.8px; margin: 24px 0 20px; }

          .pt-hero-description { font-size: 13px; }

          .pt-hero-actions { gap: 10px; margin-top: 25px; }

          .pt-button { padding: 14px; }

          .pt-proof { margin-top: 27px; }

          .pt-hero-visual { width: 100%; padding: 16px; border-radius: 20px; }

          .pt-hero-logo-card { min-height: 245px; }

          .pt-big-mark { width: 59px; height: 59px; padding: 10px; }

          .pt-visual-bottom { grid-template-columns: 1fr 1fr; }

          .pt-mini-feature { padding: 9px; gap: 7px; }

          .pt-mini-feature > span { width: 29px; height: 29px; }

          .pt-mini-feature strong { font-size: 9px; }

          .pt-mini-feature small { font-size: 8px; }

          .pt-section { padding: 75px 0; }

          .pt-section-head { display: block; margin-bottom: 30px; }

          .pt-section-title { font-size: clamp(39px,10vw,53px); letter-spacing: -2.5px; }

          .pt-section-intro { margin-top: 18px; font-size: 12px; }

          .pt-project-grid { grid-template-columns: minmax(0,1fr); gap: 16px; }

          .pt-project-preview { height: 270px; padding: 13px; }

          .pt-preview-art { padding: 20px; }

          .pt-preview-art h3 { font-size: 28px; }

          .pt-preview-orbit { width: 100px; height: 100px; right: 18px; }

          .pt-project-info { padding: 18px; }

          .pt-project-info h3 { font-size: 21px; }

          .pt-project-description { font-size: 11px; }

          .pt-section-bottom { align-items: flex-start; flex-direction: column; font-size: 10px; }

          .pt-service-grid { grid-template-columns: minmax(0,1fr); gap: 12px; }

          .pt-service-card { padding: 22px; }

          .pt-service-card h3 { margin-top: 19px; }

          .pt-service-card p { min-height: 0; }

          .pt-process-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 27px 16px; margin-top: 30px; }

          .pt-process-card h3 { font-size: 18px; margin-top: 18px; }

          .pt-process-card p { font-size: 11px; }

          .pt-about { grid-template-columns: minmax(0,1fr); gap: 31px; }

          .pt-about-visual { min-height: 310px; }

          .pt-about-mark { width: 115px; height: 115px; padding: 20px; }

          .pt-about-visual::before { width: 210px; height: 210px; }

          .pt-about-visual::after { width: 260px; height: 260px; }

          .pt-about-copy h2 { font-size: 42px; letter-spacing: -2px; }

          .pt-team-grid { grid-template-columns: minmax(0,1fr); gap: 16px; }

          .pt-team-card { padding: 22px; }

          .pt-team-avatar { height: 330px; margin: 20px 0 22px; }

          .pt-team-card h3 { font-size: 21px; }

          .pt-team-card p { font-size: 12px; }

          .pt-contact { grid-template-columns: minmax(0,1fr); gap: 26px; padding: 27px 18px 18px; border-radius: 19px; }

          .pt-contact h2 { font-size: 45px; letter-spacing: -2.5px; }

          .pt-contact-intro > p { font-size: 12px; }

          .pt-contact-form { padding: 18px 14px; gap: 14px; }

          .pt-form-row { grid-template-columns: minmax(0,1fr); gap: 14px; }

          .pt-contact-form textarea { min-height: 100px; }

          .pt-footer { flex-wrap: wrap; gap: 17px; padding: 23px 0; }

          .pt-footer .pt-brand { font-size: 18px; }

          .pt-footer-copy { order: 3; width: 100%; }

          .pt-footer-links { margin-left: auto; gap: 12px; }

          .pt-footer-links a { font-size: 10px; }



          .pt-whatsapp { gap: 10px; padding: 11px 12px; }

          .pt-whatsapp-icon { width: 36px; height: 36px; }

          .pt-whatsapp-icon svg { width: 25px; height: 25px; }

          .pt-whatsapp-copy strong { font-size: 12px; }

          .pt-whatsapp-copy small { font-size: 9px; }

        }

        @media (max-width: 380px) {

          .pt-hero h1 { font-size: 51px; }

          .pt-hero-actions { align-items: stretch; }

          .pt-hero-actions .pt-button { font-size: 11px; }

          .pt-hero-logo-card { min-height: 220px; }

          .pt-mini-feature { align-items: flex-start; flex-direction: column; }

          .pt-project-preview { height: 245px; }

          .pt-preview-art h3 { font-size: 24px; }

          .pt-preview-orbit { width: 80px; height: 80px; }

          .pt-process-grid { grid-template-columns: minmax(0,1fr); }

          .pt-team-avatar { height: 270px; }

          .pt-footer-links { width: 100%; margin-left: 0; }

        }

        @media (prefers-reduced-motion: reduce) {

          *, *::before, *::after {

            animation-duration: .01ms !important;

            animation-iteration-count: 1 !important;

            scroll-behavior: auto !important;

            transition-duration: .01ms !important;

          }

        }

      `}</style>



      <header className="pt-header">

        <Brand />

        <nav className={`pt-nav ${menuOpen ? "pt-nav-open" : ""}`}>

          {[

            ["Home", "#home"],

            ["Demo Projects", "#projects"],

            ["Services", "#services"],

            ["Process", "#process"],

            ["Team", "#team"],

            ["About", "#about"],

          ].map(([label, href]) => (

            <a href={href} key={href} onClick={closeMenu}>

              {label}

            </a>

          ))}

          <a className="pt-nav-cta" href="#contact" onClick={closeMenu}>

            Let's talk <ArrowUpRight size={16} />

          </a>

        </nav>



        <button

          className="pt-menu-button"

          onClick={() => setMenuOpen(!menuOpen)}

          aria-label={menuOpen ? "Close menu" : "Open menu"}

          aria-expanded={menuOpen}

        >

          {menuOpen ? <X size={23} /> : <Menu size={23} />}

        </button>

      </header>



      <main>

        <section className="pt-wrap pt-hero" id="home">

          <div className="pt-hero-copy">

            <motion.div

              className="pt-pill"

              initial={{ opacity: 0, y: 12 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.6 }}

            >

              <Sparkles size={15} />

              Ideas into meaningful digital experiences

            </motion.div>



            <motion.h1

              initial={{ opacity: 0, y: 25 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.75, delay: 0.1 }}

            >

              <span>We build</span>

              <span>

                what's <span className="pt-gradient-text">next.</span>

              </span>

            </motion.h1>



            <motion.p

              className="pt-hero-description"

              initial={{ opacity: 0, y: 18 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.65, delay: 0.22 }}

            >

              PrimeTech transforms ideas into purposeful websites, digital

              products, and experiences that help businesses move forward.

            </motion.p>



            <motion.div

              className="pt-hero-actions"

              initial={{ opacity: 0, y: 15 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.65, delay: 0.32 }}

            >

              <a className="pt-button pt-button-primary" href="#projects">

                Explore our work <ArrowRight size={17} />

              </a>

              <a className="pt-button pt-button-secondary" href="#services">

                Our services <ArrowDownRight size={16} />

              </a>

            </motion.div>



            <motion.div

              className="pt-proof"

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ duration: 0.7, delay: 0.5 }}

            >

              <span className="pt-proof-icon">

                <Check size={19} />

              </span>

              <div>

                <strong>Thoughtfully designed.</strong>

                <small>Purposefully developed for real-world needs.</small>

              </div>

            </motion.div>



            <a href="#projects" className="pt-scroll-hint">

              <ArrowDown size={14} /> SCROLL TO EXPLORE

            </a>

          </div>



          <motion.div

            className="pt-hero-visual"

            initial={{ opacity: 0, scale: 0.96, y: 20 }}

            animate={{ opacity: 1, scale: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.18 }}

          >

            <Sparkles className="pt-floating-star" size={24} />

            <div className="pt-visual-top">

              <span>CREATIVE DIGITAL STUDIO</span>

              <span className="pt-live">

                <i /> READY TO BUILD

              </span>

            </div>

            <div className="pt-hero-logo-card">

              <div className="pt-brand-mark pt-big-mark">

                <span />

                <span />

                <span />

                <span />

              </div>

              <h2>

                Prime<span className="pt-brand-accent">Tech</span>

              </h2>

              <p>Thoughtfully digital.</p>

            </div>

            <div className="pt-visual-bottom">

              <div className="pt-mini-feature">

                <span><Zap size={17} /></span>

                <div>

                  <strong>Built for speed</strong>

                  <small>Fast, responsive experiences</small>

                </div>

              </div>

              <div className="pt-mini-feature">

                <span><Code2 size={17} /></span>

                <div>

                  <strong>Made with purpose</strong>

                  <small>Every detail has a reason</small>

                </div>

              </div>

            </div>

          </motion.div>

        </section>



        <div className="pt-marquee" aria-label="PrimeTech capabilities">

          <div className="pt-marquee-track">

            {[0, 1].map((copy) => (

              <span key={copy}>

                WEB DEVELOPMENT <i>✳</i> DIGITAL EXPERIENCES <i>✳</i> UI/UX

                DESIGN <i>✳</i> E-COMMERCE <i>✳</i> WEB APPLICATIONS <i>✳</i>

                CREATIVE TECHNOLOGY <i>✳</i>

              </span>

            ))}

          </div>

        </div>



        <section className="pt-wrap pt-section" id="projects">

          <Reveal className="pt-section-head">

            <div>

              <SectionLabel>SELECTED WORK</SectionLabel>

              <h2 className="pt-section-title">

                Ideas made <span className="pt-title-accent">real.</span>

              </h2>

            </div>

            <p className="pt-section-intro">

              A look at the digital experiences we're building. Each project

              combines thoughtful design with practical technology.

            </p>

          </Reveal>



          <div className="pt-project-grid">

            {projects.map((project, index) => (

              <Reveal key={project.number} delay={(index % 2) * 0.08}>

                <a

                  className="pt-project-card"

                  href={project.href}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label={`View ${project.name} demo`}

                >

                  <ProjectPreview project={project} />

                  <div className="pt-project-info">

                    <div>

                      <span className="pt-project-type">

                        {project.number} / {project.type}

                      </span>

                      <h3>{project.name}</h3>

                      <p className="pt-project-description">

                        {project.description}

                      </p>

                      <div className="pt-project-tags">

                        {project.tags.map((tag) => (

                          <span key={tag}>{tag}</span>

                        ))}

                      </div>

                    </div>

                    <span className="pt-project-link">

                      <ArrowUpRight size={19} />

                    </span>

                  </div>

                </a>

              </Reveal>

            ))}

          </div>



          <div className="pt-section-bottom">

            <span>Have an idea of your own?</span>

            <a href="#contact">

              Let's build something together <ArrowRight size={15} />

            </a>

          </div>

        </section>



        <section className="pt-services-section" id="services">

          <div className="pt-wrap pt-section">

            <Reveal className="pt-section-head">

              <div>

                <SectionLabel>WHAT WE DO</SectionLabel>

                <h2 className="pt-section-title">

                  Good ideas.

                  <br />

                  <span className="pt-title-accent">Great execution.</span>

                </h2>

              </div>

              <p className="pt-section-intro">

                From the first sketch to the final launch, we help you create

                digital solutions that make a real difference.

              </p>

            </Reveal>



            <div className="pt-service-grid">

              {services.map((service, index) => {

                const Icon = service.icon;



                return (

                  <Reveal key={service.number} delay={(index % 3) * 0.07}>

                    <article className="pt-service-card">

                      <div className="pt-service-top">

                        <span className="pt-service-icon">

                          <Icon size={21} />

                        </span>

                        <span className="pt-service-number">

                          / {service.number}

                        </span>

                      </div>

                      <h3>{service.title}</h3>

                      <p>{service.description}</p>

                      <div className="pt-service-tags">

                        {service.tags.map((tag) => (

                          <span key={tag}>{tag}</span>

                        ))}

                      </div>

                    </article>

                  </Reveal>

                );

              })}

            </div>

          </div>

        </section>



        <section className="pt-wrap pt-section" id="process">

          <Reveal className="pt-section-head">

            <div>

              <SectionLabel>HOW WE WORK</SectionLabel>

              <h2 className="pt-section-title">

                Simple process.

                <br />

                <span className="pt-title-accent">Solid results.</span>

              </h2>

            </div>

            <p className="pt-section-intro">

              No unnecessary complexity. Just a clear process that keeps your

              goals at the centre of every decision.

            </p>

          </Reveal>



          <div className="pt-process-grid">

            {process.map((step, index) => (

              <Reveal key={step.number} delay={index * 0.08}>

                <article className="pt-process-card">

                  <div className="pt-process-top">

                    <span>{step.number}</span>

                    <span><ArrowDownRight size={15} /></span>

                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </article>

              </Reveal>

            ))}

          </div>

        </section>



        <section className="pt-team-section" id="team">

          <div className="pt-wrap pt-section">

            <Reveal className="pt-section-head">

              <div>

                <SectionLabel>THE PEOPLE BEHIND THE WORK</SectionLabel>

                <h2 className="pt-section-title">

                  Meet the <span className="pt-title-accent">team.</span>

                </h2>

              </div>

              <p className="pt-section-intro">

                Different strengths. One shared vision. We bring together

                creativity, engineering, and security to build better digital

                experiences.

              </p>

            </Reveal>



            <div className="pt-team-grid">

              {team.map((member, index) => {

                const Icon = member.icon;



                return (

                  <Reveal key={member.number} delay={index * 0.07}>

                    <article className={`pt-team-card ${member.theme}`}>

                      <div className="pt-team-top">

                        <span className="pt-team-number">

                          / {member.number}

                        </span>

                        <span className="pt-team-symbol">

                          <Icon size={19} />

                        </span>

                      </div>



                      <div className="pt-team-avatar">

                        <img

                          src={member.image}

                          alt={`${member.title} profile`}

                          loading="lazy"

                          onError={(event) => {

                            const image = event.currentTarget;

                            const avatar = image.parentElement;

                            image.style.display = "none";

                            avatar.classList.add("pt-team-avatar-fallback");

                            avatar.setAttribute("data-initials", member.initials);

                          }}

                        />

                      </div>



                      <h3>{member.name}</h3>

                      <span className="pt-team-title">{member.title}</span>

                      <p>{member.description}</p>



                      <div className="pt-team-footer">

                        <span>PRIMETECH TEAM</span>

                        <ArrowUpRight size={17} />

                      </div>

                    </article>

                  </Reveal>

                );

              })}

            </div>



            <div className="pt-section-bottom">

              <span>Good work starts with good people.</span>

              <a href="#contact">

                Work with us <ArrowRight size={15} />

              </a>

            </div>

          </div>

        </section>



        <section className="pt-wrap pt-section pt-about" id="about">

          <Reveal>

            <div className="pt-about-visual">

              <div className="pt-brand-mark pt-about-mark">

                <span />

                <span />

                <span />

                <span />

              </div>

              <div className="pt-about-caption">

                <span>PRIMETECH / OUR APPROACH</span>

                <Sparkles size={17} />

              </div>

            </div>

          </Reveal>



          <Reveal className="pt-about-copy">

            <SectionLabel>A LITTLE ABOUT US</SectionLabel>

            <h2>

              Small details.

              <br />

              Big <span>difference.</span>

            </h2>

            <p>

              Good technology should feel effortless. We combine thoughtful

              design, practical development, and attention to detail to create

              digital experiences that are easy to use and built around real

              needs.

            </p>



            <div className="pt-values">

              <div className="pt-value">

                <span><Check size={17} /></span>

                <div>

                  <strong>Thoughtful by design</strong>

                  <small>Every screen has a purpose.</small>

                </div>

              </div>

              <div className="pt-value">

                <span><Code2 size={17} /></span>

                <div>

                  <strong>Built to work</strong>

                  <small>Practical solutions, not needless complexity.</small>

                </div>

              </div>

              <div className="pt-value">

                <span><Zap size={17} /></span>

                <div>

                  <strong>Focused on your goals</strong>

                  <small>Your idea guides the whole process.</small>

                </div>

              </div>

            </div>

          </Reveal>

        </section>



        <section className="pt-wrap" id="contact">

          <Reveal>

            <div className="pt-contact">

              <div className="pt-contact-intro">

                <SectionLabel>LET'S WORK TOGETHER</SectionLabel>

                <h2>

                  Your next big

                  <br />

                  idea starts <span>here.</span>

                </h2>

                <p>

                  Tell us what you're thinking. We'll help you work out the next

                  step and how to make your idea happen.

                </p>



                <div className="pt-contact-note">

                  <span><Send size={19} /></span>

                  <div>

                    <strong>Start with a conversation</strong>

                    <small>Share your idea. Let's explore the possibilities.</small>

                  </div>

                </div>



                {/* WhatsApp button is now inside the contact section */}

                <WhatsAppButton />

              </div>



              <form className="pt-contact-form" onSubmit={submitForm}>

                <div className="pt-form-row">

                  <label>

                    Your name

                    <input

                      type="text"

                      name="name"

                      placeholder="Enter your name"

                      value={form.name}

                      onChange={updateForm}

                      required

                    />

                  </label>

                  <label>

                    Email address

                    <input

                      type="email"

                      name="email"

                      placeholder="you@example.com"

                      value={form.email}

                      onChange={updateForm}

                      required

                    />

                  </label>

                </div>



                <label>

                  What can we help you with?

                  <select

                    name="service"

                    value={form.service}

                    onChange={updateForm}

                    required

                  >

                    <option value="">Choose a service</option>

                    {services.map((service) => (

                      <option key={service.number} value={service.title}>

                        {service.title}

                      </option>

                    ))}

                    <option value="Something else">Something else</option>

                  </select>

                </label>



                <label>

                  Tell us about your project

                  <textarea

                    name="message"

                    placeholder="Your idea, goals, or challenges..."

                    value={form.message}

                    onChange={updateForm}

                    required

                  />

                </label>



                <button
                  className="pt-button pt-button-primary pt-form-submit"
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending enquiry..." : "Send project enquiry"}
                  {!isSubmitting && <ArrowUpRight size={18} />}
                </button>

                <p
                  className="pt-form-footnote"
                  role="status"
                  aria-live="polite"
                  style={{
                    color:
                      submitStatus === "success"
                        ? "#287a38"
                        : submitStatus === "error"
                          ? "#c0392b"
                          : undefined,
                  }}
                >
                  {submitMessage ||
                    "Your enquiry will be sent securely to the PrimeTech team."}
                </p>
              </form>

            </div>

          </Reveal>

        </section>

      </main>



      <footer className="pt-wrap pt-footer">

        <Brand />

        <p className="pt-footer-copy">

          © {new Date().getFullYear()} PrimeTech. Built with purpose.

        </p>

        <div className="pt-footer-links">

          <a href="#projects">Work</a>

          <a href="#services">Services</a>

          <a href="#team">Team</a>

          <a href="#contact">Contact</a>

        </div>

        <a href="#home" className="pt-back-top" aria-label="Back to top">

          <ArrowDown size={16} style={{ transform: "rotate(180deg)" }} />

        </a>

      </footer>

    </div>

  );

}
