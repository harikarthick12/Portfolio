import { motion } from 'framer-motion';
import { ExternalLink, GithubIcon, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

export default function FeaturedProject() {
  const project = projects.find(p => p.featured);

  if (!project) return null;

  return (
    <section id="work" className="py-32 relative">
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
            Digital <span className="text-gradient">Case Study</span>
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
              <div className="w-full h-full overflow-hidden rounded-[2rem] bg-slate-100">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
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
              <h3 className="text-4xl font-display font-extrabold mb-6 tracking-tight">{project.title}</h3>
              <p className="text-xl text-secondary leading-relaxed mb-10">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-white/60 border border-white/80 rounded-full text-xs font-bold text-secondary shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <motion.a
                href={project.link}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-primary font-bold hover:text-accent-indigo transition-colors"
              >
                Launch Experience <ExternalLink size={18} />
              </motion.a>
              <motion.a
                href={project.github}
                className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
              >
                Read Source <GithubIcon size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
