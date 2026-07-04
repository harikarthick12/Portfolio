import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-700 bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-indigo/10 dark:bg-accent-indigo/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/10 dark:bg-accent-pink/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <span className="text-accent-pink font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-10 tracking-tighter text-slate-900 dark:text-slate-100">
            Let's Build <br className="md:hidden" />Something <span className="text-gradient">Real.</span>
          </h2>
          <p className="text-xl text-secondary mb-16 max-w-2xl leading-relaxed">
            Open to Full Stack Developer roles, internships, and collaborations. Reach out directly or connect below.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full mb-16">
            <a href="mailto:harikarthicksrini@gmail.com" className="flex items-center gap-6 group glass-panel p-6 w-full max-w-sm hover:-translate-y-1 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-xl group-hover:bg-accent-indigo group-hover:text-white transition-all duration-500">
                <Mail size={24} className="text-primary dark:text-slate-200 group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Email</p>
                <p className="text-base font-bold text-primary dark:text-slate-200 group-hover:text-accent-indigo transition-colors break-all">
                  harikarthicksrini@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-6 group glass-panel p-6 w-full max-w-sm hover:-translate-y-1 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-xl group-hover:bg-accent-purple group-hover:text-white transition-all duration-500">
                <MapPin size={24} className="text-primary dark:text-slate-200 group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Based In</p>
                <p className="text-base font-bold text-primary dark:text-slate-200">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center">
            {[
              { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/harikarthick12" },
              { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://linkedin.com/in/harikarthick12" },
              { icon: <Mail size={24} />, label: "Email", href: "mailto:harikarthicksrini@gmail.com" }
            ].map((social) => (
              <MagneticButton key={social.label}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: '#1E293B', color: '#FFF' }}
                  className="w-16 h-16 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-full flex items-center justify-center transition-all border border-slate-100 dark:border-slate-700 text-primary dark:text-slate-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </motion.div>
      </div>
      
      <footer className="mt-32 py-12 border-t border-slate-100 dark:border-slate-800 text-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-10">
        <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Hari Karthick
        </p>
      </footer>
    </section>
  );
}
