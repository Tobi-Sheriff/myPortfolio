import { motion } from 'framer-motion';

/**
 * Shared glassmorphic panel used by skill tiles, project cards, and the
 * contact form — one hover/tilt/border treatment instead of one per section.
 */
export function GlassCard({ children, className = '', hover = true, ...motionProps }) {
  return (
    <motion.div
      className={`glass rounded-2xl transition-colors duration-300 hover:border-white/20 ${className}`}
      whileHover={hover ? { y: -6, scale: 1.015 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
