import { useState } from 'react';
import './SeoServiceFAQ.css';

export default function ServiceFaq({ titleAccent, categories }) {
  const [open, setOpen] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (i) => {
    setActiveTab(i);
    setOpen(null);
  };

  return (
    <section className="seo-faq-section">
      <div className="seo-faq-container">
        <div className="seo-faq-top">
          <h2 className="seo-faq-main-title">
            Faq&apos;s <span className="seo-faq-title-accent">{titleAccent}</span>
          </h2>

          <div className="seo-faq-pills">
            {categories.map((category, i) => (
              <button
                key={category.label}
                className={`seo-faq-pill ${activeTab === i ? 'active' : ''}`}
                onClick={() => handleTabChange(i)}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="seo-faq-list">
          {categories[activeTab].items.map((item, i) => (
            <div
              key={`${activeTab}-${item.q}`}
              className={`seo-faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="seo-faq-question">
                <span className="seo-faq-plus">{open === i ? 'x' : '+'}</span>
                <span>
                  {item.q.replace(/\?$/, '')}
                  {item.q.endsWith('?') && <span className="seo-faq-q-mark"> ?</span>}
                </span>
              </div>

              <div className="seo-faq-answer">
                <div className="seo-faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
