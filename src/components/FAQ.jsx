import { useState } from 'react';
import './FAQ.css';

const categories = [
  'General Question',
  'Payment & Billing',
  'Safety & Security',
  'Account & Update',
];

const faqsByCategory = {
  0: [
    { q: 'What services does Socio_Maverick offer?', a: 'We offer end-to-end digital marketing — social media management, performance marketing, brand identity & design, content creation, SEO, and influencer marketing.' },
    { q: 'How long does it take to see results?', a: 'Most clients see measurable improvements within 4–8 weeks. SEO takes 3–6 months for significant organic growth, while paid campaigns can deliver results within days of launch.' },
    { q: 'Do you work with startups or only established brands?', a: "We work with both. Whether you're launching your first brand or scaling an established business, we tailor our strategy to your stage, goals, and budget." },
    { q: 'Can I hire you for just one service?', a: "Absolutely. You can engage us for a single service like social media management or a one-time brand identity project. We're flexible and work around your needs." },
    { q: 'What makes Socio_Maverick different from other agencies?', a: 'We combine data-driven strategy with bold creative execution. Every decision is backed by research, and every campaign is built around your specific business goals.' },
  ],
  1: [
    { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, credit/debit cards, and international wire transfers. All payments are processed securely.' },
    { q: 'Do you offer refunds?', a: 'We offer a pro-rated refund if you cancel within the first 7 days of a new billing cycle. After that, the month is non-refundable.' },
    { q: 'Is there a long-term contract?', a: 'No lock-in contracts. We work on monthly retainers and you can cancel with 30 days notice.' },
    { q: 'What is your pricing model?', a: "We offer flexible monthly retainers and project-based pricing. Book a free consultation and we'll put together a custom proposal for you." },
    { q: 'Are there any hidden charges?', a: 'None. Everything is outlined clearly in your proposal before we begin. No surprises.' },
  ],
  2: [
    { q: 'How do you protect our brand data?', a: 'All client data is stored securely. We sign NDAs with every client and never share your data with third parties.' },
    { q: 'Who has access to our social media accounts?', a: 'Only the assigned team members working on your account have access. We use role-based permissions.' },
    { q: 'What happens to our data if we stop working together?', a: 'All your data, content, and account access is returned to you immediately upon contract end.' },
    { q: 'Do you follow platform advertising policies?', a: 'Yes, strictly. We follow all Meta, Google, and platform-specific advertising guidelines.' },
    { q: 'Is our business strategy kept confidential?', a: 'Absolutely. We treat all client information with complete confidentiality and professionalism.' },
  ],
  3: [
    { q: 'How do I get started with Socio_Maverick?', a: "Fill out the contact form or book a free discovery call. We'll send a custom proposal within 48 hours." },
    { q: 'How do I track the progress of my campaigns?', a: 'You get detailed monthly reports covering all KPIs — reach, engagement, leads, conversions, and ROAS.' },
    { q: 'Can I request changes to the strategy?', a: 'Absolutely. We hold monthly strategy reviews and you can request adjustments anytime.' },
    { q: 'Do you provide a dedicated account manager?', a: 'Yes. Every client gets a dedicated account manager as their single point of contact.' },
    { q: 'How quickly do you respond to queries?', a: 'We respond to all client queries within 4 business hours during working days.' },
  ],
};

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (i) => { setActiveTab(i); setOpen(null); };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* heading */}
        <div className="faq-top">
          <h2 className="faq-main-title">Faq's</h2>

          {/* tab pills */}
          <div className="faq-pills">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`faq-pill ${activeTab === i ? 'active' : ''}`}
                onClick={() => handleTabChange(i)}
                data-hover
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* accordion */}
        <div className="faq-list">
          {faqsByCategory[activeTab].map((item, i) => (
            <div
              key={`${activeTab}-${i}`}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
              data-hover
            >
              <div className="faq-question">
                <span className="faq-plus">{open === i ? '×' : '+'}</span>
                <span>{item.q}</span>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
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
