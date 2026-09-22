import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Button } from '../ui/Button.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Hero() {
  const ref = useRef(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(139,92,246,0.16), transparent 70%)`;

  const handleMouseMove = (event) => {
    const bounds = ref.current.getBoundingClientRect();
    mouseX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    mouseY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ backgroundImage: spotlight }} />

      <motion.div
        className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center lg:text-left">
          <motion.span
            variants={itemVariants}
            className="glass inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
          >
            Full Stack Developer
          </motion.span>

          <motion.h1 variants={itemVariants} className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Salami Sheriff <span className="text-gradient">Oluwatobiloba</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-xl text-lg text-muted lg:mx-0">
            I'm an enthusiastic programmer and gamer, fascinated by tech and what
            can be built with it. I'm on a journey of learning and building
            exciting websites and apps — and sharing that fascination along the way.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button to="/#projects">Creator Journey</Button>
            <Button to="/#contact" variant="outline">Get in touch</Button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-xs">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-40 blur-2xl" />
          <img
            src="/tobi1.jpg"
            alt="Portrait of Sheriff Salami Oluwatobiloba"
            className="glass relative aspect-square w-full rounded-[2rem] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
