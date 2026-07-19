import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = [
    {
      id: 1,
      title: "HackerRank Python Basics",
      issuer: "HackerRank",
      date: "Placeholder Date",
      link: "#",
      image: "/python-cert.png" // Replace with your actual image name in the public folder
    },
    {
      id: 2,
      title: "HackerRank SQL Intermediate",
      issuer: "HackerRank",
      date: "Placeholder Date",
      link: "#",
      image: "/sql-cert.png" // Replace with your actual image name in the public folder
    },
    {
      id: 3,
      title: "HackerRank Problem Solving Intermediate",
      issuer: "HackerRank",
      date: "Placeholder Date",
      link: "#",
      image: "/problem-solving-cert.png" // Replace with your actual image name in the public folder
    }
  ];

  return (
    <section id="certificates" className="py-32 relative bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent-pink font-bold uppercase tracking-widest text-xs mb-4 block">Achievements</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              All <span className="text-gradient">Certificates</span>
            </h2>
          </div>
          <p className="max-w-sm text-secondary text-lg">
            A collection of my certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full border border-slate-200 dark:border-slate-800 hover:border-accent-pink/50 dark:hover:border-accent-pink/50 transition-colors group"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-6 relative">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <Award size={40} className="mb-2 opacity-50" />
                    <span className="text-sm font-medium">No Image</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{cert.title}</h3>
              <p className="text-secondary font-medium mb-1">{cert.issuer}</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-6 flex-grow">{cert.date}</p>
              
              <button 
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center text-sm font-bold text-accent-pink hover:text-accent-purple transition-colors w-fit"
              >
                View Certificate <ExternalLink size={14} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-primary">{selectedCert.title}</h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-primary"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 overflow-auto flex-grow flex items-center justify-center bg-slate-100 dark:bg-slate-950">
                {selectedCert.image ? (
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-full object-contain shadow-md"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400 p-12">
                    <Award size={64} className="mb-4 opacity-50" />
                    <span className="text-lg font-medium">No Image Available</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
