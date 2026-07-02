import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Zap, Palette, Code2 } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);


  return (
    <section id="about" ref={containerRef} className="py-32 bg-white/30 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-indigo font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Philosophy</span>
            <h2 className="text-5xl font-display font-extrabold mb-8">
              Where Engineering Meets <span className="text-gradient">Artistry</span>
            </h2>
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                Hi, I'm Hari Karthick, passionate about AI, Machine Learning, and Full Stack Development. I'm a final-year B.Tech student, and I build things I can actually ship — not just class projects that get graded and forgotten.
              </p>
              <p>
                I co-founded Atti, a student-run tech and creative studio, where I lead development across web, branding, and automation work. Outside of that, I'm usually deep in a personal build — right now it's SlotCut, a native Android app for salon booking in Tier 2/3 cities — while working through a structured data analytics track alongside my core full-stack work.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo/20 to-accent-pink/20 blur-3xl rounded-full opacity-50" />
              
              {/* Code Editor Window */}
              <motion.div 
                className="relative w-full max-w-md bg-[#0d1117] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 font-mono text-sm sm:text-base flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Editor Header */}
                <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-slate-400 font-sans">hari@dev-machine:~</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 text-slate-300 leading-relaxed overflow-x-auto text-xs sm:text-sm font-mono">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} transition={{ staggerChildren: 0.3 }}>
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mb-2">
                      <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-white">npm run build-career</span>
                    </motion.div>
                    
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mb-4 text-slate-400">
                      &gt; hari-portfolio@1.0.0 build-career<br/>
                      &gt; Compiling skills &amp; experience...
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="mb-1">
                      <span className="text-green-500">✔</span> Loaded <span className="text-accent-indigo">Full-Stack</span> Modules (React, Node, Flutter)
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="mb-1">
                      <span className="text-green-500">✔</span> Calibrated <span className="text-accent-purple">AI &amp; Data Science</span> Models (Python, SQL)
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="mb-1">
                      <span className="text-green-500">✔</span> Initialized <span className="text-blue-400">SlotCut</span> Native Android App
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="mb-4">
                      <span className="text-green-500">✔</span> Bootstrapped <span className="text-yellow-500">Atti</span> Tech &amp; Creative Studio
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-slate-100 font-bold">
                      Build successful in 3.14s
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-2 flex items-center">
                      <span className="text-green-400">➜</span> <span className="text-blue-400 ml-2">status:</span> <span className="text-white ml-2">READY_FOR_PLACEMENTS</span>
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-slate-400 ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Tooltips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-5 -right-5 glass-card p-4 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 bg-accent-indigo rounded-lg flex items-center justify-center text-white font-bold text-xs">FE</div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Frontend</p>
                <p className="text-xs font-bold">React & Flutter</p>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 glass-card p-4 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 bg-slate-900 dark:bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">BE</div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Backend</p>
                <p className="text-xs font-bold">Node & Socket.io</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
