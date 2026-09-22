import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import { Hero } from '../components/sections/Hero.jsx';
import { Skills } from '../components/sections/Skills.jsx';
import { Projects } from '../components/sections/Projects.jsx';
import { Contact } from '../components/sections/Contact.jsx';

/**
 * Cross-page nav links point at `/#section` — on arrival (or a hash change
 * while already here) scroll the target section into view.
 */
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);
}

export function Home() {
  useScrollToHash();

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
