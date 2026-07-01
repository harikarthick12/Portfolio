import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function ProjectsGrid() {
  // Only take exactly 3 secondary projects for the grid
  const secondaryProjects = projects.filter(p => !p.featured).slice(0, 3);

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
          {secondaryProjects.map((project) => (
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
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <Code2 size={48} opacity={0.5} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center gap-4 opacity-0 group-hover/bento:opacity-100 transition-all duration-500">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-md border border-white/30">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              }
              icon={<Code2 className="h-5 w-5 text-accent-indigo" />}
            />
          ))}
        </BentoGrid>

        <div className="flex justify-center">
          <MagneticButton>
            <a 
              href="https://github.com/harikarthick12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary dark:text-white rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              View All Projects on GitHub
              <ArrowRight size={18} />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
