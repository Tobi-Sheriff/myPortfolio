import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection.js';

const NAV_LINKS = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));
  const onHome = location.pathname === '/';

  const linkClass = (id) =>
    `relative text-sm font-medium transition-colors hover:text-ink ${
      onHome && activeId === id ? 'text-ink' : 'text-muted'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="glass mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full px-6 py-3 sm:mx-6 lg:mx-auto">
        <Link to="/" className="font-display text-lg font-bold text-ink">
          my<span className="text-gradient">Portfolio</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <Link key={id} to={`/#${id}`} className={linkClass(id)}>
              {label}
              {onHome && activeId === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                />
              )}
            </Link>
          ))}
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map(({ id, label }) => (
                <Link
                  key={id}
                  to={`/#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
