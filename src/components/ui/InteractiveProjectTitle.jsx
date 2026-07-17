import { motion } from 'framer-motion';

export const InteractiveProjectTitle = ({ title, fontSize = 72 }) => {
  return (
    <div className="relative flex items-center justify-center w-full group cursor-default">
      <motion.span
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ 
          type: "spring", 
          stiffness: 250, 
          damping: 20,
          duration: 0.6 
        }}
        className="font-display font-extrabold tracking-tight text-slate-700 dark:text-slate-300 drop-shadow-sm text-center transform transition-all duration-300 group-hover:text-accent-indigo group-hover:scale-105"
        style={{ 
          fontSize: `${fontSize * 0.75}px`, 
          lineHeight: 1.2,
          padding: '0.5em',
        }}
      >
        {title}
      </motion.span>
    </div>
  );
};
