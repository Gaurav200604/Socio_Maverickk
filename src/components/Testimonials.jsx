import { useRef, useEffect } from 'react';
import './Testimonials.css';

const col1 = [
  {
    stars: 5,
    text: "Socio_Maverick completely transformed our online presence. Within 6 weeks we saw a 3x increase in inbound leads — strangers finding us, booking calls, and converting without us chasing them.",
    name: "Ashish Shukla", company: "BTTPL", initial: "A",
  },
  {
    stars: 5,
    text: "What I liked most was that they didn't just 'design something pretty'. They kept asking why someone would click, why they'd trust us. It felt like working with a team that actually cares about the business side.",
    name: "Umanshi Chaudhary", company: "Miranda House", initial: "U",
  },
  {
    stars: 5,
    text: "Our brand had no clear identity online. Socio_Maverick gave us a voice, a look, and a strategy that made sense for our audience. Six months in, we're the go-to name in our niche locally.",
    name: "Rajat Goyal", company: "Rajat Caters", initial: "R",
  },
];

const col2 = [
  {
    stars: 5,
    text: "We already had an online presence but growth had hit a ceiling. Most sign-ups came from loyal followers. Socio_Maverick broke that ceiling — within 3 months we were reaching entirely new audiences.",
    name: "Nikhil Singh", company: "KMC", initial: "N",
  },
  {
    stars: 5,
    text: "I was skeptical about paid ads — felt like burning money. Their Meta campaign delivered a 4.2x ROAS in the first month. The data they track and report is incredibly transparent.",
    name: "Munish Dutt", company: "Livsmart", initial: "L",
  },
  {
    stars: 5,
    text: "The SEO work alone brought in 40% more organic traffic. We went from page 4 to page 1 for our main keywords in under 90 days. Absolutely worth every rupee.",
    name: "Dr Geeta Bhutt", company: "NCWEB", initial: "N",
  },
];

const col3 = [
  {
    stars: 5,
    text: "The content they create is genuinely scroll-stopping. Our Instagram engagement went from 1% to over 8% in two months. People actually comment, share, and DM us now — that never happened before.",
    name: "Pradeep Sir", company: "Chem Academy", initial: "P",
  },
  {
    stars: 5,
    text: "We paid back what we spent on the project within weeks of launching the new funnel. It was the first time I could see strangers finding us and paying for high-ticket coaching without me chasing them.",
    name: "Meera Joshi", company: "MindShift Coaching", initial: "M",
  },
  {
    stars: 5,
    text: "Socio_Maverick rebuilt our entire content strategy from scratch. The influencer campaign they ran got us 2M+ impressions and a 12% conversion rate on the landing page. Phenomenal work.",
    name: "Dev Sharma", company: "FitLife Studios", initial: "D",
  },
];

function Stars({ count }) {
  return (
    <div className="t-stars">
      {Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

function Card({ t }) {
  return (
    <div className="t-card">
      <Stars count={t.stars} />
      <p className="t-para">
        <span className="t-big-quote">"</span>{t.text}
      </p>
      <div className="t-author">
        <div className="t-avatar">{t.initial}</div>
        <div>
          <div className="t-name">{t.name}</div>
          <div className="t-company">{t.company}</div>
        </div>
      </div>
    </div>
  );
}

function Column({ items, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === 'down' ? 0 : 0);
  const hoveredRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // init position for downward column — start at halfway so it scrolls into view
    if (direction === 'down') {
      posRef.current = track.scrollHeight / 2;
      track.style.transform = `translateY(-${posRef.current}px)`;
    }

    const speed = 0.6;

    const animate = () => {
      if (!hoveredRef.current) {
        const half = track.scrollHeight / 2;
        if (direction === 'down') {
          posRef.current -= speed;
          if (posRef.current <= 0) posRef.current = half;
        } else {
          posRef.current += speed;
          if (posRef.current >= half) posRef.current = 0;
        }
        track.style.transform = `translateY(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div
      className="t-col"
      onMouseEnter={() => { hoveredRef.current = true; }}
      onMouseLeave={() => { hoveredRef.current = false; }}
    >
      <div className="t-fade-top" />
      <div className="t-fade-bottom" />
      <div className="t-track" ref={trackRef}>
        {doubled.map((t, i) => <Card key={i} t={t} />)}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="t-section">
      <div className="t-watermark" aria-hidden="true">TESTIMONIAL</div>
      <div className="t-glow" aria-hidden="true" />

      <div className="t-grid">
        <Column items={col1} direction="up" />
        <Column items={col2} direction="down" />
        <Column items={col3} direction="up" />
      </div>
    </section>
  );
}
