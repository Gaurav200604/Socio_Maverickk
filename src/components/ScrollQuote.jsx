import { useEffect, useRef, useState } from 'react';
import './ScrollQuote.css';

const QUOTE = "Marketing is the art of reaching the right person at the right time with the right message, while always putting the customer at the heart of every decision.";

const CYCLE_WORDS = ['customer', 'audience', 'community'];

export default function ScrollQuote() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.85;
      const end   = windowH * 0.1;
      const total = start - end;
      const current = start - rect.top;
      const p = Math.min(Math.max(current / total, 0), 1);
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // cycle the accent word every 1.8s with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % CYCLE_WORDS.length);
        setFadeIn(true);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const words = QUOTE.split(' ');
  const total = words.length;

  return (
    <section className="sq-section" ref={sectionRef}>
      <p className="sq-text">
        {words.map((word, i) => {
          const threshold = i / total;
          const lit     = progress >= threshold + 0.01;
          const partial = !lit && progress >= threshold - 0.04;
          const isAccent = word === 'customer';

          if (isAccent) {
            return (
              <span
                key={i}
                className={`sq-word sq-accent ${lit ? 'lit' : partial ? 'partial' : ''} ${fadeIn ? 'cycle-in' : 'cycle-out'}`}
              >
                {CYCLE_WORDS[cycleIndex]}{' '}
              </span>
            );
          }

          return (
            <span
              key={i}
              className={`sq-word ${lit ? 'lit' : partial ? 'partial' : ''}`}
            >
              {word}{' '}
            </span>
          );
        })}
      </p>
    </section>
  );
}
