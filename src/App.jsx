import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Instagram, ArrowRight, Code2, PenTool, Layout, Terminal, Smartphone, Monitor, Globe, Search, Lightbulb, CheckCircle, MessageSquare, Database, Cpu, Layers } from 'lucide-react';

// --- IMAGE IMPORT ---
import profilePic from './assets/Photo.jpg'; 
import tailorMockup from './assets/Casestudy.jpg'; 

// --- 1. METEOR BACKGROUND ---
const StarBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030712] overflow-hidden">
      {/* Static Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Floating Stars */}
      <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  initial={{ x: Math.random() * 2000, y: Math.random() * 2000, scale: Math.random() * 0.5 + 0.5, opacity: Math.random() * 0.5 + 0.3 }}
                  animate={{ y: [null, Math.random() * 2000], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: Math.random() * 10 + 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: Math.random() * 3 + "px", height: Math.random() * 3 + "px" }}
              />
          ))}
      </div>
      {/* Shooting Meteors */}
      {[...Array(5)].map((_, i) => (
         <motion.div
            key={`meteor-${i}`}
            className="absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            initial={{ top: -100, left: Math.random() * 1000, opacity: 0, rotate: 45 }}
            animate={{ top: [Math.random() * -100, 1000], left: [Math.random() * 1000, Math.random() * 1000 + 200], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.5)" }} 
         />
      ))}
      {/* Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
    </div>
  );
};

// --- NAVBAR ---
const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const getLink = (id) => isHome ? `#${id}` : `/#${id}`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase">
          PAVAN<span className="text-blue-500">.JADHAV</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Work', 'Contact'].map((item) => (
            <a key={item} href={getLink(item.toLowerCase())} className="text-sm font-bold text-gray-400 hover:text-white transition-all uppercase tracking-wide">
              {item}
            </a>
          ))}
          <a href="/resume.pdf" download className="bg-white text-black hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg">
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- HERO SECTION ---
const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative px-6">
    <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 mb-8 tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          UI/UX Designer & Developer
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 text-white">
          CRAFTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            DIGITAL EMPATHY
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
           I design <b>Human-Centered Interfaces</b> backed by research, and I code them into reality.
        </p>
        <div className="flex gap-6">
          <a href="#work" className="px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform">
            View Case Studies
          </a>
          <a href="#contact" className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all">
            Let's Talk
          </a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
        <div className="relative w-[400px] h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-30"></div>
            <div className="absolute inset-4 bg-gray-900/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
                <img src={profilePic} alt="Pavan N Jadhav" className="object-cover w-full h-full hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute bottom-8 left-8">
                    <p className="text-gray-400 text-sm font-mono mb-1">HELLO, I'M</p>
                    <h3 className="text-3xl font-bold text-white">PAVAN</h3>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- ABOUT ME SECTION ---
const AboutMe = () => (
    <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">About Me</span>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Hello, I'm Pavan</h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 font-light">
                    Hello, I'm Pavan — a <span className="text-purple-400 font-bold">UI/UX Designer</span> with a background in 
                    Full Stack Development. The shift might look surprising at first, but it makes perfect sense to me. 
                    Design has always been the thing that pulls me in.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-12">
                    I love uncovering UI/UX issues, spotting visual quirks in websites and apps, and shaping them into 
                    something more intuitive. I'm always exploring new tools, diving into emerging design trends, 
                    and tackling problems that ask for thoughtful solutions.
                </p>
            </motion.div>
        </div>
    </section>
);

// --- SKILLS SECTION (ADDED BACK!) ---
const InfiniteSkills = () => {
    const skills = [
      { name: "Figma", icon: PenTool },
      { name: "React.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Java", icon: Terminal },
      { name: "Spring Boot", icon: Database },
      { name: "UX Research", icon: Search },
      { name: "Prototyping", icon: Layers },
      { name: "Wireframing", icon: Monitor },
    ];
  
    return (
      <section id="skills" className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
             <h2 className="text-3xl font-bold text-white mb-2">Skills & Expertise</h2>
             <p className="text-gray-400">Mastering the art of user-centered design through cutting-edge tools.</p>
        </div>
        <div className="flex w-[200%] animate-marquee">
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-3 mx-10 text-xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">
              <skill.icon size={24} className="text-blue-500" />
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    );
};

// --- DESIGN PROCESS SECTION ---
const DesignProcess = () => (
    <section id="process" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">MY DESIGN PROCESS</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">A structured approach to creating meaningful digital experiences.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { icon: Search, title: "Research", desc: "Understanding user needs through personas, competitive analysis, and empathy mapping." },
                    { icon: Lightbulb, title: "Ideate", desc: "Brainstorming solutions, user flows, and information architecture." },
                    { icon: PenTool, title: "Design", desc: "Creating wireframes, high-fidelity prototypes, and design systems in Figma." },
                    { icon: CheckCircle, title: "Test", desc: "Validating decisions through usability testing and iterative improvements." }
                ].map((step, index) => (
                    <motion.div key={index} whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group backdrop-blur-sm">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                            <step.icon className="text-blue-400 group-hover:text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// --- JOURNEY MAP ---
const JourneyMap = () => (
    <section id="journey" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-20 text-center text-white">MY JOURNEY</h2>
            <div className="space-y-20 border-l-2 border-white/10 ml-4 pl-12 md:pl-20">
                {/* 2026 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                    <div className="absolute -left-[53px] md:-left-[85px] top-2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] border-4 border-black"></div>
                    <span className="text-blue-400 font-bold tracking-widest text-sm">2026 - PRESENT</span>
                    <h3 className="text-3xl font-bold text-white mt-2 mb-4">UX/UI Design Specialization</h3>
                    <p className="text-gray-400 text-lg">Internshala Training • Specialized in User Persona creation, Accessibility standards, and high-fidelity Wireframing.</p>
                </motion.div>
                {/* 2025 */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                    <div className="absolute -left-[53px] md:-left-[85px] top-2 w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)] border-4 border-black"></div>
                    <span className="text-purple-400 font-bold tracking-widest text-sm">2025</span>
                    <h3 className="text-3xl font-bold text-white mt-2 mb-4">Full Stack Development</h3>
                    <p className="text-gray-400 text-lg">Self-Taught • Built robust applications using React.js, Spring Boot, and Tailwind CSS. Focused on clean architecture.</p>
                </motion.div>
                 {/* Start */}
                 <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                    <div className="absolute -left-[53px] md:-left-[85px] top-2 w-5 h-5 rounded-full bg-gray-600 border-4 border-black"></div>
                    <span className="text-gray-500 font-bold tracking-widest text-sm">THE BEGINNING</span>
                    <h3 className="text-3xl font-bold text-white mt-2 mb-4">Hello World</h3>
                    <p className="text-gray-400 text-lg">Bangalore • Started my journey into code and design.</p>
                </motion.div>
            </div>
        </div>
    </section>
);

// --- WORK SECTION ---
const FeaturedProject = () => (
  <section id="work" className="py-32 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-black text-white mb-16">SELECTED WORK</h2>
      <motion.div whileHover={{ scale: 1.01 }} className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md grid md:grid-cols-2 shadow-2xl">
         {/* Left Side: Text */}
         <div className="p-12 md:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-lg text-blue-400 font-bold text-xs tracking-widest mb-6 w-fit">CASE STUDY</div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">Tailor App</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">A dedicated pet care platform. I conducted user research with 15+ pet owners to identify the "Trust Gap" and designed a verified booking flow that solved it.</p>
            <div className="flex flex-wrap gap-3 mb-10">
                {['User Research', 'Wireframing', 'Prototyping'].map(tag => (
                    <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300">{tag}</span>
                ))}
            </div>
            <Link to="/tailor" className="inline-flex items-center gap-3 text-white font-bold text-lg hover:gap-6 transition-all">
              View Case Study <ArrowRight className="w-6 h-6" />
            </Link>
         </div>
         {/* Right Side: Image */}
         <div className="relative min-h-[400px] h-full overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-40"></div>
            <img src={tailorMockup} alt="Tailor App Screen" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60 md:to-transparent"></div>
         </div>
      </motion.div>
    </div>
  </section>
);

// --- TESTIMONIALS SECTION ---
const Testimonials = () => (
    <section id="testimonials" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
                <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Endorsements</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4">WHAT PEOPLE SAY</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                 <div className="p-10 rounded-3xl bg-white/5 border border-white/10 relative backdrop-blur-sm">
                    <MessageSquare className="absolute top-10 right-10 text-white/10 w-12 h-12" />
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">"Pavan brings a rare combination of creative flair and technical logic. His ability to translate complex user needs into simple, beautiful interfaces is outstanding."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white">R</div>
                        <div>
                            <h4 className="text-white font-bold">Ranjana N Jadhav</h4>
                            <p className="text-gray-500 text-sm">Senior Product Designer</p>
                        </div>
                    </div>
                 </div>
                 <div className="p-10 rounded-3xl bg-white/5 border border-white/10 relative backdrop-blur-sm">
                    <MessageSquare className="absolute top-10 right-10 text-white/10 w-12 h-12" />
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">"Working with Pavan was seamless. He understands that design isn't just about how it looks, but how it works for the end user."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">M</div>
                        <div>
                            <h4 className="text-white font-bold">Mike Chen</h4>
                            <p className="text-gray-500 text-sm">Frontend Lead</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>
);

// --- CONTACT SECTION ---
const Contact = () => (
  <footer id="contact" className="py-32 border-t border-white/10 bg-black/60 relative backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
            <h2 className="text-5xl font-black text-white mb-8">Let's start a project together.</h2>
            <p className="text-gray-400 text-lg mb-12">Got a bold vision? I'm ready to bring it to life with pixel-perfect design and clean code.</p>
            <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-400"><Mail /></div>
                    <div>
                        <p className="text-gray-500 text-sm">Email me at</p>
                        <a href="mailto:pavannjadhav12@gmail.com" className="text-white font-bold text-lg">pavannjadhav12@gmail.com</a>
                    </div>
                </div>
            </div>
            <h4 className="text-white font-bold mb-6">Follow Me</h4>
            <div className="flex gap-4">
                <a href="https://www.behance.net/pavanjadhav18" target="_blank" className="p-4 bg-white/5 rounded-xl text-white hover:bg-[#1769ff] hover:text-white transition-all border border-white/10"><Globe /></a>
                <a href="https://www.linkedin.com/in/pavan-jadhav-28aa0b2aa/" target="_blank" className="p-4 bg-white/5 rounded-xl text-white hover:bg-[#0077b5] hover:text-white transition-all border border-white/10"><Linkedin /></a>
                <a href="https://www.instagram.com/pavan______jadhav77/" target="_blank" className="p-4 bg-white/5 rounded-xl text-white hover:bg-[#E1306C] hover:text-white transition-all border border-white/10"><Instagram /></a>
            </div>
        </div>
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div><label className="block text-gray-500 text-sm mb-2">First Name</label><input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="John" /></div>
                    <div><label className="block text-gray-500 text-sm mb-2">Last Name</label><input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Doe" /></div>
                </div>
                <div><label className="block text-gray-500 text-sm mb-2">Email</label><input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="john@example.com" /></div>
                <div><label className="block text-gray-500 text-sm mb-2">Message</label><textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Tell me about your project..."></textarea></div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity">Send Message</button>
            </form>
        </div>
    </div>
    <div className="mt-20 text-center text-gray-600 text-sm"><p>© 2026 Pavan N Jadhav. Built with React & Tailwind.</p></div>
  </footer>
);

// --- PAGES ---
const HomePage = () => (
  // Force transparent background here so stars show through
  <div className="text-white min-h-screen relative selection:bg-blue-500 selection:text-white bg-transparent">
    <StarBackground />
    <Navbar />
    <Hero />
    <AboutMe /> 
    <InfiniteSkills /> {/* <--- SKILLS SECTION IS HERE! */}
    <DesignProcess /> 
    <JourneyMap /> 
    <FeaturedProject />
    <Testimonials />  
    <Contact />
  </div>
);

const TailorPage = () => {
  React.useEffect(() => window.scrollTo(0,0), []);
  return (
    <div className="min-h-screen text-white relative bg-black">
      <StarBackground />
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-40 relative z-10">
        <Link to="/" className="text-gray-400 hover:text-white mb-10 inline-flex items-center gap-2">← Back Home</Link>
        <h1 className="text-6xl md:text-8xl font-black mb-8">Tailor App</h1>
        <p className="text-2xl text-gray-400 leading-relaxed">Detailed Case Study content coming soon...</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tailor" element={<TailorPage />} />
      </Routes>
    </Router>
  );
}

export default App;