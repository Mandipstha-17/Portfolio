import { useEffect, useRef } from 'react';

export const useActiveSection = (
  sectionId: string,
  setActiveSection: (section: string) => void,
  threshold: number = 0.5
) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection, sectionId, threshold]);

  return sectionRef;
};
