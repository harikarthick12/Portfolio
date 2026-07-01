import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);

  const isDark = theme === 'dark';

  // Animation variants for the bulb
  const wireVariants = {
    initial: { height: '80px' },
    pulling: { height: '120px' },
    released: { 
      height: '80px',
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  const handleDragEnd = (event, info) => {
    setIsPulling(false);
    // If pulled down far enough, toggle the theme
    if (info.offset.y > 30) {
      toggleTheme();
    }
  };

  return (
    <div className="fixed top-0 right-10 z-[100] flex flex-col items-center">
      <motion.div
        className="w-1 bg-gray-800 dark:bg-gray-400 origin-top"
        variants={wireVariants}
        initial="initial"
        animate={isPulling ? "pulling" : "released"}
      />
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={() => setIsPulling(true)}
        onDragEnd={handleDragEnd}
        className="cursor-grab active:cursor-grabbing p-2"
        whileHover={{ scale: 1.1 }}
      >
        <div className={`relative w-10 h-14 rounded-t-2xl rounded-b-full transition-colors duration-500 shadow-xl flex flex-col items-center justify-end pb-3
          ${isDark 
            ? 'bg-yellow-200 shadow-[0_10px_40px_-10px_rgba(253,224,71,0.8)]' 
            : 'bg-gray-300 shadow-gray-400/50'
          }`}
        >
          {/* Base of the bulb (metal part at the top) */}
          <div className="absolute -top-3 w-6 h-4 bg-gray-700 rounded-t-sm border-b border-gray-600 flex flex-col items-center">
             <div className="w-4 h-1 bg-gray-800 mt-0 rounded-t-sm" />
             <div className="w-full h-1 bg-gray-600 mt-1" />
          </div>

          {/* Bulb filaments (pointing up from the bottom) */}
          <div className="w-3 h-4 border-2 border-b-0 border-orange-400/80 rounded-t-lg relative z-10" />
          
          {/* Glow effect in dark mode */}
          {isDark && (
            <div className="absolute inset-0 rounded-t-2xl rounded-b-full bg-yellow-200 blur-md opacity-60 pointer-events-none" />
          )}
        </div>
      </motion.div>
    </div>
  );
}
