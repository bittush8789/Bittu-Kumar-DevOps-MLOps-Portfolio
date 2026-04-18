import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Main Cursor Dot */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
          x: '-50%',
          y: '-50%',
        }}
        className="w-2 h-2 bg-primary rounded-full fixed top-0 left-0"
      />
      
      {/* Outer Ring */}
      <motion.div
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.4 : 0.6,
        }}
        style={{
          translateX: springX,
          translateY: springY,
          x: '-50%',
          y: '-50%',
        }}
        className="w-8 h-8 border-2 border-primary rounded-full fixed top-0 left-0 transition-transform duration-300"
      />

      {/* Hover Text or Glow */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            translateX: springX,
            translateY: springY,
            x: '15px',
            y: '15px',
          }}
          className="fixed top-0 left-0 px-2 py-1 bg-primary/20 backdrop-blur-md rounded-md border border-primary/20"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Explore</span>
        </motion.div>
      )}
    </div>
  );
}
