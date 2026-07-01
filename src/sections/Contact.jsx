import { motion } from 'framer-motion';
import { Mail, GithubIcon, Linkedin, Send, ArrowUpRight, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-indigo/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-pink font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Connectivity</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-10 tracking-tighter">
              Let’s Craft <br />Your <span className="text-gradient">Vision.</span>
            </h2>
            <p className="text-xl text-secondary mb-16 max-w-md leading-relaxed">
              Seeking a senior perspective on your next high-performance digital venture?
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-white shadow-premium rounded-2xl group-hover:bg-accent-indigo group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Inquiry</p>
                  <p className="text-xl font-bold text-primary">hello@harikarthick.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-white shadow-premium rounded-2xl group-hover:bg-accent-purple group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Based In</p>
                  <p className="text-xl font-bold text-primary">Global / Remote</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-10">
                {[
                  { icon: <GithubIcon size={20} />, label: "GitHub", href: "#" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
                  { icon: <Send size={20} />, label: "Telegram", href: "#" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -5, backgroundColor: '#1E293B', color: '#FFF' }}
                    className="w-14 h-14 bg-white shadow-premium rounded-full flex items-center justify-center transition-all border border-white"
                  >
                    {social.icon}
                  </motion.a>
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
            <div className="glass-panel p-10 md:p-14 relative z-10">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white transition-all shadow-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white transition-all shadow-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Project Concept</label>
                  <input type="text" className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white transition-all shadow-sm" placeholder="Premium E-commerce" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message Detail</label>
                  <textarea rows="4" className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-indigo focus:bg-white transition-all shadow-sm resize-none" placeholder="Tell me about your architectural vision..."></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl hover:shadow-primary/20 group">
                  Initiate Discussion 
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowUpRight size={20} />
                  </motion.span>
                </button>
              </form>
            </div>
            {/* Artistic glass floating element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 glass-panel rounded-full blur-xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-40 py-12 border-t border-slate-100 text-center bg-white/50 backdrop-blur-sm">
        <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Hari Karthick · Engineered with Precision
        </p>
      </footer>
    </section>
  );
}
