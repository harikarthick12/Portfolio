import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { MagneticButton } from '../components/ui/MagneticButton';
import { InteractiveProjectTitle } from '../components/ui/InteractiveProjectTitle';

export default function ProjectsGrid() {
  // Show 3 selected projects on the home page
  const homeProjects = projects.filter(p => !p.featured).slice(0, 3);

  return (
    <section className="py-24 sm:py-32 relative bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-accent-purple font-bold uppercase tracking-widest text-xs mb-3 block">Archive</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              Other <span className="text-gradient">Builds</span>
            </h2>
          </div>
          <p className="max-w-md text-secondary text-base sm:text-lg">
            A selection of projects I've built to solve real problems and explore new technologies.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mb-14 sm:mb-16">
          {homeProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <BentoGridItem
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
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl pointer-events-auto"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-md border border-white/30 pointer-events-auto"
                          title="Source Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                }
                icon={<Code2 className="h-5 w-5 text-accent-indigo" />}
                footer={
                  <div className="flex items-center justify-between text-xs font-semibold">
                    {project.link && project.link !== "#" ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-accent-indigo hover:underline font-bold py-1"
                      >
                        Live Demo <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-slate-400 py-1">Demo on Request</span>
                    )}
                    {project.github && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-secondary hover:text-primary py-1"
                      >
                        GitHub <Github size={12} />
                      </a>
                    )}
                  </div>
                }
              />
            </motion.div>
          ))}
        </BentoGrid>

        {/* Redirect to /projects Page */}
        <div className="flex justify-center">
          <MagneticButton>
            <Link 
              to="/projects"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-bold flex items-center gap-3 hover:bg-slate-800 dark:hover:bg-white transition-all shadow-lg hover:shadow-black/20 group text-sm sm:text-base"
            >
              <span>View All Projects ({projects.length})</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
