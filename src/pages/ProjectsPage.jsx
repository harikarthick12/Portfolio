import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Code2, 
  Search, 
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { InteractiveProjectTitle } from '../components/ui/InteractiveProjectTitle';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Full Stack', 'AI & ML', 'Mobile / App', 'Web Apps'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI & ML') {
      return project.tech.some(t => 
        t.toLowerCase().includes('ai') || 
        t.toLowerCase().includes('model') || 
        t.toLowerCase().includes('ocr') ||
        t.toLowerCase().includes('tensor') ||
        t.toLowerCase().includes('face')
      );
    }
    if (selectedCategory === 'Mobile / App') {
      return project.tech.some(t => 
        t.toLowerCase().includes('android') || 
        t.toLowerCase().includes('flutter') || 
        t.toLowerCase().includes('kotlin')
      );
    }
    if (selectedCategory === 'Full Stack') {
      return (
        project.tech.some(t => t.toLowerCase().includes('node') || t.toLowerCase().includes('express') || t.toLowerCase().includes('mongo') || t.toLowerCase().includes('socket')) ||
        (project.role && project.role.toLowerCase().includes('full-stack'))
      );
    }
    if (selectedCategory === 'Web Apps') {
      return project.tech.some(t => 
        t.toLowerCase().includes('react') || 
        t.toLowerCase().includes('next') || 
        t.toLowerCase().includes('web')
      );
    }

    return true;
  });

  return (
    <div className="min-h-screen pt-28 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[15%] left-[5%] w-[45%] h-[45%] bg-accent-indigo/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[45%] h-[45%] bg-accent-purple/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Navigation & Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-accent-indigo transition-colors group mb-6 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/60 shadow-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-bold tracking-widest uppercase mb-4">
                <Sparkles size={14} />
                All Works &amp; Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                All Projects &amp; <span className="text-gradient">Builds</span>
              </h1>
              <p className="text-secondary text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
                A complete catalog of applications, platforms, tools, and experiments I've built end-to-end — spanning full-stack development, AI solutions, and system architectures.
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-3xl font-display font-black text-accent-indigo">
                {projects.length}
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Projects
              </p>
            </div>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                    : 'bg-white/60 dark:bg-slate-800/60 text-secondary hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-700/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by name, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center glass-card p-12">
            <Code2 size={48} className="mx-auto text-slate-400 mb-4 opacity-60" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-secondary text-sm max-w-md mx-auto mb-6">
              No builds matched your filter or search criteria. Try selecting another category or clear the search.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn-secondary text-xs py-2 px-5"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card flex flex-col justify-between overflow-hidden border border-slate-200/80 dark:border-slate-800/80 group hover:border-accent-indigo/50 transition-all duration-300"
                >
                  <div>
                    {/* Project Header / Image or Interactive Typography */}
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-200 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800/80">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800/90 dark:to-slate-900/90 relative p-4">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:14px_14px]" />
                          <div className="z-10 flex items-center justify-center w-full h-full text-center">
                            <InteractiveProjectTitle title={project.title} fontSize={40} />
                          </div>
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 z-20 flex gap-2">
                        {project.featured && (
                          <span className="px-2.5 py-1 bg-accent-indigo text-white text-[10px] font-black uppercase tracking-wider rounded-md shadow-md">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Floating Link Overlays */}
                      <div className="absolute inset-0 z-20 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.link && project.link !== "#" && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.github && project.github !== "#" && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 bg-slate-900/80 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform border border-white/20 backdrop-blur-md"
                            title="Source Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-accent-indigo transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {project.role && (
                        <p className="text-xs font-semibold text-accent-indigo mb-3">
                          {project.role}
                        </p>
                      )}

                      <p className="text-secondary text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Tech Tags and Action Links */}
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-secondary rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      {project.link && project.link !== "#" ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-indigo hover:underline"
                        >
                          Live Demo <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">Demo on Request</span>
                      )}

                      {project.github && project.github !== "#" ? (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-secondary hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <Github size={14} /> Repository
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Back to Home CTA Bottom */}
        <div className="mt-20 text-center">
          <Link
            to="/"
            className="btn-secondary inline-flex items-center gap-2 text-sm py-3 px-8"
          >
            <ArrowLeft size={16} /> Return to Main Portfolio
          </Link>
        </div>

      </div>
    </div>
  );
}
