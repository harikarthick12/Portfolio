import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  // Duplicate skills for smooth marquee effect
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 sm:py-32 overflow-hidden border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
      <div className="mb-12 sm:mb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <span className="text-accent-indigo font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 sm:mb-4 block">Proficiencies</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">The Technical <span className="text-gradient">Arsenal</span></h2>
      </div>
      
      <div className="flex relative">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex gap-6 sm:gap-10 whitespace-nowrap"
        >
          {marqueeSkills.map((skill, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 sm:gap-5 px-6 sm:px-10 py-3.5 sm:py-6 glass-card border-white dark:border-slate-800 shadow-premium group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-accent-indigo group-hover:scale-150 transition-transform duration-300" />
              <span className="text-xl sm:text-2xl md:text-3xl font-display font-black text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
        {[
          { label: "Frontend", color: "from-accent-indigo to-indigo-400" },
          { label: "Backend", color: "from-accent-purple to-purple-400" },
          { label: "Design", color: "from-accent-pink to-pink-400" },
          { label: "Systems", color: "from-slate-700 to-slate-500" }
        ].map((cat) => (
          <div key={cat.label} className="text-center group">
            <div className={`h-1.5 w-full bg-gradient-to-r ${cat.color} mb-6 rounded-full opacity-10 group-hover:opacity-100 transition-all duration-700`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
