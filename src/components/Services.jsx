import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import { services } from '../data/servicesData';

const PER_PAGE = 4; // show 4 cards (2×2) at a time

export default function Services() {
  const navigate = useNavigate();
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
                  onClick={() => navigate(s.path)}
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
