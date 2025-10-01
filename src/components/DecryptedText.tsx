import React, { useEffect, useMemo, useRef, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  durationMs?: number;
  charset?: string;
  startOnVisible?: boolean;
}

function randomChar(charset: string): string {
  const i = Math.floor(Math.random() * charset.length);
  return charset[i] ?? '';
}

const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]<>?/|~';

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className,
  durationMs = 1200,
  charset = DEFAULT_CHARSET,
  startOnVisible = true,
}) => {
  const [output, setOutput] = useState<string>('');
  const [started, setStarted] = useState<boolean>(!startOnVisible);
  const startTimeRef = useRef<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  const chars = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    if (!startOnVisible) return;
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;
    startTimeRef.current = performance.now();

    const step = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const revealCount = Math.floor(progress * chars.length);

      let next = '';
      for (let i = 0; i < chars.length; i++) {
        if (i < revealCount) {
          next += chars[i];
        } else if (chars[i] === ' ') {
          next += ' ';
        } else {
          next += randomChar(charset);
        }
      }
      setOutput(next);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [started, durationMs, chars, charset]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {started ? output : text}
    </span>
  );
};

export default DecryptedText;


