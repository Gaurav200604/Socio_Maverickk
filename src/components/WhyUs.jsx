import { useEffect, useRef, useState } from 'react';
import img1 from '../assetwus/1..jpg';
import img2 from '../assetwus/2.jpg';
import img3 from '../assetwus/3..jpg';
import img4 from '../assetwus/4.jpg';
import './WhyUs.css';

const slides = [
  { src: img1, label: 'Strategy First' },
  { src: img2, label: 'Data-Driven Results' },
  { src: img3, label: 'Bold Creative' },
  { src: img4, label: 'True Partnership' },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) {
        setActive(a => (a + 1) % slides.length);
      }
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const n = slides.length;
  // get index with circular wrap
  const idx = (i) => ((i % n) + n) % n;

  const leftIdx   = idx(active - 1);
  const centerIdx = active;
  const rightIdx  = idx(active + 1);

  return (
    <section id="why" className="why-section">
      <div className="why-header">
        <h2 className="why-title">
          Why <span className="accent">Socio_Maverick</span>?
        </h2>
        <p className="why-sub">
          We're not just another agency — we're your growth partner, obsessed with
          results and relentless in pursuit of your brand's success.
        </p>
      </div>

      <div
        className="why-stage"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* left */}
        <div className="why-card why-left" onClick={() => setActive(leftIdx)}>
          <img src={slides[leftIdx].src} alt={slides[leftIdx].label} />
        </div>

        {/* center */}
        <div className="why-card why-center">
          <img src={slides[centerIdx].src} alt={slides[centerIdx].label} />
          <div className="why-label">{slides[centerIdx].label}</div>
        </div>

        {/* right */}
        <div className="why-card why-right" onClick={() => setActive(rightIdx)}>
          <img src={slides[rightIdx].src} alt={slides[rightIdx].label} />
        </div>
      </div>

      {/* dots */}
      <div className="why-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`why-dot ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
