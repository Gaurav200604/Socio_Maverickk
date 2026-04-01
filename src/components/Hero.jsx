import './Hero.css';

const tickerItems = [
  "Start Growing Your Business",
  "Start Growing Your Business",
  "Start Growing Your Business",
  "Start Growing Your Business",
  "Start Growing Your Business",
  "Start Growing Your Business",
  "Start Growing Your Business",
  "Start Growing Your Business",
];

function Burst() {
  return (
    <svg className="ticker-burst" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 20 + 6  * Math.cos(angle);
        const y1 = 20 + 6  * Math.sin(angle);
        const x2 = 20 + 16 * Math.cos(angle);
        const y2 = 20 + 16 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />;
      })}
      <circle cx="20" cy="20" r="3.5" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">

      {/* pink grid blocks */}
      <div className="hero-block b1" />
      <div className="hero-block b2" />
      <div className="hero-block b3" />
      <div className="hero-block b4" />
      <div className="hero-block b5" />
      <div className="hero-block b6" />

      <div className="hero-content">
        <p className="hero-eyebrow">Socio<span className="hero-eyebrow-accent"> Maverick</span></p>

        <h1 className="hero-title">
          START GROWING<br />
          <span className="hero-accent">YOUR BUSINESS.</span>
        </h1>

        <p className="hero-desc">
          At Socio Maverick, we specialize in 360-degree digital marketing strategies
          designed to catapult your brand to new heights of success.
          A full funnel approach for your business.
        </p>

        <div className="hero-cta-row">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Start Your Journey
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
        </div>
      </div>

      {/* ticker */}
      <div className="hero-ticker">
        <div className="ticker-track">
          {tickerItems.map((text, i) => (
            <span key={i} className="ticker-item">
              {text}
              <Burst />
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
