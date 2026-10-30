import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (onIntersect: () => void) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { rootMargin: '300px' },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [onIntersect]);

  return targetRef;
};
