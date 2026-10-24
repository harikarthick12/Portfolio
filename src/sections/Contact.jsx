import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden transition-colors duration-700 bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-indigo/10 dark:bg-accent-indigo/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/10 dark:bg-accent-pink/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <span className="text-accent-pink font-bold tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6 sm:mb-10 tracking-tighter text-slate-900 dark:text-slate-100">
            Let's Build <br className="md:hidden" />Something <span className="text-gradient">Real.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-10 sm:mb-16 max-w-2xl leading-relaxed">
            Open to Full Stack Developer roles, internships, and collaborations. Reach out directly or connect below.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 justify-center items-center w-full mb-10 sm:mb-16">
            <a href="mailto:harikarthicksrini@gmail.com" className="flex items-center gap-4 sm:gap-6 group glass-panel p-4 sm:p-6 w-full max-w-sm hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 sm:p-4 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-xl group-hover:bg-accent-indigo group-hover:text-white transition-all duration-500 shrink-0">
                <Mail size={22} className="text-primary dark:text-slate-200 group-hover:text-white sm:w-6 sm:h-6" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Email</p>
                <p className="text-sm sm:text-base font-bold text-primary dark:text-slate-200 group-hover:text-accent-indigo transition-colors break-all">
                  harikarthicksrini@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 sm:gap-6 group glass-panel p-4 sm:p-6 w-full max-w-sm hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 sm:p-4 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-xl group-hover:bg-accent-purple group-hover:text-white transition-all duration-500 shrink-0">
                <MapPin size={22} className="text-primary dark:text-slate-200 group-hover:text-white sm:w-6 sm:h-6" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Based In</p>
                <p className="text-sm sm:text-base font-bold text-primary dark:text-slate-200">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 sm:gap-6 justify-center">
            {[
              { icon: <Github size={22} />, label: "GitHub", href: "https://github.com/harikarthick12" },
              { icon: <Linkedin size={22} />, label: "LinkedIn", href: "https://linkedin.com/in/harikarthick12" },
              { icon: <Mail size={22} />, label: "Email", href: "mailto:harikarthicksrini@gmail.com" }
            ].map((social) => (
              <MagneticButton key={social.label}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: '#1E293B', color: '#FFF' }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-full flex items-center justify-center transition-all border border-slate-100 dark:border-slate-700 text-primary dark:text-slate-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </motion.div>
      </div>
      
      <footer className="mt-20 sm:mt-32 py-8 sm:py-12 border-t border-slate-100 dark:border-slate-800 text-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-10">
        <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Hari Karthick
        </p>
      </footer>
    </section>
  );
}
