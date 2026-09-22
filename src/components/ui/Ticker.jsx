import { motion } from 'framer-motion';

/**
 * Infinite horizontal marquee. Renders the item list twice back-to-back and
 * animates a full -100%/100% translate so the loop seam is invisible.
 */
export function Ticker({ items, direction = 'left', duration = 40 }) {
  const animate =
    direction === 'left' ? { x: ['0%', '-100%'] } : { x: ['-100%', '0%'] };

  return (
    <div className="glass overflow-hidden rounded-xl py-5">
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={animate}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-gradient px-8 font-display text-lg font-semibold"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
