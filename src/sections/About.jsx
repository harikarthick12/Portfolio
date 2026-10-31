import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Activity, 
  Package, 
  ShieldAlert, 
  Share2, 
  GraduationCap, 
  Target, 
  Code2, 
  ArrowRight, 
CheckCircle2, 
  Terminal,
  ExternalLink,
  Layers,
  Database,
  Cpu
} from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const projectsHighlight = [
    {
      title: "MediSure",
      category: "Healthcare Technology",
      description: "A healthcare application concept featuring prescription OCR, medicine expiry tracking, drug interaction checking, and multilingual support.",
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />,
      tags: ["Prescription OCR", "Expiry Tracking", "Drug Interactions", "Multilingual"]
    },
    {
      title: "Payanam Parcel",
      category: "Crowd-Sourced Platform",
      description: "A crowd-sourced parcel delivery platform concept with trip creation, parcel listings, user verification, tracking, chat, and wallet functionality.",
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6 text-accent-indigo" />,
      tags: ["Trip Creation", "Parcel Listings", "User Verification", "Real-Time Tracking", "Chat & Wallet"]
    },
    {
      title: "ScamShield Agent",
      category: "AI & Cybersecurity",
      description: "An AI-assisted scam investigation project designed to analyze suspicious information, organize evidence, and provide practical safety resources.",
      icon: <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
      tags: ["AI Investigation", "Evidence Analysis", "Safety Resources", "Threat Detection"]
    },
    {
      title: "File-Sharing Applications",
      category: "Full-Stack Architecture",
      description: "Web development projects exploring file uploads, sharing workflows, and full-stack application architecture.",
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple" />,
      tags: ["File Uploads", "Sharing Workflows", "Full-Stack Systems", "Cloud Storage"]
    }
  ];

  const techStack = [
    "Python", 
    "SQL", 
    "JavaScript", 
    "React", 
    "Node.js", 
    "Express", 
    "MongoDB", 
    "AI Application Development"
  ];

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="py-16 sm:py-24 lg:py-32 bg-white/30 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Main Introduction */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-28">
          
          <motion.div
            style={isDesktop ? { y: y2 } : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-6 sm:mb-8 text-slate-900 dark:text-white leading-tight">
              Where Engineering Meets <span className="text-gradient">Real-World Impact</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-secondary leading-relaxed">
              <p>
                Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Hari Karthick</strong> — an AI and Data Science student, software developer, and technology enthusiast from India. I am passionate about building practical digital solutions that combine software engineering, artificial intelligence, data analytics, and modern web technologies.
              </p>
              <p>
                My work focuses on developing applications that address real-world problems, with hands-on experience exploring frontend development, backend systems, database integration, and AI-powered features. I enjoy turning ideas into working products, experimenting with new technologies, and continuously improving my development skills.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-accent-indigo shrink-0" />
                <span>AI &amp; Data Science Student</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-accent-purple shrink-0" />
                <span>Full-Stack Software Developer</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Product Builder &amp; Problem Solver</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code / Terminal Visual Component */}
          <motion.div
            style={isDesktop ? { y: y1 } : undefined}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo/20 via-accent-purple/20 to-accent-pink/20 blur-2xl sm:blur-3xl rounded-full opacity-60 pointer-events-none" />
              
              {/* Terminal Window */}
              <div className="relative w-full bg-[#0d1117] border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl z-10 font-mono flex flex-col">
                {/* Editor Header */}
                <div className="bg-[#161b22] px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2 border-b border-slate-800">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2.5 sm:ml-3 text-[11px] sm:text-xs text-slate-400 font-sans flex items-center gap-1.5">
                    <Terminal size={12} /> hari@portfolio:~
                  </span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 sm:p-6 pb-12 sm:pb-16 text-slate-300 leading-relaxed overflow-x-auto text-xs sm:text-sm font-mono">
                  <div className="mb-2">
                    <span className="text-emerald-400 font-bold">➜</span> <span className="text-blue-400">~</span> <span className="text-white">npm run build-career</span>
                  </div>
                  
                  <div className="mb-3.5 sm:mb-4 text-slate-400 text-[11px] sm:text-xs">
                    &gt; hari-portfolio@2027 build-career<br/>
                    &gt; Compiling skills, projects &amp; academic focus...
                  </div>

                  <div className="space-y-1.5 mb-4 text-[11px] sm:text-xs md:text-sm">
                    <div className="break-words">
                      <span className="text-emerald-500 font-bold">✔</span> Loaded <span className="text-accent-indigo font-semibold">Web &amp; Backend</span> (React, Node, Express, Mongo)
                    </div>
                    <div className="break-words">
                      <span className="text-emerald-500 font-bold">✔</span> Calibrated <span className="text-accent-purple font-semibold">AI &amp; Data Science</span> (Python, SQL, Analytics)
                    </div>
                    <div className="break-words">
                      <span className="text-emerald-500 font-bold">✔</span> Integrated <span className="text-emerald-400 font-semibold">MediSure</span> &amp; <span className="text-amber-400 font-semibold">ScamShield Agent</span>
                    </div>
                    <div className="break-words">
                      <span className="text-emerald-500 font-bold">✔</span> Configured <span className="text-blue-400 font-semibold">Payanam Parcel</span> &amp; File-Sharing Systems
                    </div>
                    <div className="break-words">
                      <span className="text-emerald-500 font-bold">✔</span> B.Tech AI &amp; DS @ <span className="text-pink-400 font-semibold">Dhanalakshmi Srinivasan Univ</span> (2027)
                    </div>
                  </div>

                  <div className="text-slate-100 font-bold border-t border-slate-800 pt-3 flex items-center justify-between text-xs sm:text-sm">
                    <span>Build successful</span>
                    <span className="text-[11px] sm:text-xs text-slate-500">ready</span>
                  </div>
                  <div className="mt-2.5 flex items-center flex-wrap gap-1 text-xs sm:text-sm">
                    <span className="text-emerald-400 font-bold">➜</span> 
                    <span className="text-blue-400 ml-1">status:</span> 
                    <span className="text-white ml-1 font-semibold break-all">READY_FOR_OPPORTUNITIES</span>
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }} 
                      className="inline-block w-1.5 h-3.5 sm:w-2 sm:h-4 bg-emerald-400 ml-1" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Tooltips - visible on sm+ with safe offset outside terminal text */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-5 -right-3 glass-card p-3 items-center gap-2.5 z-20 shadow-xl"
            >
              <div className="w-8 h-8 bg-accent-indigo rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">
                AI
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Discipline</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">AI &amp; Data Science</p>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute -bottom-7 -left-3 sm:-left-6 glass-card p-3 items-center gap-2.5 z-20 shadow-xl"
            >
              <div className="w-8 h-8 bg-slate-900 dark:bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">
                DEV
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Engineering</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">Full-Stack Solutions</p>
              </div>
            </motion.div>

            {/* Mobile-Friendly Badges below terminal (prevents screen clipping and text occlusion) */}
            <div className="flex sm:hidden items-center justify-between gap-3 mt-4 w-full">
              <div className="glass-card p-2.5 flex-1 flex items-center gap-2 shadow-sm border border-slate-200/80 dark:border-slate-800/80">
                <div className="w-7 h-7 bg-accent-indigo rounded-lg flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                  AI
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Discipline</p>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">AI &amp; Data Science</p>
                </div>
              </div>
              <div className="glass-card p-2.5 flex-1 flex items-center gap-2 shadow-sm border border-slate-200/80 dark:border-slate-800/80">
                <div className="w-7 h-7 bg-slate-900 dark:bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                  DEV
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Engineering</p>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">Full-Stack Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Projects and Technical Work Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <span className="text-accent-indigo font-bold tracking-[0.2em] uppercase text-xs mb-2 sm:mb-3 block">
              Core Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              Projects and <span className="text-gradient">Technical Work</span>
            </h3>
            <p className="text-base sm:text-lg text-secondary max-w-3xl leading-relaxed">
              I have worked on projects across software development, healthcare technology, AI, and digital platforms. Here are key highlights from my portfolio:
            </p>
          </motion.div>

          {/* 4 Projects Grid */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
            {projectsHighlight.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-5 sm:p-7 md:p-8 flex flex-col justify-between group hover:border-accent-indigo/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {proj.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-accent-indigo transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-secondary leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-[11px] sm:text-xs font-semibold text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Interests & Stack Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-5 sm:p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-5 sm:mb-6">
              <div>
                <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  Technical Interests &amp; Core Stack
                </h4>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  My technical interests include Python, SQL, JavaScript, React, Node.js, Express, MongoDB, and AI application development.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:border-accent-indigo hover:text-accent-indigo transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education and Career Goals & Connect Grid */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Education and Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-5 sm:p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="p-2.5 sm:p-3 bg-accent-pink/10 rounded-xl text-accent-pink shrink-0">
                  <GraduationCap size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-accent-pink font-bold uppercase tracking-widest text-[10px] sm:text-xs block">
                    Academics &amp; Aspirations
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                    Education and Career Goals
                  </h3>
                </div>
              </div>

              <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  B.Tech in Artificial Intelligence and Data Science
                </p>
                <p className="text-xs sm:text-sm font-semibold text-accent-indigo mt-0.5">
                  Dhanalakshmi Srinivasan University
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Expected Graduation: 2027
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  I am pursuing my B.Tech in Artificial Intelligence and Data Science at Dhanalakshmi Srinivasan University, with an expected graduation year of 2027.
                </p>
                <p>
                  I am actively interested in opportunities that allow me to apply my technical skills, collaborate with forward-thinking development teams, build useful software products, and grow professionally in software development, AI, and data-driven technologies.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              <Target size={16} className="text-accent-indigo shrink-0" />
              <span>Seeking internship &amp; full-stack software development opportunities</span>
            </div>
          </motion.div>

          {/* Connect with Hari Karthick */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 glass-panel p-5 sm:p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-accent-indigo font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3 block">
                Network &amp; Collaborate
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Connect with <span className="text-gradient">Me</span>
              </h3>

              <p className="text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Explore my portfolio to discover my projects, technical interests, and development work. For professional opportunities, collaborations, or project discussions, feel free to connect with me through my verified professional profiles.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 justify-center"
                >
                  Explore Projects <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 justify-center"
                >
                  Contact Me
                </button>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                <a 
                  href="https://linkedin.com/in/harikarthick12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-indigo transition-colors flex items-center gap-1"
                >
                  Verified LinkedIn <ExternalLink size={12} />
                </a>
                <span>•</span>
                <a 
                  href="https://github.com/harikarthick12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-indigo transition-colors flex items-center gap-1"
                >
                  Verified GitHub <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
