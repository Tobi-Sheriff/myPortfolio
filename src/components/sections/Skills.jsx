import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { skills } from '../../data/skills.js';

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="What I work with" title="Skill Set" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <GlassCard
            key={name}
            className="flex flex-col items-center gap-3 p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div whileHover={{ scale: 1.15, rotate: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Icon size={32} color={color} style={{ filter: `drop-shadow(0 0 10px ${color}66)` }} />
            </motion.div>
            <span className="text-sm font-medium text-ink">{name}</span>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
