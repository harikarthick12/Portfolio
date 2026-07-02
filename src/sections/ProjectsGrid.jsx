import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';
import { projects } from '../data/projects';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { MagneticButton } from '../components/ui/MagneticButton';
import { InteractiveProjectTitle } from '../components/ui/InteractiveProjectTitle';

export default function ProjectsGrid() {
  const [showAll, setShowAll] = useState(false);
  
  // If showAll is true, show ALL projects (including featured ones from home screen).
  // Otherwise, only show up to 3 non-featured projects.
  const visibleProjects = showAll 
    ? projects 
    : projects.filter(p => !p.featured).slice(0, 3);

  return (
    <section className="py-32 relative bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent-purple font-bold uppercase tracking-widest text-xs mb-4 block">Archive</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              Other <span className="text-gradient">Builds</span>
            </h2>
          </div>
          <p className="max-w-sm text-secondary text-lg">
            A selection of other projects I've built to solve real problems and explore new technologies.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mb-16">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <BentoGridItem
              key={project.id}
              title={project.title}
              description={project.description}
              header={
                <div className="relative w-full h-full min-h-[12rem] flex flex-1 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/bento:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
                      
                      <div className="z-10 flex items-center justify-center w-full h-full p-4">
                        <InteractiveProjectTitle title={project.title} fontSize={56} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center gap-4 opacity-0 group-hover/bento:opacity-100 transition-all duration-500 pointer-events-none">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl pointer-events-auto">
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-md border border-white/30 pointer-events-auto">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              }
              icon={<Code2 className="h-5 w-5 text-accent-indigo" />}
            />
              </motion.div>
            ))}
          </AnimatePresence>
        </BentoGrid>

        <div className="flex justify-center">
          <MagneticButton>
            <div 
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary dark:text-white rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              {showAll ? 'Show Less Projects' : 'View All Projects'}
              {showAll ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
