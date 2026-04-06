import { useState } from 'react';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'Search Engine Optimization (SEO)',
    desc: 'Our expert SEO team and content writers will create a conversion-driven digital marketing strategy based on our years’ of experience in SEO consultancy and strategy implementation.',
  },
  {
    number: '02',
    title: 'Creative Content & A.I Marketing',
    desc: 'Our creative strategists will effectively maximize your conversion rates to provide a better user experience using Artificial Intelligence (A.I) SEO, Graphics, Analytics, Sales Demographics, Reports.',
  },
  {
    number: '03',
    title: 'Paid Advertising',
    desc: 'Trust our Google Premier Partner marketing experts to build a custom Paid Ads campaign such as a Google or Facebook ads strategy designed to achieve your business’ goals and desired outcomes.',
  },
  {
    number: '04',
    title: 'Social Media Marketing (SMM)',
    desc: 'Rely on our Social Media Marketing specialists to craft a tailored strategy designed to elevate your brands online presence and meet your business objectives & watch your business thrive in the realm of online visibility.',
  },
  {
    number: '05',
    title: 'Website Design & Development',
    desc: 'Optimize your online presence with our Website Design and Development expertise. Our seasoned team crafts visually captivating, user-friendly websites tailored to your business goals. Elevate your brand with our professional services today.',
  },
  {
    number: '06',
    title: 'Event Management',
    desc: 'Elevate your Events with our professional Event Management Services.  From meticulous planning to flawless execution, trust us to bring your vision to life with precision and style. Your success is our priority, and we are committed to delivering unparalleled excellence.',
  },
  {
    number: '07',
    title: 'Productions & Photography',
    desc: 'Capture the moment with our Production and Photography Services. Our experts deliver top-notch visuals for your brand. From concept to execution, we ensure every frame tells your unique story. Elevate your visual content with our professional touch.',
  },
  {
    number: '08',
    title: 'Digital PR & ORM',
    desc:'Amplify your online reputation with our Digital PR and ORM Services. Our experts specialize in building and protecting your brands image. From strategic PR campaigns to proactive ORM, trust us to enhance your digital standing. .'
  }
];

const PER_PAGE = 4; // show 4 cards (2×2) at a time

export default function Services() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(services.length / PER_PAGE);
  const visible = services.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const preventSelectionOnMouseDown = (e) => {
    e.preventDefault();
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = 92;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  return (
    <section id="services" className="srv-section">
      <div className="srv-layout">

        {/* LEFT — static */}
        <div className="srv-left">
          
          <h2 className="srv-heading">
            Our<br />
            <span className="srv-accent">Services</span>
          </h2>
          <div className="srv-underline" />
          <p className="srv-sub">
           At Socio Maverick, our team of highly specialized marketing experts — E-commerce, Paid Advertising, Search Engine Optimization, Lead Generation, Conversion Rate Optimization, Performance Marketing, and more — committed to delivering the outcomes you desire. We prioritize meaningful data to guide all our discussions and decisions, emphasizing continuous testing, refinement, and optimization. Our approach ensures that we seize every opportunity for your success.    </p>
          <div className="srv-cta-row">
            <button
              className="srv-cta"
              onMouseDown={preventSelectionOnMouseDown}
              onClick={() => scrollTo('contact')}
            >
              Get a Free Proposal
            </button>
            <span className="srv-page-info">{page + 1} / {totalPages}</span>
          </div>
        </div>

        {/* RIGHT — 2×2 grid */}
        <div className="srv-right-clip">
          <div className="srv-grid">
            {visible.map((s, i) => (
              <div className="srv-card" key={`${page}-${i}`} data-hover>
                <span className="srv-card-num">{s.number}</span>
                <h3 className="srv-card-title">{s.title}</h3>
                <div className="srv-card-line" />
                <p className="srv-card-desc">{s.desc}</p>
                <button
                  className="srv-read-more"
                  onMouseDown={preventSelectionOnMouseDown}
                  onClick={() => scrollTo('contact')}
                >
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* nav arrows in the bottom gap */}
      <div className="srv-bottom-nav">
        <div className="srv-nav-zone left">
          {page > 0 && (
            <button
              className="srv-arrow"
              onClick={() => setPage(p => p - 1)}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
          )}
        </div>
        <div className="srv-nav-zone right">
          {page < totalPages - 1 && (
            <button
              className="srv-arrow"
              onClick={() => setPage(p => p + 1)}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
