import { useEffect, useState } from 'react';

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, for scroll-spy nav highlighting. Returns null when none of the
 * sections are mounted (e.g. on routes without those ids).
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
