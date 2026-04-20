import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreativeAiServiceFAQ from '../../components/CreativeAiServiceFAQ';
import '../InfoPage.css';
import creativeAiHeroImage from '../../assetservice/3.png';
import creativeAiAboutImage from '../../assetservice/3.png';

import './SeoServicePage.css';

const creativeAiApproachCards = [
  {
    title: 'AI-Led Content Strategy',
    description:
      'We combine audience insights, search intent, and AI-assisted planning to create a content roadmap that supports awareness, engagement, and conversion goals. Every asset is built to match your brand voice and business priorities.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="12" width="40" height="30" rx="4" />
        <line x1="20" y1="20" x2="44" y2="20" />
        <line x1="20" y1="28" x2="36" y2="28" />
        <line x1="20" y1="36" x2="40" y2="36" />
        <circle cx="48" cy="46" r="6" />
        <path d="M48 40v12" />
        <path d="M42 46h12" />
      </svg>
    ),
  },
  {
    title: 'Brand-Consistent Messaging',
    description:
      'From captions to campaign copies, we ensure every piece reflects your tone, values, and positioning. AI helps us scale production speed, while human creativity ensures your messaging remains authentic and memorable.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 20h32v26H16z" />
        <line x1="22" y1="28" x2="42" y2="28" />
        <line x1="22" y1="34" x2="38" y2="34" />
        <path d="M28 46h8" />
        <circle cx="50" cy="14" r="6" />
        <path d="M50 10v8" />
        <path d="M46 14h8" />
      </svg>
    ),
  },
  {
    title: 'Campaign Creative at Scale',
    description:
      'We rapidly generate and test creative variants for ads, landing pages, reels, and social posts. This iterative approach helps identify winning ideas faster and improves campaign performance across platforms.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="14" width="20" height="20" rx="3" />
        <rect x="34" y="14" width="20" height="20" rx="3" />
        <rect x="22" y="38" width="20" height="16" rx="3" />
        <line x1="30" y1="24" x2="34" y2="24" />
        <line x1="26" y1="38" x2="26" y2="34" />
        <line x1="38" y1="38" x2="38" y2="34" />
      </svg>
    ),
  },
  {
    title: 'Data-Backed Optimization',
    description:
      'We track reach, engagement, click-through rates, watch time, and conversion signals to refine creative direction. Your strategy evolves continuously based on real performance instead of guesswork.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <line x1="14" y1="50" x2="50" y2="50" />
        <line x1="20" y1="50" x2="20" y2="30" />
        <line x1="30" y1="50" x2="30" y2="22" />
        <line x1="40" y1="50" x2="40" y2="36" />
        <polyline points="16,24 28,18 36,26 48,14" />
        <circle cx="48" cy="14" r="4" />
      </svg>
    ),
  },
  {
    title: 'Platform-Ready Content',
    description:
      'Different platforms need different creative formats. We adapt and optimize your content for Instagram, YouTube, LinkedIn, Meta Ads, and web channels so every asset performs in the right context.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="12" width="44" height="40" rx="5" />
        <path d="M26 24l14 8-14 8z" />
        <line x1="18" y1="18" x2="24" y2="18" />
        <line x1="40" y1="18" x2="46" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Human + AI Collaboration',
    description:
      'Our process blends AI efficiency with expert creative direction. This gives you faster turnaround, fresh ideas, and high-quality outputs without compromising brand integrity or strategic clarity.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="20" cy="24" r="8" />
        <circle cx="44" cy="24" r="8" />
        <path d="M12 48a10 10 0 0 1 16 0" />
        <path d="M36 48a10 10 0 0 1 16 0" />
        <line x1="28" y1="24" x2="36" y2="24" />
        <line x1="32" y1="20" x2="32" y2="28" />
      </svg>
    ),
  },
];

export default function CreativeAiServicePage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main seo-page-main">
        <section className="seo-hero-section">
          <div className="seo-hero-content">
            <img
              src={creativeAiHeroImage}
              alt="Creative content and AI marketing"
              className="seo-hero-image"
            />

            <h1 className="seo-hero-title">
              Creative Content & <span>AI Marketing</span>
            </h1>

            <p className="seo-hero-description">
              Blend storytelling, design, and AI-powered workflows to produce high-performing
              campaigns faster. Socio Maverick helps your brand create content that captures
              attention, drives engagement, and improves conversion outcomes.
            </p>
          </div>
        </section>

        <section className="seo-about-section">
          <div className="seo-about-content">
            <div className="seo-about-copy">
              <h2>
                Scale Creative Impact with
                <br />
                Socio <span>Maverick</span>
              </h2>

              <p>
                Our Creative Content and AI Marketing service is designed for brands that want to
                move faster without sacrificing quality. We combine strategic content thinking,
                audience psychology, visual storytelling, and AI tools to produce consistent,
                platform-optimized creative assets. From ideation to execution and optimization, we
                build systems that keep your content engine strong and measurable.
              </p>
            </div>

            <div className="seo-about-visual">
              <img src={creativeAiAboutImage} alt="Creative AI marketing services by Socio Maverick" />
            </div>
          </div>
        </section>

        <section className="seo-approach-section">
          <div className="seo-approach-shell">
            <h2 className="seo-approach-heading">
              Our Creative AI Process Delivers <span>High-Performance Content</span>
            </h2>

            <div className="seo-approach-grid">
              {creativeAiApproachCards.map((card, index) => (
                <article
                  key={card.title}
                  className="seo-approach-card"
                  style={{ '--card-index': index }}
                >
                  <div className="seo-approach-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CreativeAiServiceFAQ />
      </main>
      <Footer />
    </>
  );
}
