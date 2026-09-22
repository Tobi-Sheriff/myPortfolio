import { Link } from 'react-router-dom';

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.97]';

const variants = {
  solid: 'text-white shadow-lg shadow-violet-900/30',
  outline: 'glass text-ink hover:border-white/20',
};

function Sheen() {
  return (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  );
}

function Fill({ variant }) {
  if (variant !== 'solid') return null;
  return (
    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-opacity duration-300 group-hover:opacity-90" />
  );
}

/**
 * Renders as a router `Link` when `to` is set, a plain anchor when `href` is
 * set, otherwise a `<button>` — one component instead of three near-duplicates.
 */
export function Button({ children, to, href, variant = 'solid', className = '', ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <Fill variant={variant} />
      <Sheen />
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
