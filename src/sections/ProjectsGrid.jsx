import { motion } from 'framer-motion';
import { ExternalLink, GithubIcon, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';

export default function ProjectsGrid() {
  const secondaryProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-32 relative bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent-purple font-bold uppercase tracking-widest text-xs mb-4 block">Archive</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              Curated <span className="text-gradient">Collections</span>
            </h2>
          </div>
          <p className="max-w-sm text-secondary text-lg">
            A selection of projects exploring real-time data, high-concurrency systems, and premium UI concepts.
          </p>
        </div>

        <BentoGrid className="max-w-7xl">
          {secondaryProjects.map((project, i) => (
            <BentoGridItem
              key={project.id}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              title={project.title}
              description={project.description}
              header={
                <div className="relative w-full h-full min-h-[10rem] flex flex-1 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/bento:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center gap-4 opacity-0 group-hover/bento:opacity-100 transition-all duration-500">
                    <a href={project.link} className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                      <ExternalLink size={18} />
                    </a>
                    <a href={project.github} className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-md border border-white/30">
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>
              }
              icon={<Code2 className="h-4 w-4 text-accent-indigo" />}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
