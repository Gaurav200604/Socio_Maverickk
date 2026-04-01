import { useState } from 'react';
import './FAQ.css';

const categories = [
  { icon: '💡', label: 'General Question' },
  { icon: '💳', label: 'Payment & Billing' },
  { icon: '🔒', label: 'Safety & Security' },
  { icon: '🚀', label: 'Account & Update' },
];

const faqsByCategory = {
  0: [
    { q: 'What services does Socio_Maverick offer?', a: 'We offer end-to-end digital marketing — social media management, performance marketing, brand identity & design, content creation, SEO, and influencer marketing.' },
    { q: 'How long does it take to see results?', a: 'Most clients see measurable improvements within 4–8 weeks. SEO takes 3–6 months for significant organic growth, while paid campaigns can deliver results within days of launch.' },
    { q: 'Do you work with startups or only established brands?', a: "We work with both. Whether you're launching your first brand or scaling an established business, we tailor our strategy to your stage, goals, and budget." },
    { q: 'Can I hire you for just one service?', a: "Absolutely. You can engage us for a single service like social media management or a one-time brand identity project. We're flexible and work around your needs." },
  ],
  1: [
    { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, credit/debit cards, and international wire transfers. All payments are processed securely.' },
    { q: 'Do you offer refunds?', a: 'We offer a pro-rated refund if you cancel within the first 7 days of a new billing cycle. After that, the month is non-refundable.' },
    { q: 'Is there a long-term contract?', a: 'No lock-in contracts. We work on monthly retainers and you can cancel with 30 days notice. We believe in earning your business every month.' },
    { q: 'What is your pricing model?', a: "We offer flexible monthly retainers and project-based pricing depending on scope. Book a free consultation and we'll put together a custom proposal for you." },
  ],
  2: [
    { q: 'How do you protect our brand data?', a: 'All client data is stored securely with AES-256 encryption. We sign NDAs with every client and never share your data with third parties.' },
    { q: 'Who has access to our social media accounts?', a: 'Only the assigned team members working on your account have access. We use role-based permissions and recommend using a dedicated business account.' },
    { q: 'What happens to our data if we stop working together?', a: 'All your data, content, and account access is returned to you immediately upon contract end. We retain nothing after offboarding.' },
    { q: 'Do you follow platform advertising policies?', a: 'Yes, strictly. We follow all Meta, Google, and platform-specific advertising guidelines to ensure your accounts remain in good standing.' },
  ],
  3: [
    { q: 'How do I get started with Socio_Maverick?', a: "Simply fill out the contact form or book a free discovery call. We'll understand your goals and send a custom proposal within 48 hours." },
    { q: 'How do I track the progress of my campaigns?', a: 'You get access to a live dashboard and receive detailed monthly reports covering all KPIs — reach, engagement, leads, conversions, and ROAS.' },
    { q: 'Can I request changes to the strategy?', a: 'Absolutely. We hold monthly strategy reviews and you can request adjustments anytime. Your feedback is built into our workflow.' },
    { q: 'Do you provide a dedicated account manager?', a: 'Yes. Every client gets a dedicated account manager as their single point of contact for all communication, updates, and approvals.' },
  ],
};

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleTabChange = (i) => {
    setActiveTab(i);
    setOpen(null); // reset open item on tab change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const currentFaqs = faqsByCategory[activeTab];

  return (
    <section className="faq-section">

      {/* saffron header */}
      <div className="faq-hero">
        <h2 className="faq-hero-title">Frequently Asked <span>Questions</span></h2>
        <p className="faq-hero-sub">
          Everything you need to know about working with Socio_Maverick.
          Can't find an answer? Reach out below.
        </p>
      </div>

      <div className="faq-body">

        {/* category tabs */}
        <div className="faq-tabs">
          {categories.map((c, i) => (
            <button
              key={i}
              className={`faq-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => handleTabChange(i)}
              data-hover
            >
              <span className="faq-tab-icon">{c.icon}</span>
              <span className="faq-tab-label">{c.label}</span>
            </button>
          ))}
        </div>

        {/* accordion — filtered by active tab */}
        <div className="faq-list">
          {currentFaqs.map((item, i) => (
            <div
              key={`${activeTab}-${i}`}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
              data-hover
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <div className="faq-icon-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* contact form */}
        <div className="faq-contact">
          <h3 className="faq-contact-title">More Questions? Contact Us...</h3>
          <form className="faq-form" onSubmit={handleSubmit}>
            {sent && <div className="faq-success">Message sent! We'll be in touch soon.</div>}
            <div className="faq-form-row">
              <input type="text" placeholder="Full Name" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email Address" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <textarea placeholder="Your Message..." rows={5} required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="faq-submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
