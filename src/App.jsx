import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Instagram, ArrowUpRight, Code2, PenTool, Layout, Search, Layers, Cpu, ChevronRight, Globe, Zap, Lightbulb, CheckCircle2, Eye, Rocket, Compass, MessageSquare } from 'lucide-react';

// --- ASSET IMPORTS ---
import profilePic from './assets/Photo.jpg'; 
import caseStudyMockup from './assets/Mockuuups Mockup-1.jpeg'; 
import ranjanaPic from './assets/Ranjana.png'; 
import anilPic from './assets/Anil.png';   
import resumePdf from './assets/Pavan_N_Jadhav_Resume_v2.pdf'; // Your actual PDF file

// --- ANIMATION MASTER FRAMEWORK PHYSICS ---
const fluidSpring = { type: "spring", stiffness: 50, damping: 15 };

// --- DYNAMIC MULTI-ANIMATION SPACE & DESIGN BACKDROP CANVAS ---
const AdvancedCosmicBackground = () => (
  <div className="fixed inset-0 z-0 bg-[#030305] overflow-hidden select-none pointer-events-none">
    
    {/* Mathematical 12-Column Grid Guidelines */}
    <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 h-full w-full opacity-[0.015]">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="h-full border-r border-white last:border-none" />
      ))}
    </div>
    
    {/* Blueprint Noise Grid Matrix Overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:28px_28px]" />

    {/* ANIMATION 1: VISIBLE DIAGONAL FALLING STARS */}
    <div className="absolute inset-0 top-0 left-0 w-full h-full">
      <div className="cosmic-meteor drop-1" style={{ left: '10%', animationDelay: '0s' }} />
      <div className="cosmic-meteor drop-2" style={{ left: '35%', animationDelay: '2.2s' }} />
      <div className="cosmic-meteor drop-3" style={{ left: '60%', animationDelay: '1.1s' }} />
      <div className="cosmic-meteor drop-1" style={{ left: '85%', animationDelay: '4s' }} />
    </div>

    {/* ANIMATION 2: RUNNING ROCKET BOOSTER WITH EXHAUST GLOW TRAIL */}
    <div className="absolute bottom-0 right-[12%] w-24 h-full overflow-visible opacity-70">
      <div className="cosmic-rocket-booster flex flex-col items-center">
        <Rocket className="w-5 h-5 text-emerald-400 rotate-[-45deg]" />
        <div className="w-[1.5px] h-32 bg-gradient-to-b from-emerald-400 via-teal-500 to-transparent mt-1 shadow-[0_0_10px_#10b981]" />
      </div>
    </div>

    {/* ANIMATION 3: CYBER SPHERICAL EARTH WITH ACTIVE ORBITAL NODE */}
    <div className="absolute top-[18%] left-[-6%] w-[32vw] h-[32vw] max-w-[360px] max-h-[360px] border border-emerald-500/30 rounded-full flex items-center justify-center opacity-80">
      <div className="absolute w-[90%] h-[90%] border border-dashed border-teal-500/40 rounded-full run-rotation-slow" />
      <div className="absolute w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-3xl" />
      <Globe className="w-12 h-12 text-emerald-400/50 stroke-[1.2]" />
      <div className="cyber-satellite-node" />
    </div>

    {/* ANIMATION 4: RADAR OBSERVER EMITTING SCANNING CONIC BEAM */}
    <div className="absolute bottom-[18%] left-[6%] w-16 h-16 opacity-60 flex flex-col items-center justify-center">
      <Eye className="w-5 h-5 text-teal-400 stroke-[1.5] mb-1 animate-pulse" />
      <div className="absolute w-44 h-44 bg-gradient-to-tr from-teal-500/30 to-transparent run-conic-sweep origin-bottom-left" />
    </div>

    {/* ANIMATION 5: DESIGN VECTOR CANVAS OUTLINES DRAWING CONTINUOUSLY */}
    <div className="absolute top-[22%] right-[4%] w-48 h-48 opacity-50 flex items-center justify-center">
      <Compass className="w-6 h-6 text-emerald-400/60 absolute run-rotation-slow" />
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <motion.path 
          d="M10,50 Q30,20 50,50 T90,50" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="50" cy="50" r="22" 
          fill="none" 
          stroke="#22d3ee" 
          strokeWidth="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>
    </div>

    {/* Radial Ambient Center Nebula Glow Overlay */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-emerald-500/5 rounded-full blur-[140px]" />
  </div>
);

// --- NAVIGATION BAR ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#030305]/80 border-b border-zinc-900/60 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="font-bold text-xs tracking-[0.25em] text-white uppercase font-sans">
          PAVAN N JADHAV
        </span>
      </Link>
      
      <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Expertise</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
        <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
        <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
      </div>

      {/* Download button updated to use your actual PDF file */}
      <a 
        href={resumePdf} 
        download="Pavan_N_Jadhav_Resume_v2.pdf" 
        className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:scale-105"
      >
        <Download className="w-3 h-3 text-emerald-400 stroke-[2.5]" /> Download CV
      </a>
    </div>
  </nav>
);

// --- HERO DISPLAY VIEWPORT ---
const Hero = () => (
  <section className="min-h-screen pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between relative z-10 overflow-visible">
    
    <div className="w-full flex flex-col items-center text-center z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-[10px] font-bold text-emerald-400 mb-5 uppercase tracking-wider animate-pulse"
      >
        <Zap className="w-3 h-3 fill-emerald-400 text-emerald-400" />
        Product Design Engineering Core
      </motion.div>
      
      <div className="overflow-hidden py-1">
        <motion.h1 
          initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-[6.5vw] font-black tracking-tight uppercase text-white leading-[0.92]"
        >
          UI/UX Designer
        </motion.h1>
      </div>
      <div className="overflow-hidden py-1">
        <motion.h2 
          initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-[3.2vw] font-bold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-zinc-500 leading-none mt-2"
        >
          Scaling Digital Realities
        </motion.h2>
      </div>
    </div>

    <div className="relative w-full max-w-sm mx-auto h-[50vh] md:h-[60vh] my-6 flex items-center justify-center z-0">
      <div className="absolute inset-0 m-auto w-[280px] h-[280px] bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-transparent rounded-full blur-[55px] pointer-events-none z-0 animate-pulse" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        whileHover={{ scale: 1.02 }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          default: { type: "spring", stiffness: 50, damping: 15, delay: 0.2 }
        }}
        className="w-full h-full relative z-10 flex items-end justify-center overflow-hidden rounded-[2rem] border border-zinc-800/80 bg-zinc-950/40 shadow-[0_30px_60px_rgba(0,0,0,0.85)] group transform-gpu"
      >
        <img 
          src={profilePic} 
          alt="Pavan N Jadhav Portrait View" 
          className="w-full h-full object-cover grayscale contrast-[1.14] brightness-[0.95] mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60 pointer-events-none" />
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-zinc-900/80 pt-8 w-full z-10">
      <div className="col-span-1 md:col-span-4 flex flex-col items-start text-left">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">// CAPABILITY MATRIX</span>
        <p className="text-xs text-zinc-400 leading-relaxed font-medium">
          Creative UI/UX Designer skilled in translating complex target user research layouts directly into optimized components.
        </p>
      </div>

      <div className="hidden md:flex col-span-1 md:col-span-4 flex-col items-center justify-center text-[9px] tracking-[0.3em] text-zinc-600 uppercase font-mono">
        <span className="animate-bounce mb-1">↓</span>
        <span>SCROLL DOWN</span>
      </div>

      <div className="col-span-1 md:col-span-4 flex md:justify-end gap-3">
        <a href="#work" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-full transition-all flex items-center gap-1.5 shadow-[0_4px_25px_rgba(16,185,129,0.25)]">
          Explore Artifacts <ChevronRight className="w-3.5 h-3.5" />
        </a>
        <a href="#contact" className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white text-xs font-bold rounded-full transition-all">
          Let's Sync
        </a>
      </div>
    </div>
  </section>
);

// --- ABOUT ME DETAILS SECTION ---
const AboutMe = () => (
  <section id="about" className="py-28 px-6 md:px-12 bg-[#040406]/60 border-t border-zinc-900 relative z-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      <div className="col-span-1 md:col-span-4">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-3">// CONTEXT BLUEPRINT</span>
        <h2 className="text-3xl font-light text-zinc-100 tracking-tight uppercase font-sans">
          Software Product <br />
          <span className="font-semibold text-zinc-500">Engineering.</span>
        </h2>
      </div>
      <div className="col-span-1 md:col-span-8 text-zinc-400 text-sm md:text-base space-y-6 leading-relaxed tracking-wide font-medium max-w-3xl">
        <p>
          Currently pursuing a Bachelor of Computer Applications (Hons.) in Software Product Engineering at R.V. College of Engineering. This architectural layout background empowers me to bridge development system models smoothly with user metrics.
        </p>
        <p className="text-zinc-500 text-xs md:text-sm">
          I apply rigorous user-centered design paradigms to build clean layout structures, custom wireframes, and scalable component assets optimized for production environments.
        </p>
      </div>
    </div>
  </section>
);

// --- MOVABLE INFINITE MARQUEE SKILLS LINE ---
const InfiniteSkills = () => {
  const skills = [
    { name: "UI & UX Design", icon: PenTool },
    { name: "React.js Framework", icon: Code2 },
    { name: "Tailwind CSS Layouts", icon: Layout },
    { name: "UX Research & Strategy", icon: Search },
    { name: "High-Fidelity Prototyping", icon: Layers },
    { name: "Product Engineering Systems", icon: Cpu }
  ];

  return (
    <section id="skills" className="py-12 border-y border-zinc-900/80 bg-[#050508]/40 relative z-10 overflow-hidden select-none">
      <div className="flex w-[200%] whitespace-nowrap run-infinite-marquee">
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="inline-flex items-center gap-3 mx-12 text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-zinc-200 transition-colors cursor-default">
            <skill.icon size={14} className="text-emerald-400 stroke-[2.5]" />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

// --- DIRECT STABLE ACTION DESIGN PROCESS GRID ---
const DesignProcess = () => {
  const steps = [
    { icon: Search, title: "01 / Discover Matrix", desc: "Isolating product friction benchmarks through user persona documentation, empathy mapping loops, and rigorous user analysis." },
    { icon: Lightbulb, title: "02 / Structural Flow", desc: "Constructing rigorous information architecture trees, explicit feature mapping scopes, and cohesive high-intent navigation systems." },
    { icon: PenTool, title: "03 / Component Craft", desc: "Assembling modular atomic design systems in Figma using strict variants, 12-column grid metrics, and clean auto-layouts." },
    { icon: CheckCircle2, title: "04 / Usability Testing", desc: "Executing complete verification testing schedules to validate visual UI choices directly against user well-being benchmarks." }
  ];

  return (
    <section id="process" className="py-28 px-6 md:px-12 relative z-10 bg-[#030305]">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block mb-2">// REPEATABLE OPERATIONS</span>
          <h2 className="text-3xl md:text-4xl font-light uppercase text-white tracking-tight">Design Architecture</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 25 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.08 }}
              whileHover={{ y: -8, borderColor: "rgba(16,185,129,0.35)" }}
              className="p-6 rounded-2xl bg-[#09090b]/90 border border-zinc-900/80 text-zinc-300 transition-all cursor-default shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <div className="w-10 h-10 bg-zinc-900 border border-zinc-800/80 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
                <step.icon className="text-emerald-400 w-4 h-4 stroke-[2.5]" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CHRONOLOGY TIMELINE ---
const Timeline = () => {
  const milestones = [
    { date: "JAN 2026 - PRESENT", title: "UI/UX Design Specialist", inst: "Internshala Trainings", desc: "Mastering user persona generation, interface guidelines, layout tracking, and full responsive Figma components." },
    { date: "DEC 2025 - MAY 2026", title: "UI/UX Specialization Track", inst: "Internshala", desc: "Constructing advanced high-fidelity case study blueprints, component nesting, and design execution assets." },
    { date: "2024 - 2028", title: "BCA (Hons.) Software Product Engineering", inst: "R. V. College Of Engineering, Bangalore", desc: "Fusing foundational computer science architecture arrays, system logic, and data control protocols directly with visual craft." },
    { date: "LEADERSHIP ROLE", title: "Ex-Vice President", inst: "Recoil Biker Club", desc: "Directed departmental coordination schedules, led asset tasks, and generated high-converting custom media files." }
  ];

  return (
    <section id="timeline" className="py-28 px-6 md:px-12 bg-[#040406]/60 border-y border-zinc-900 relative z-10 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block mb-2">// TRACK RECORD</span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight">Timeline History</h2>
        </div>

        <div className="space-y-10 relative border-l border-zinc-800/80 ml-4 pl-6 md:pl-12">
          {milestones.map((item, index) => (
            <div 
              key={index}
              className="relative bg-[#09090b] p-6 rounded-xl border border-zinc-900/80 hover:border-zinc-800 transition-colors"
            >
              <div className="absolute -left-[31px] md:-left-[55px] top-6 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] border-2 border-black" />
              <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase font-mono block mb-1.5">{item.date}</span>
              <h4 className="text-base font-bold uppercase tracking-tight text-zinc-100">{item.title}</h4>
              <span className="text-[11px] font-semibold text-zinc-500 block mb-3 uppercase tracking-wide">{item.inst}</span>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS SECTION ---
const FeaturedProjects = () => (
  <section id="work" className="py-28 px-6 md:px-12 relative z-10 bg-transparent">
    <div className="max-w-7xl mx-auto">
      <div className="text-left mb-16">
        <h2 className="text-3xl md:text-4xl font-light uppercase text-white tracking-tight">Case Studies</h2>
      </div>

      <div className="grid grid-cols-1 gap-12">
        
        {/* Project 1 Grid Block: The Family */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="bg-[#09090b]/90 border border-zinc-900 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-zinc-800 transition-all shadow-xl group"
        >
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase block mb-1.5">// PREMIER CASE REPO</span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">The Family</h3>
              
              <div className="space-y-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">
                <p>
                  <strong className="text-zinc-200">Concept Statement:</strong> Designed an end-to-end private mobile app concept focused on shifting social media paradigms from passive scrolling to high-intent digital intimacy for inner circles.
                </p>
                <p>
                  <strong className="text-zinc-200">UX Strategy & Metrics:</strong> Executed user interviews, competitive matrices, and affinity mapping to target digital fatigue. Designed empathetic wellbeing features, including hard session endpoints and an active Dinner Table Mode system lock.
                </p>
                <p>
                  <strong className="text-zinc-200">UI & Interaction:</strong> Engineered high-fidelity interfaces featuring real-time presence indicators, a gamified Bonding Strength progression metric, and an on-post Hold to React feedback mechanic to encourage active validation over empty likes. Built a scalable Figma component library using 100% strict Auto-Layout, nested components, and interactive variants, fully optimized for seamless React and Tailwind CSS developer handoff.
                </p>
              </div>
            </div>

            <a 
              href="https://www.behance.net/gallery/249523809/-The-Family-Reimagining-Social-Media" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 font-bold uppercase text-[11px] tracking-widest text-white border-b border-emerald-500 pb-0.5 w-fit mt-8"
            >
              Launch Project on Behance <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="lg:col-span-5 h-64 md:h-80 bg-zinc-950 rounded-[1.5rem] border border-zinc-900 overflow-hidden relative">
            <img 
              src={caseStudyMockup} 
              alt="The Family Interface Presentation Grid" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        </motion.div>

        {/* Project 2 & 3 Split Column Layout Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project 2: Habit Builder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
            whileHover={{ y: -4, borderColor: "rgba(16,185,129,0.25)" }}
            className="p-6 bg-[#09090b]/90 border border-zinc-900 rounded-2xl flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <span className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase block mb-1">UI/UX Case Study</span>
              <h4 className="text-lg font-bold uppercase text-zinc-200 mb-3">One Step Daily Habit Builder</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-medium mb-4">
                Designed a minimalist habit-builder focused on long-term retention, implementing a "10-second rule" action flow to minimize friction and extend user consistency beyond 7+ days. Developed a high-fidelity "Focused Pro" design system in Figma using a strategic color palette and bold typography to create a high-energy, modern visual identity.
              </p>
            </div>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mt-4">// STRATEGIC RETENTION SPEC</span>
          </motion.div>

          {/* Project 3: AcademiaGPT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
            whileHover={{ y: -4, borderColor: "rgba(16,185,129,0.25)" }}
            className="p-6 bg-[#09090b]/90 border border-zinc-900 rounded-2xl flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <span className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase block mb-1">Full-Stack Application</span>
              <h4 className="text-lg font-bold uppercase text-zinc-200 mb-3">AcademiaGPT</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-medium mb-4">
                Developed a full-stack MERN application to transform static study materials into interactive knowledge bases, featuring AI-powered context-aware chat and instant document summarization. Engineered automated practice quiz generation via API integration, streamlining exam preparation through a responsive, user-centered UI/UX design built with React and Tailwind CSS.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-wider block mt-4">// MERN & TAILWIND REPO CODE</span>
          </motion.div>

        </div>

      </div>
    </div>
  </section>
);

// --- TESTIMONIALS SECTION ---
const Testimonials = () => (
  <section id="testimonials" className="py-28 px-6 md:px-12 relative z-10 bg-transparent border-t border-zinc-900/60">
    <div className="max-w-7xl mx-auto">
      <div className="text-left mb-16">
        <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block mb-2">// USER ENDORSEMENTS</span>
        <h2 className="text-3xl md:text-4xl font-light uppercase text-white tracking-tight">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Endorsement 1: Ranjana Jadhav */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          whileHover={{ borderColor: "rgba(16,185,129,0.25)", y: -4 }}
          className="p-8 rounded-2xl bg-[#09090b]/90 border border-zinc-900 text-zinc-300 relative shadow-2xl transition-all group"
        >
          <MessageSquare className="absolute top-6 right-6 text-zinc-800 w-6 h-6 stroke-[1.5]" />
          <p className="text-zinc-400 font-normal text-sm leading-relaxed mb-8">
            "Pavan integrates creative system aesthetics with complex technical engineering logic flawlessly. His eye for product framework validation and user flows makes him an outstanding collaborator."
          </p>
          <div className="flex items-center justify-between border-t border-zinc-900 pt-5">
            <div className="flex items-center gap-3">
              <img 
                src={ranjanaPic} 
                alt="Ranjana Jadhav" 
                className="w-9 h-9 rounded-xl object-cover border border-zinc-800" 
              />
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white leading-none">Ranjana Jadhav</h4>
                <p className="text-zinc-500 font-semibold text-[10px] mt-1.5 uppercase tracking-wide">Junior SOC Analyst</p>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/ranjana-jadhav-b9089727a/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 bg-zinc-900 border border-zinc-800/80 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
          </div>
        </motion.div>

        {/* Endorsement 2: Anil Gehlot */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
          whileHover={{ borderColor: "rgba(16,185,129,0.25)", y: -4 }}
          className="p-8 rounded-2xl bg-[#09090b]/90 border border-zinc-900 text-zinc-300 relative shadow-2xl transition-all group"
        >
          <MessageSquare className="absolute top-6 right-6 text-zinc-800 w-6 h-6 stroke-[1.5]" />
          <p className="text-zinc-400 font-normal text-sm leading-relaxed mb-8">
            "Working on cross-functional frontend modules with Pavan has been smooth. He maps clean layout architectures and designs robust component frameworks ready for real-world code integration."
          </p>
          <div className="flex items-center justify-between border-t border-zinc-900 pt-5">
            <div className="flex items-center gap-3">
              <img 
                src={anilPic} 
                alt="Anil Gehlot N" 
                className="w-9 h-9 rounded-xl object-cover border border-zinc-800" 
              />
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white leading-none">Anil Gehlot N</h4>
                <p className="text-zinc-500 font-semibold text-[10px] mt-1.5 uppercase tracking-wide">Freelance Engineer & Student</p>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/anil-gehlot-n-907a76371/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 bg-zinc-900 border border-zinc-800/80 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 stroke-[1.8]" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

// --- FOOTER CONTACT CARD ---
const Contact = () => (
  <footer id="contact" className="py-28 border-t border-zinc-900/60 bg-[#040406]/30 relative z-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
      
      <div className="col-span-1 md:col-span-5 flex flex-col justify-between space-y-12">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase block mb-2">// PIPELINE SYNC</span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">Initiate <br />Connection.</h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-normal max-w-xs">
            Let's connect channels to build advanced component systems and intuitive digital platforms.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400"><Mail className="w-4 h-4" /></div>
            <div>
              <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-wider">Direct Endpoint</p>
              <a href="mailto:pavannjadhav12@gmail.com" className="text-white text-xs font-bold hover:text-emerald-400 transition-colors">pavannjadhav12@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-zinc-600 font-bold text-[10px] tracking-widest uppercase mb-4">Coordinate Hub Nodes</h4>
          <div className="flex gap-3">
            <a 
              href="https://www.linkedin.com/in/pavan-jadhav-28aa0b2aa/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-md"
            >
              <Linkedin className="w-4 h-4 stroke-[2]" />
            </a>
            <a 
              href="https://www.behance.net/pavanjadhav18" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0057ff] hover:border-[#0057ff] transition-all duration-300 shadow-md"
            >
              <Globe className="w-4 h-4 stroke-[2]" />
            </a>
            <a 
              href="https://www.instagram.com/pavan______jadhav77/" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#e1306c] hover:border-[#e1306c] transition-all duration-300 shadow-md"
            >
              <Instagram className="w-4 h-4 stroke-[2]" />
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-7 bg-[#09090b] p-6 md:p-10 rounded-2xl border border-zinc-900/80 shadow-2xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">First Name</label>
              <input type="text" className="w-full bg-[#111114] border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-zinc-700 outline-none transition-colors placeholder-zinc-700" placeholder="John" />
            </div>
            <div>
              <label className="block text-zinc-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">Last Name</label>
              <input type="text" className="w-full bg-[#111114] border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-zinc-700 outline-none transition-colors placeholder-zinc-700" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-zinc-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">Email Destination</label>
            <input type="email" className="w-full bg-[#111114] border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-zinc-700 outline-none transition-colors placeholder-zinc-700" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-zinc-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">Project Specifications Brief</label>
            <textarea rows="3" className="w-full bg-[#111114] border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-zinc-700 outline-none transition-colors placeholder-zinc-700" placeholder="Detail your project specifications..."></textarea>
          </div>
          <button className="w-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg">
            Dispatch Transmission
          </button>
        </form>
      </div>
    </div>
    
    <div className="mt-20 text-center text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
      <p>© 2026 Pavan N Jadhav. Handcrafted cleanly using React & Tailwind CSS v4.</p>
    </div>
  </footer>
);

// --- APP ROOT CONFIGURATION MODULE ---
export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="text-white min-h-screen relative selection:bg-emerald-500 selection:text-black antialiased font-sans">
        
        {/* HIGH-PERFORMANCE STYLE DIRECTIVE */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infiniteMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes rotationSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes meteorDrop {
            0% { transform: translateY(-100px) translateX(0) rotate(35deg); opacity: 0; }
            8% { opacity: 1; }
            50% { opacity: 0.8; }
            100% { transform: translateY(115vh) translateX(-180px) rotate(35deg); opacity: 0; }
          }
          @keyframes rocketLaunch {
            0% { transform: translateY(110vh) scale(0.95); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-120vh) scale(0.6); opacity: 0; }
          }
          @keyframes beamSweep {
            0%, 100% { transform: rotate(-10deg); opacity: 0.2; }
            50% { transform: rotate(35deg); opacity: 0.6; }
          }
          .run-infinite-marquee {
            animation: infiniteMarquee 22s linear infinite !important;
          }
          .run-rotation-slow {
            animation: rotationSlow 30s linear infinite !important;
          }
          .cosmic-meteor {
            position: absolute;
            top: -150px;
            width: 2px;
            height: 110px;
            background: linear-gradient(to bottom, rgba(16,185,129,0) 0%, rgba(16,185,129,1) 50%, rgba(34,211,238,1) 80%, rgba(34,211,238,0) 100%);
            opacity: 0;
          }
          .cosmic-meteor.drop-1 { animation: meteorDrop 5s linear infinite; }
          .cosmic-meteor.drop-2 { animation: meteorDrop 7s linear infinite; height: 130px; width: 2.5px; }
          .cosmic-meteor.drop-3 { animation: meteorDrop 6s linear infinite; height: 90px; }
          
          .cosmic-rocket-booster {
            position: absolute;
            animation: rocketLaunch 12s cubic-bezier(0.15, 0.85, 0.3, 1) infinite;
          }
          .run-conic-sweep {
            animation: beamSweep 6s ease-in-out infinite;
          }
          .cyber-satellite-node {
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: #22d3ee;
            border-radius: 50%;
            top: 15%;
            left: 15%;
            box-shadow: 0 0 10px #22d3ee;
            animation: rotationSlow 10s linear infinite;
            transform-origin: 100px 100px;
          }
        `}} />

        <AdvancedCosmicBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />
              <InfiniteSkills />
              <DesignProcess />
              <Timeline />
              <FeaturedProjects />
              <Testimonials />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}