import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import { GlassCard } from '../components/ui/GlassCard.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Ticker } from '../components/ui/Ticker.jsx';
import { movieArchive } from '../data/movieArchive.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function MovieArchive() {
  const screenshots = Array.from({ length: movieArchive.screenshotCount }, (_, i) => i + 1);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <GlassCard hover={false} className="p-8 sm:p-10">
            <motion.h1 variants={itemVariants} className="text-3xl font-bold sm:text-4xl">
              {movieArchive.title}
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-muted">
              {movieArchive.description}
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6">
              <Button href={movieArchive.liveUrl}>Visit Live Project</Button>
            </motion.div>
          </GlassCard>
        </motion.div>

        <section className="mt-16">
          <SectionHeading eyebrow="Under the hood" title="Features" />
          <Ticker items={movieArchive.features} direction="left" />
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="Built with" title="Technologies" />
          <Ticker items={movieArchive.technologies} direction="right" />
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="A closer look" title="Screenshots" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {screenshots.map((num) => (
              <GlassCard
                key={num}
                className="overflow-hidden p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.05 }}
              >
                <img
                  src={`/images/Screenshot_${num}.png`}
                  alt={`The Movie Archive screenshot ${num}`}
                  className="aspect-video w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default MovieArchive;
