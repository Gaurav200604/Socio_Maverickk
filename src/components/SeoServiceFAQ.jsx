import { useState } from 'react';
import './SeoServiceFAQ.css';

const categories = [
  'SEO Strategy',
  'Technical SEO',
  'Timeline & Reporting',
  'Pricing & Process',
];

const faqsByCategory = {
  0: [
    {
      q: 'How do you build an SEO strategy for my business?',
      a: 'We start with a full SEO audit, competitor mapping, keyword opportunity analysis, and business-goal alignment. Then we prioritize quick wins and long-term growth tasks in a custom monthly roadmap.',
    },
    {
      q: 'Do you target local SEO or national SEO?',
      a: 'We can do both. For local SEO we optimize your Google Business Profile, local citations, and geo pages. For national SEO we focus on broader keyword clusters, topical authority, and scalable content architecture.',
    },
    {
      q: 'Will you optimize existing pages or create new content too?',
      a: 'Both. We improve existing pages for intent match and conversion, and create new high-opportunity pages where search demand exists. This balanced approach helps faster growth and better ranking stability.',
    },
    {
      q: 'Can SEO help with lead quality and not only traffic?',
      a: 'Yes. We map keywords to funnel stages and optimize for commercial intent, not vanity traffic. This improves lead relevance, conversion quality, and business outcomes.',
    },
    {
      q: 'Do you also align SEO with social and paid campaigns?',
      a: 'Yes. We align organic content with social and paid data to identify winning messaging, stronger landing pages, and higher-converting keyword themes.',
    },
  ],
  1: [
    {
      q: 'Do you fix technical SEO issues on my website?',
      a: 'Yes. We identify and resolve crawlability, indexing, site speed, Core Web Vitals, structured data, internal linking, and duplicate content issues to strengthen search performance.',
    },
    {
      q: 'Can you help if my pages are not getting indexed?',
      a: 'Absolutely. We diagnose causes such as robots directives, canonical errors, weak internal links, or thin content, then implement indexing-focused fixes and validation checks.',
    },
    {
      q: 'Do you optimize mobile SEO and page speed?',
      a: 'Yes. We optimize image delivery, script loading, layout stability, and mobile UX signals to improve both user experience and search rankings.',
    },
    {
      q: 'Will you handle schema and rich result setup?',
      a: 'Yes. We implement relevant structured data (such as FAQ, Organization, Breadcrumb, Article, or Service schema) to improve SERP visibility and eligibility for rich results.',
    },
    {
      q: 'Can you recover from a traffic drop or algorithm update?',
      a: 'Yes. We run a post-update diagnosis, identify affected URL groups, and execute a recovery plan focused on content quality, intent alignment, and technical trust signals.',
    },
  ],
  2: [
    {
      q: 'How long does SEO usually take to show results?',
      a: 'Early movement often appears in 4 to 8 weeks, while stronger ranking and traffic growth typically takes 3 to 6 months depending on competition, website health, and domain authority.',
    },
    {
      q: 'What reports will I receive each month?',
      a: 'You receive clear monthly reports with keyword movement, traffic trends, top-performing pages, technical progress, completed tasks, and next-step priorities tied to business KPIs.',
    },
    {
      q: 'Will I get access to keyword and performance dashboards?',
      a: 'Yes. We provide transparent tracking and periodic review calls so you can see exactly what is improving and what actions are planned next.',
    },
    {
      q: 'How often do you update the SEO roadmap?',
      a: 'We review and refine the roadmap monthly based on performance data, seasonality, competitor movements, and newly discovered keyword opportunities.',
    },
    {
      q: 'Do you explain results in non-technical language?',
      a: 'Yes. We simplify reports and recommendations so your team can clearly understand impact, priorities, and expected outcomes.',
    },
  ],
  3: [
    {
      q: 'Do you offer one-time SEO audits and ongoing retainers?',
      a: 'Yes. You can choose a one-time audit with an implementation plan or a monthly retainer where we continuously execute and optimize SEO tasks.',
    },
    {
      q: 'Is there a minimum commitment period for SEO services?',
      a: 'We recommend a minimum 3-month engagement for meaningful outcomes, but plans are flexible based on your goals and current website stage.',
    },
    {
      q: 'Do you provide custom packages based on business size?',
      a: 'Yes. We offer tailored plans for startups, growth-stage businesses, and established brands based on website size, goals, and market competition.',
    },
    {
      q: 'Who will be my point of contact during the project?',
      a: 'You will have a dedicated SEO manager for strategy, communication, and monthly review coordination so execution stays clear and accountable.',
    },
    {
      q: 'How do we get started with your SEO team?',
      a: 'Share your website and business goals, and we will schedule a discovery call followed by an audit snapshot and a custom SEO action plan.',
    },
  ],
};

export default function SeoServiceFAQ() {
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
            Faq's <span className="seo-faq-title-accent">SEO</span>
          </h2>

          <div className="seo-faq-pills">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`seo-faq-pill ${activeTab === i ? 'active' : ''}`}
                onClick={() => handleTabChange(i)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="seo-faq-list">
          {faqsByCategory[activeTab].map((item, i) => (
            <div
              key={`${activeTab}-${i}`}
              className={`seo-faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="seo-faq-question">
                <span className="seo-faq-plus">{open === i ? '×' : '+'}</span>
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
