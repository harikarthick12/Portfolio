import { motion } from 'framer-motion';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function WordPull({
  text,
  className,
  wrapperClassName,
  delay = 0.05,
  once = true,
}) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      className={cn("flex flex-wrap", wrapperClassName)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          className={cn(i !== words.length - 1 && "pr-[0.2em]", className)}
        >
          {word === "" ? "\u00A0" : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
