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
    { q: 'What services does Socio Maverick Offer ?', a: 'We offer end-to-end Digital Marketing — Social Media Management, Performance Marketing, Brand Identity & Design, Content Creation, SEO, and Influencer Marketing.' },
    { q: 'How long does it take to see Results ?', a: 'Most Clients see Measurable Improvements within 4–8 weeks. SEO Takes 3–6 Months for Significant Organic Growth, while Paid Campaigns can Deliver Results within Days of Launch.' },
    { q: 'Do you work with Startups or only Established Brands ?', a: "We Work with Both. Whether you're Launching your First Brand or Scaling an Established Business, we Tailor our Strategy to your Stage, Goals, and Budget." },
    { q: 'Can I Hire you for just one Service?', a: "Absolutely. You can Engage Us for a Single Service like Social Media Management or a One-Time Brand Identity Project. We're Flexible and Work Around your Needs." },
    { q: 'What makes Socio Maverick different from Other Agencies ?', a: 'We Combine Data-Driven Strategy with Bold Creative Execution. Every Decision is Backed by Research, and Every Campaign is Built Around your Specific Business Goals.' },
  ],
  1: [
    { q: 'What Payment methods do you Accept ?', a: 'We Accept Bank Transfers, UPI, Credit/Debit Cards, and International Wire Transfers. All Payments are Processed Securely.' },
    { q: 'Do you Offer Refunds ?', a: 'We Offer a Pro-Rated Refund if you Cancel Within The First 7 Days of A New Billing Cycle. After That, The Month is Non-Refundable.' },
    { q: 'Is there a Long-Term Contract?', a: 'No Lock-In Contracts. We Work on Monthly Retainers and You Can Cancel with 30 Days Notice.' },
    { q: 'What is your Pricing Model?', a: "We Offer Flexible Monthly Retainers and Project-Based Pricing. Book a Free Consultation and We'll Put Together a Custom Proposal for you." },
    { q: 'Are There any Hidden Charges?', a: 'None. Everything is Outlined Clearly in your Proposal Before we Begin. No Surprises.' },
  ],
  2: [
    { q: 'How do you Protect Our Brand Data?', a: 'All Client Data is Stored Securely. We Sign NDAs With Every Client and Never Share Your Data With Third Parties.' },
    { q: 'Who has Access to Our Social Media Accounts ?', a: 'Only the Assigned Team Members Working On Your Account Have Access. We Use Role-Based Permissions.' },
    { q: 'What Happens to Our Data if We Stop Working Together ?', a: 'All Your Data, Content, and Account Access Is Returned to You Immediately Upon Contract End.' },
    { q: 'Do you Follow Platform Advertising Policies ?', a: 'Yes, Strictly. We Follow All Meta, Google, and Platform-Specific Advertising Guidelines.' },
    { q: 'Is Our Business Strategy Kept Confidential?', a: 'Absolutely. We Treat All Client Information with Complete Confidentiality and Professionalism.' },
  ],
  3: [
    { q: 'How do I get Started with Socio Maverick ?', a: "Fill Out The Contact Form or Book a Free Discovery Call. We'll Send a Custom Proposal within 48 hours." },
    { q: 'How do I Track the Progress of my Campaigns ?', a: 'You Get Detailed Monthly Reports Covering All KPIs — Reach, Engagement, Leads, Conversions, And ROAS.' },
    { q: 'Can I Request Changes to the Strategy ?', a: 'Absolutely. We Hold Monthly Strategy Reviews and you can Request Adjustments Anytime.' },
    { q: 'Do you Provide a Dedicated Account Manager ?', a: 'Yes. Every Client Gets a Dedicated Account Manager as Their Single Point of Contact.' },
    { q: 'How Quickly do you Respond to Queries ?', a: 'We Respond to All Client Queries within 4 Business Hours During Working Days.' },
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
                <span>{item.q.replace(/\?$/, '')}{item.q.endsWith('?') && <span className="q-mark"> ?</span>}</span>
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
