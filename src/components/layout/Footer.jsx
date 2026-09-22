import { Github, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Tobi-Sheriff', Icon: Github },
  { label: 'Email', href: 'mailto:s.oluwatobiloba30@gmail.com', Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Sheriff Salami Oluwatobiloba. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="text-muted transition-colors hover:text-ink"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
