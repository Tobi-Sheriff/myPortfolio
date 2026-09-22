import { Mail, Github } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Button } from '../ui/Button.jsx';

const EMAIL = 's.oluwatobiloba30@gmail.com';

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Let's talk" title="Connect With Me" className="text-center" />

      <GlassCard
        hover={false}
        className="flex flex-col items-center gap-6 p-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="max-w-md text-muted">
          Have a project in mind, a question, or just want to say hi? My inbox
          is always open.
        </p>

        <p className="font-display text-lg font-semibold text-ink">{EMAIL}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${EMAIL}`} target="_self">
            <Mail size={16} /> Email Me
          </Button>
          <Button href="https://github.com/Tobi-Sheriff" variant="outline">
            <Github size={16} /> GitHub
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
