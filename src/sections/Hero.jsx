import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Particles } from '../components/ui/Particles';
import { WordPull } from '../components/ui/WordPull';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6">
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
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          <div className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-display font-extrabold leading-[1.08] sm:leading-[0.95] tracking-tighter mb-6 sm:mb-10 flex flex-col items-center max-w-full">
            <WordPull text="Hari Karthick" wrapperClassName="justify-center" />
            <WordPull text="Full-Stack Developer" className="text-gradient" wrapperClassName="justify-center" delay={0.1} />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-secondary leading-relaxed mb-10 sm:mb-14 px-2"
          >
            I build real products — apps, platforms, and tools — end-to-end. Co-founder & Tech Lead at One Vision, currently shipping SlotCut for real users.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-6 w-full sm:w-auto max-w-md sm:max-w-none"
          >
            <MagneticButton 
              className="btn-primary group w-full sm:w-auto justify-center py-3.5 sm:py-4"
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
              className="btn-secondary dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20 w-full sm:w-auto justify-center py-3.5 sm:py-4"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </MagneticButton>
            <MagneticButton 
              className="btn-secondary dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20 w-full sm:w-auto justify-center py-3.5 sm:py-4"
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
