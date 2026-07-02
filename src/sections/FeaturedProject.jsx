import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { InteractiveProjectTitle } from '../components/ui/InteractiveProjectTitle';

export default function FeaturedProject() {
  const project = projects.find(p => p.featured);

  if (!project) return null;

  return (
    <section id="work" className="py-32 relative transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="flex items-center justify-center md:justify-start gap-2 text-accent-indigo font-bold uppercase tracking-widest text-xs mb-4">
            <Sparkles size={14} /> Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter">
            Featured <span className="text-gradient">Build</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-indigo/10 to-accent-purple/10 rounded-[3rem] blur-2xl opacity-50" />
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] glass-panel p-4">
              <div className="w-full h-full overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {project.image ? (
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                    <div className="z-10 flex items-center justify-center w-full h-full p-8">
                      <InteractiveProjectTitle title={project.title} fontSize={80} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col gap-10 lg:pl-10"
          >
            <div>
              <h3 className="text-4xl font-display font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-xl text-secondary leading-relaxed mb-6">
                {project.description}
              </p>
              {project.role && (
                <div className="mb-8 p-4 bg-accent-indigo/5 border border-accent-indigo/20 rounded-2xl">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-accent-indigo">Role:</span> {project.role}
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-secondary shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8">
               {project.link !== "#" && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary dark:text-white font-bold hover:text-accent-indigo dark:hover:text-accent-indigo transition-colors"
                >
                  View Live <ExternalLink size={18} />
                </motion.a>
               )}
              {project.github !== "#" && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary font-bold hover:text-primary dark:hover:text-white transition-colors"
                >
                  View Code <Github size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
