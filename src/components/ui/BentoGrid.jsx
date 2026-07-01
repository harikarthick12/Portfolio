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
        "grid auto-rows-auto grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
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
      whileHover={{ y: -5 }}
      className={cnLocal(
        "rounded-3xl group/bento transition duration-200 shadow-premium dark:shadow-premium-dark p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex flex-col gap-4 h-full",
        className
      )}
    >
      {header}
      <div className="flex flex-col flex-1 px-2 pb-2">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-display font-bold text-neutral-800 dark:text-neutral-200 text-lg">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-4">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
