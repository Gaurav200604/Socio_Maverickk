import { useState, useEffect } from 'react';
import img1 from '../assetwhy/1.png';
import img2 from '../assetwhy/2.png';
import img3 from '../assetwhy/3.png';
import img4 from '../assetwhy/4.png';
import img5 from '../assetwhy/5.png';
import img6 from '../assetwhy/6.png';

import './WhyUs.css';

const slides = [
  {
    img: img1,
    tag: 'Brand Presence',
    title: 'Get a Unified and\nImpactful Brand Presence\nacross all Channels.',
    accent: 'Impactful Brand Presence',
    desc: 'We build a consistent, powerful brand identity across every media platform so your audience recognises you everywhere.',
  },
  {
    img: img2,
    tag: 'Custom Strategy',
    title: 'Get Customized Marketing\nStrategies Specially Designed\nfor your Business Growth.',
    accent: 'Customized Marketing',
    desc: 'No templates, no shortcuts. Every strategy is built from scratch around your unique goals, audience, and market.',
  },
  {
    img: img3,
    tag: 'Conversion',
    title: 'Convert your Visitors\nto Leads into Customers\nand Boost your ROI',
    accent: 'Boost your ROI',
    desc: 'We build full-funnel strategies that guide your audience from first click to loyal customer — and keep them coming back.',
  },
  {
    img: img4,
    tag: 'Campaigns',
    title: 'Get Result-Driven\nCampaigns focusing on\nyour Business Goals.',
    accent: 'Result-Driven',
    desc: 'Every campaign is backed by data and built around your specific business objectives for maximum measurable impact.',
  },
  {
    img: img5,
    tag: '360° Strategy',
    title: 'Elevate Your Brand\nDigitally with 360°\nMaverick Strategies.',
    accent: '360°',
    desc: 'From social media to SEO to paid ads — we cover every digital touchpoint so you never miss an opportunity to grow.',
  },
  {
    img: img6,
    tag: 'SEO',
    title: 'Harness the Power of\nSearch Engines with our\nSEO-Optimized Structures.',
    accent: 'SEO-Optimized',
    desc: 'We build technically sound, content-rich website structures that rank higher, drive organic traffic, and convert visitors.',
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
    <section id="why" className="ws-section">
      <div className="ws-header">
        <h2 className="ws-header-title">
          Why <span className="ws-header-accent brand-name">Socio Maverick</span><span className="q-mark">?</span>
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
