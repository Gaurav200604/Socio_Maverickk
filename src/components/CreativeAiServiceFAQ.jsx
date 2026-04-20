import { useState } from 'react';
import './CreativeAiServiceFAQ.css';

const categories = [
  'Content Strategy',
  'AI Workflow',
  'Performance & Reporting',
  'Pricing & Delivery',
];

const faqsByCategory = {
  0: [
    {
      q: 'How do you plan creative content for our brand?',
      a: 'We start with audience research, competitor analysis, and business-goal mapping. Then we build a monthly content strategy with clear pillars, campaign themes, and platform-wise deliverables.',
    },
    {
      q: 'Can you create both organic and ad creatives?',
      a: 'Yes. We produce content for organic growth and paid campaigns, including post creatives, reels concepts, ad copies, landing content, and performance-focused creative variants.',
    },
    {
      q: 'Will the content match our brand tone and identity?',
      a: 'Absolutely. We define and follow your brand voice, visual style, and messaging framework so every asset feels consistent and recognizable across channels.',
    },
    {
      q: 'Do you support script writing and concept development?',
      a: 'Yes. We handle ideation, script outlines, hooks, storyboard direction, and messaging angles for short-form videos, campaign launches, and branded content.',
    },
    {
      q: 'Can you handle content for multiple platforms together?',
      a: 'Yes. We design platform-specific versions for Instagram, LinkedIn, YouTube, websites, and ad channels while maintaining a unified campaign narrative.',
    },
  ],
  1: [
    {
      q: 'How do you use AI in your creative process?',
      a: 'We use AI to accelerate ideation, draft variations, analyze trends, and speed up production workflows. Final outputs are always refined by experts to maintain quality and brand relevance.',
    },
    {
      q: 'Is AI-generated content enough without human editing?',
      a: 'Not for high-impact branding. AI gives speed and scale, but human strategy and creativity are essential for emotional resonance, clarity, and differentiation.',
    },
    {
      q: 'Do you use AI for visual content and copy both?',
      a: 'Yes. We apply AI support to image concepting, copy iterations, hook testing, and campaign messaging while ensuring creative standards and compliance checks.',
    },
    {
      q: 'Can AI help us test more campaign ideas quickly?',
      a: 'Yes. AI allows rapid variant generation, enabling faster creative testing across audiences and formats so we can identify stronger-performing themes sooner.',
    },
    {
      q: 'Will our brand data and content remain confidential?',
      a: 'Yes. We follow strict handling practices for your brand materials and campaign information, and we use controlled workflows to keep your data protected.',
    },
  ],
  2: [
    {
      q: 'How do you measure performance of creative campaigns?',
      a: 'We track engagement rate, CTR, watch time, saves, shares, conversion signals, and lead outcomes. Insights from these metrics are used to continuously optimize your creative direction.',
    },
    {
      q: 'How often do we get reports and insights?',
      a: 'You receive regular reports with performance summaries, winning creative patterns, and next-step recommendations so your team knows what is working and why.',
    },
    {
      q: 'Do you run A/B testing for creatives?',
      a: 'Yes. We test hooks, visuals, copy length, call-to-action styles, and messaging angles to improve campaign efficiency and scale successful creatives.',
    },
    {
      q: 'Can you improve low-performing content already running?',
      a: 'Yes. We audit existing creatives, identify drop-off points, and redesign assets with stronger structure, messaging, and audience alignment.',
    },
    {
      q: 'Will you align creative KPIs with business goals?',
      a: 'Yes. We tie creative optimization to outcomes like qualified leads, pipeline growth, revenue contribution, and customer retention where applicable.',
    },
  ],
  3: [
    {
      q: 'Do you offer monthly retainers for Creative AI services?',
      a: 'Yes. We offer flexible monthly plans based on volume, channels, campaign complexity, and strategic support requirements.',
    },
    {
      q: 'Can we start with a pilot project first?',
      a: 'Yes. You can begin with a pilot sprint to validate style, quality, and performance approach before scaling into a longer engagement.',
    },
    {
      q: 'How quickly can your team deliver content?',
      a: 'Turnaround depends on scope and format, but our AI-assisted workflows help shorten production cycles while keeping quality control in place.',
    },
    {
      q: 'Will we have one point of contact for the project?',
      a: 'Yes. You get a dedicated point of contact to manage communication, feedback loops, revisions, and strategic alignment.',
    },
    {
      q: 'How do we get started with Socio Maverick Creative AI?',
      a: 'Share your goals, target audience, and current channels. We will schedule a discovery call and propose a tailored creative strategy with execution plan.',
    },
  ],
};

export default function CreativeAiServiceFAQ() {
  const [open, setOpen] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (i) => {
    setActiveTab(i);
    setOpen(null);
  };

  return (
    <section className="creative-ai-faq-section">
      <div className="creative-ai-faq-container">
        <div className="creative-ai-faq-top">
          <h2 className="creative-ai-faq-main-title">
            Faq's <span className="creative-ai-faq-title-accent">Creative AI</span>
          </h2>

          <div className="creative-ai-faq-pills">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`creative-ai-faq-pill ${activeTab === i ? 'active' : ''}`}
                onClick={() => handleTabChange(i)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="creative-ai-faq-list">
          {faqsByCategory[activeTab].map((item, i) => (
            <div
              key={`${activeTab}-${i}`}
              className={`creative-ai-faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="creative-ai-faq-question">
                <span className="creative-ai-faq-plus">{open === i ? '×' : '+'}</span>
                <span>
                  {item.q.replace(/\?$/, '')}
                  {item.q.endsWith('?') && <span className="creative-ai-faq-q-mark"> ?</span>}
                </span>
              </div>

              <div className="creative-ai-faq-answer">
                <div className="creative-ai-faq-answer-inner">
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
