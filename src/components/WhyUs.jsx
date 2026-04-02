import { useState, useEffect } from 'react';
import img1 from '../assetwhy/1.png';
import img2 from '../assetwhy/2.png';
import img3 from '../assetwhy/3.png';
import './WhyUs.css';

const slides = [
  {
    img: img1,
    tag: 'Why Choose Us',
    title: 'Get Result-Driven\nCampaigns focusing on\nyour Business Goals.',
    accent: 'Result-Driven',
    desc: 'We craft data-backed strategies that align with your business objectives and deliver measurable growth.',
  },
  {
    img: img2,
    tag: 'Our Approach',
    title: 'Creative Content\nthat Stops the Scroll\nand Drives Action.',
    accent: 'Stops the Scroll',
    desc: 'From reels to carousels, our creative team produces content that captures attention and converts audiences.',
  },
  {
    img: img3,
    tag: 'Our Promise',
    title: 'Transparent Reporting\nwith Real Numbers\nthat Matter.',
    accent: 'Real Numbers',
    desc: 'Every campaign comes with clear, honest reporting so you always know exactly where your investment is going.',
  },
];

export default function WhyUs() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setAnimating(true);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  // split title to highlight accent word
  const titleParts = slide.title.split(slide.accent);

  return (
    <section className="ws-section">
      <div className="ws-header">
        <h2 className="ws-header-title">
          Why <span className="ws-header-accent">Socio_Maverick</span>?
        </h2>
        <p className="ws-header-sub">
          We're not just another agency — we're your growth partner, obsessed with results.
        </p>
      </div>

      <div className={`ws-inner ${animating ? 'ws-in' : 'ws-out'}`}>

        {/* left text */}
        <div className="ws-text">
          <span className="ws-tag">{slide.tag}</span>
          <h2 className="ws-title">
            {titleParts[0]}
            <span className="ws-accent">{slide.accent}</span>
            {titleParts[1]}
          </h2>
          <p className="ws-desc">{slide.desc}</p>
          <div className="ws-progress">
            <div className="ws-progress-bar" key={current} />
          </div>
          <div className="ws-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`ws-dot ${i === current ? 'active' : ''}`}
                onClick={() => { setAnimating(false); setTimeout(() => { setCurrent(i); setAnimating(true); }, 300); }}
              />
            ))}
          </div>
        </div>

        {/* right image */}
        <div className="ws-img-wrap">
          <img src={slide.img} alt={slide.tag} className="ws-img" />
        </div>

      </div>
    </section>
  );
}
