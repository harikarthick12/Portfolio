import { motion } from 'framer-motion';
import { Layers, Zap, Palette, BarChart3, ArrowUpRight } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';

export default function WhatIOffer() {
  const offers = [
    {
      title: "System Architecture",
      desc: "Architecting high-concurrency, scalable systems with a focus on modularity and long-term sustainability.",
      icon: <Layers className="text-accent-indigo" size={32} />
    },
    {
      title: "Fluid Interfaces",
      desc: "Crafting motion-heavy, tactile user interfaces that feel alive and respond intuitively to every interaction.",
      icon: <Palette className="text-accent-purple" size={32} />
    },
    {
      title: "Real-time Engines",
      desc: "Engineering low-latency synchronization protocols for collaborative tools and real-time data streams.",
      icon: <Zap className="text-accent-pink" size={32} />
    },
    {
      title: "UX Strategy",
      desc: "Defining the psychological and visual journey of the user to maximize engagement and conversion.",
      icon: <BarChart3 className="text-slate-900 dark:text-slate-300" size={32} />
    }
  ];

  return (
    <section className="py-32 relative bg-white/20 dark:bg-slate-900/20 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-accent-indigo font-bold uppercase tracking-widest text-[10px] mb-4 block">Specializations</span>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">
              Delivering <span className="text-gradient">Functional</span> Perfection.
            </h2>
          </div>
          <p className="text-secondary max-w-sm text-lg leading-relaxed mb-2">
            Translating complex business requirements into elegant, high-performance digital products.
          </p>
        </div>

        <BentoGrid className="max-w-7xl md:grid-cols-2">
          {offers.map((offer, i) => (
            <BentoGridItem
              key={i}
              className={i === 1 || i === 2 ? "md:col-span-1" : ""}
              title={offer.title}
              description={offer.desc}
              header={
                <div className="flex items-center justify-center min-h-[6rem] rounded-xl bg-slate-100/50 dark:bg-slate-800/50">
                  {offer.icon}
                </div>
              }
              icon={<ArrowUpRight className="h-4 w-4 text-neutral-500" />}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
