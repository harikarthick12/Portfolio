import { cn } from "./WordPull"; // reuse the cn utility we put in WordPull, or better yet, I should make a utils file. Wait, I'll just redefine it here to be safe and independent.
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cnLocal(...inputs) {
  return twMerge(clsx(inputs));
}

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cnLocal(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cnLocal(
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-200 shadow-premium dark:shadow-premium-dark p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-display font-bold text-neutral-800 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-neutral-400 text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
