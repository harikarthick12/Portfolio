import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight, MapPin } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-700 bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-indigo/10 dark:bg-accent-indigo/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/10 dark:bg-accent-pink/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-pink font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-10 tracking-tighter text-slate-900 dark:text-slate-100">
              Let's Build <br />Something <span className="text-gradient">Real.</span>
            </h2>
            <p className="text-xl text-secondary mb-16 max-w-md leading-relaxed">
              Open to Full Stack Developer roles, internships, and collaborations. Reach out directly or connect below.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-2xl group-hover:bg-accent-indigo group-hover:text-white transition-all duration-500">
                  <Mail size={24} className="text-primary dark:text-slate-200 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Email</p>
                  <a href="mailto:harikarthicksrini@gmail.com" className="text-xl font-bold text-primary dark:text-slate-200 hover:text-accent-indigo dark:hover:text-accent-indigo transition-colors">
                    harikarthicksrini@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-2xl group-hover:bg-accent-purple group-hover:text-white transition-all duration-500">
                  <MapPin size={24} className="text-primary dark:text-slate-200 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Based In</p>
                  <p className="text-xl font-bold text-primary dark:text-slate-200">Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-10">
                {[
                  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/harikarthick12" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/harikarthick12" },
                  { icon: <Send size={20} />, label: "Email", href: "mailto:harikarthicksrini@gmail.com" }
                ].map((social) => (
                  <MagneticButton key={social.label}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: '#1E293B', color: '#FFF' }}
                      className="w-14 h-14 bg-white dark:bg-slate-800 shadow-premium dark:shadow-premium-dark rounded-full flex items-center justify-center transition-all border border-white dark:border-slate-700 text-primary dark:text-slate-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel p-10 md:p-14 relative z-10 dark:bg-slate-900/40">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm text-primary dark:text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm text-primary dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    type="text" name="subject" required
                    value={formData.subject} onChange={handleChange}
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm text-primary dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    name="message" rows="4" required
                    value={formData.message} onChange={handleChange}
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white dark:focus:bg-slate-800 transition-all shadow-sm resize-none text-primary dark:text-white"
                  />
                </div>
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-5 btn-primary disabled:opacity-60 flex justify-center w-full"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowUpRight size={20} />
                    </motion.span>
                  </button>
                </MagneticButton>
                {status === 'sent' && (
                  <p className="text-sm font-bold text-green-600 dark:text-green-400 text-center">Message sent — I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-bold text-red-600 dark:text-red-400 text-center">Something went wrong — try emailing me directly.</p>
                )}
              </form>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 glass-panel rounded-full blur-xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-40 py-12 border-t border-slate-100 dark:border-slate-800 text-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Hari Karthick
        </p>
      </footer>
    </section>
  );
}
