import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <motion.div
      className={`mb-12 ${className}`}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="text-gradient font-display text-sm font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
