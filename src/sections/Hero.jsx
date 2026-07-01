import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Particles } from '../components/ui/Particles';
import { WordPull } from '../components/ui/WordPull';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Dynamic Particle Background */}
      <Particles className="absolute inset-0 z-0" quantity={150} ease={80} />

      {/* Abstract Background Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-indigo/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="px-5 py-2 text-xs font-bold tracking-[0.2em] uppercase border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full text-secondary">
              Architecting Digital Excellence
            </span>
          </motion.div>
          
          <div className="text-6xl md:text-[7.5rem] font-display font-extrabold leading-[0.9] tracking-tighter mb-10 flex flex-col items-center">
            <WordPull text="Engineering" />
            <WordPull text="Pure Motion." className="text-gradient" delay={0.1} />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed mb-14"
          >
            A senior developer and UI/UX strategist dedicated to building high-performance applications with a polished, premium aesthetic.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <MagneticButton 
              className="btn-primary group"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects 
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </MagneticButton>
            <MagneticButton 
              className="btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
