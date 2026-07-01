import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2500;
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Metrics() {
  const stats = [
    { label: "Elite Projects", value: "32", suffix: "+" },
    { label: "Lines of Precision", value: "250", suffix: "k" },
    { label: "Core Technologies", value: "18", suffix: "+" },
    { label: "System Uptime", value: "99.9", suffix: "%" }
  ];

  return (
    <section className="py-40 relative">
       {/* Background decorative mesh */}
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 text-slate-900">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="h-1 w-8 bg-accent-indigo mx-auto mb-4 rounded-full" />
              <p className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
