import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Co-Founder & Tech Lead",
    company: "Atti",
    date: "2025 - Present",
    description: "Leading development across web, branding, and automation work for a student-run tech and creative studio.",
    icon: <Briefcase size={20} className="text-accent-indigo" />
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "VDart",
    date: "2025",
    description: "Worked on frontend architectures and collaborated with the engineering team to deliver scalable web solutions. (Update with more bullet points later!)",
    icon: <Briefcase size={20} className="text-accent-purple" />
  },
  {
    id: 3,
    role: "B.Tech in AI & Data Science",
    company: "Dhanalakshmi Srinivasan Universiy", // TODO: fill this in
    date: "2023 - 2027(Currently in 4th Year)",
    description: "Final-year student focusing on data analytics, machine learning, and full-stack development.",
    icon: <GraduationCap size={20} className="text-accent-pink" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-white/30 dark:bg-slate-900/30 transition-colors duration-700">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent-indigo font-bold uppercase tracking-widest text-xs mb-4 block">Timeline</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Mobile) */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />
              {/* Timeline Dot (Mobile) */}
              <div className="md:hidden absolute left-0 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center z-10 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
              </div>

              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-[20%] top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 items-center justify-center z-10 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                </div>
                
                <div className="md:col-span-1 md:text-right pt-1 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-400 dark:text-slate-500">{exp.date}</span>
                </div>
                
                <div className="md:col-span-4 relative">
                  <div className="glass-card p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                        <p className="text-sm font-semibold text-accent-indigo">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-secondary leading-relaxed mt-4">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
