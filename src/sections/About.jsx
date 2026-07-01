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

  const stats = [
    { label: "Systems Built", value: "24+", icon: <Layers className="text-accent-indigo" /> },
    { label: "Design Hours", value: "8k+", icon: <Palette className="text-accent-purple" /> },
    { label: "Clean Code", value: "100%", icon: <Code2 className="text-accent-pink" /> },
    { label: "Success Rate", value: "99%", icon: <Zap className="text-amber-400" /> },
  ];

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
                I don't just write code; I architect experiences. My process begins at the intersection of mathematical precision and aesthetic intuition.
              </p>
              <p>
                As a senior UI/UX strategist, I believe that high-performance engineering is only half the battle. The true magic happens when that power is delivered through a frictionless, polished interface.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 group"
                >
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 w-fit rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-display font-extrabold mb-1">{stat.value}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-accent-indigo/10 to-accent-pink/10 blur-3xl rounded-full" />
            <div className="relative glass-panel aspect-square flex items-center justify-center overflow-hidden group">
               {/* Abstract Glass Sculpture Illustration using CSS/SVG */}
               <div className="relative w-full h-full flex items-center justify-center p-20">
                  <motion.div 
                    style={{ rotate: rotate1 }}
                    className="absolute w-64 h-64 border border-slate-200/50 dark:border-slate-700/50 rounded-[3rem] bg-white/20 dark:bg-slate-800/20"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-56 h-56 border border-slate-200/50 dark:border-slate-700/50 rounded-[3rem] -rotate-12 bg-white/20 dark:bg-slate-800/20"
                  />
                  <motion.div 
                    style={{ scale: scale1 }}
                    className="relative w-48 h-48 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-[3rem] shadow-2xl dark:shadow-premium-dark flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                  >
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-indigo to-accent-purple rounded-full" />
                  </motion.div>
               </div>
            </div>
            
            {/* Floating Tooltips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-5 -right-5 glass-card p-4 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 bg-accent-indigo rounded-lg flex items-center justify-center text-white font-bold">F</div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Prototyping</p>
                <p className="text-xs font-bold">Figma Master</p>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 glass-card p-4 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 bg-slate-900 dark:bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold">R</div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Development</p>
                <p className="text-xs font-bold">React Architect</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
