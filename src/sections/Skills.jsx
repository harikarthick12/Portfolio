import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  // Duplicate skills for smooth marquee effect
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-32 overflow-hidden border-y border-slate-100 bg-white/50">
      <div className="mb-20 px-6 max-w-7xl mx-auto text-center">
        <span className="text-accent-indigo font-bold uppercase tracking-widest text-[10px] mb-4 block">Proficiencies</span>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">The Technical <span className="text-gradient">Arsenal</span></h2>
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
          className="flex gap-10 whitespace-nowrap"
        >
          {marqueeSkills.map((skill, i) => (
            <div 
              key={i}
              className="flex items-center gap-5 px-10 py-6 glass-card border-white shadow-premium group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-accent-indigo group-hover:scale-150 transition-transform duration-300" />
              <span className="text-3xl font-display font-black text-slate-300 group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-24 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
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
