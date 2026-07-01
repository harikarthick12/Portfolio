import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-10 left-6 md:left-10 z-[100]">
      <button
        onClick={toggleTheme}
        className="w-16 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-500 shadow-lg border border-slate-300 dark:border-slate-600 outline-none"
        aria-label="Toggle theme"
      >
        <motion.div
          animate={{ x: isDark ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="w-6 h-6 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md"
        >
          {isDark ? <Moon size={14} className="text-slate-300" /> : <Sun size={14} className="text-slate-600" />}
        </motion.div>
      </button>
    </div>
  );
}
