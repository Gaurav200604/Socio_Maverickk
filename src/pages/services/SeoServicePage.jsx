import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SeoServiceFAQ from '../../components/SeoServiceFAQ';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/1.png';
import seoAboutImage from '../../assetservice/2.png';

import './SeoServicePage.css';

const seoApproachCards = [
  {
    title: 'Data-Driven Results',
    description:
      'We harness data-driven insights to optimize marketing strategies, ensuring measurable outcomes and ROI. By leveraging data, we track campaign performance, identify trends, and make informed decisions to achieve client goals. This approach enables businesses to receive value for their marketing spending and facilitates the achievement of desired outcomes.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="12" width="44" height="30" rx="4" />
        <line x1="18" y1="42" x2="46" y2="42" />
        <line x1="32" y1="42" x2="32" y2="50" />
        <line x1="24" y1="50" x2="40" y2="50" />
        <line x1="20" y1="34" x2="20" y2="28" />
        <line x1="28" y1="34" x2="28" y2="24" />
        <line x1="36" y1="34" x2="36" y2="18" />
        <line x1="44" y1="34" x2="44" y2="22" />
        <circle cx="14" cy="14" r="7" />
        <path d="M14 10v4l3 2" />
      </svg>
    ),
  },
  {
    title: 'Transparent Reporting',
    description:
      'While our competitors use smoke and mirrors, we maintain full transparency so you can see first-hand how our efforts are increasing your online revenue. Our custom, in-depth reporting includes Google Analytics reports to give you a full overview of your site\'s SEO performance, regularly updated keyword rankings and a monthly breakdown of the SEO tasks we\'ve performed.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="10" width="44" height="34" rx="4" />
        <line x1="18" y1="18" x2="46" y2="18" />
        <line x1="18" y1="28" x2="18" y2="36" />
        <line x1="26" y1="24" x2="26" y2="36" />
        <line x1="34" y1="20" x2="34" y2="36" />
        <path d="M42 36v-7a7 7 0 1 1 7 7Z" />
        <line x1="26" y1="44" x2="38" y2="44" />
        <line x1="32" y1="44" x2="32" y2="52" />
      </svg>
    ),
  },
  {
    title: 'We Play Fair',
    description:
      'Our commitment to honesty and integrity guides every aspect of our work. We prioritize ethical practices, relying on white hat SEO techniques to achieve results. Unlike unethical strategies that may result in Google penalties, we maintain transparency and fairness in our approach. We adhere strictly to industry guidelines, safeguarding your business interests at all times.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <line x1="32" y1="10" x2="32" y2="48" />
        <line x1="14" y1="20" x2="50" y2="20" />
        <path d="M11 20l7 12H4Z" />
        <path d="M46 20l7 12H39Z" />
        <circle cx="32" cy="10" r="4" />
        <path d="M24 54h16" />
      </svg>
    ),
  },
  {
    title: 'Customized Strategies',
    description:
      'We understand that a "one-size-fits-all" approach doesn\'t deliver optimal results. We take the time to thoroughly understand your specific business goals, target audience, and competitive landscape. This in-depth understanding allows us to craft a personalized SEO strategy that aligns seamlessly with your overall marketing objectives.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="24" r="9" />
        <path d="M18 50a14 14 0 0 1 28 0" />
        <circle cx="12" cy="24" r="4" />
        <circle cx="52" cy="24" r="4" />
        <line x1="16" y1="24" x2="23" y2="24" />
        <line x1="41" y1="24" x2="48" y2="24" />
        <line x1="32" y1="33" x2="32" y2="41" />
      </svg>
    ),
  },
  {
    title: 'Dedicated SEO Professionals',
    description:
      'We believe our job is to make a technical, complicated and sometimes overwhelming search engine optimization process as simple as possible for our clients. One of the many ways we accomplish this is by providing each client with a single point of contact to manage your project. You get to know your Socio Maverick SEO professional well and they will get to know your business and understand your unique needs.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="10" width="48" height="36" rx="4" />
        <circle cx="32" cy="24" r="7" />
        <path d="M22 40a10 10 0 0 1 20 0" />
        <line x1="20" y1="52" x2="44" y2="52" />
      </svg>
    ),
  },
  {
    title: 'Cost-Effective Approach',
    description:
      'We provide high returns on investment without requiring substantial financial resources. This includes conducting thorough keyword research, optimizing on-page elements, creating quality content, and building a strong backlink profile. By focusing on these key areas, businesses can enhance their online presence and visibility while minimizing expenses.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 36h26a8 8 0 0 0 0-16H26" />
        <path d="M20 20h10" />
        <path d="M30 30h10" />
        <path d="M24 16v24" />
        <circle cx="48" cy="22" r="8" />
        <path d="M48 18v8" />
        <path d="M45 21h6" />
      </svg>
    ),
  },
];

export default function SeoServicePage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main seo-page-main">
        <section className="seo-hero-section">
          <div className="seo-hero-content">
            <img
              src={seoHeroImage}
              alt="Search Engine Optimization"
              className="seo-hero-image"
            />

            <h1 className="seo-hero-title">
              Search Engine <span>Optimization</span>
            </h1>

            <p className="seo-hero-description">
              Achieving a higher search engine ranking is key to increasing website traffic and
              generating leads. As one of the top SEO agencies in India, Socio Maverick ensures
              the increase in organic website traffic for all its clients.
            </p>
          </div>
        </section>

        <section className="seo-about-section">
          <div className="seo-about-content">
            <div className="seo-about-copy">
              <h2>
                Go Beyond SEO with
                <br />
                Socio <span>Maverick</span>
              </h2>

              <p>
                At Socio Maverick, we understand that in the digital age, achieving top-notch
                visibility on search engines is critical for business success. Our SEO services are
                meticulously designed to not only boost your online presence but also drive organic
                traffic and increase engagement. With our professional expertise and advanced
                strategies, we help your website rank higher on search engine results pages (SERPs)
                and maximize profitability.
              </p>
            </div>

            <div className="seo-about-visual">
              <img src={seoAboutImage} alt="SEO services by Socio Maverick" />
            </div>
          </div>
        </section>

        <section className="seo-approach-section">
          <div className="seo-approach-shell">
            <h2 className="seo-approach-heading">
              Our Data-Driven SEO Approach Drives <span>Measurable Results</span>
            </h2>

            <div className="seo-approach-grid">
              {seoApproachCards.map((card, index) => (
                <article
                  key={card.title}
                  className="seo-approach-card"
                  style={{ '--card-index': index }}
                >
                  <div className="seo-approach-icon">{card.icon}</div>
                  <h3 className={card.title === 'Dedicated SEO Professionals' ? 'seo-title-nowrap' : ''}>
                    {card.title}
                  </h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SeoServiceFAQ />
      </main>
      <Footer />
    </>
  );
}
