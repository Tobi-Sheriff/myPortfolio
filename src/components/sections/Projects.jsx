import { Film } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Button } from '../ui/Button.jsx';
import { projects } from '../../data/projects.js';

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Things I've built" title="Projects" />

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            hover={false}
            className="grid grid-cols-1 items-center gap-8 p-8 sm:p-10 md:grid-cols-[1.4fr_1fr]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
              <p className="mt-4 text-muted">{project.description}</p>
              {project.note && <p className="mt-3 text-sm italic text-muted/70">{project.note}</p>}
              <Button to={project.href} className="mt-6">
                {project.cta}
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 blur-xl" />
                <Film size={56} className="relative text-ink/70" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
