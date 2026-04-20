import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/1.png';

import './SeoServicePage.css';

const webDesignFaq = [
  {
    label: 'Design & UX',
    items: [
      {
        q: 'Do you design websites from scratch?',
        a: 'Yes. We design custom website experiences based on your brand, audience behavior, and conversion goals.',
      },
      {
        q: 'Will the website be mobile responsive?',
        a: 'Yes. Every website we deliver is responsive and optimized for mobile, tablet, and desktop experiences.',
      },
      {
        q: 'Can you redesign our existing website?',
        a: 'Yes. We audit your current website and redesign it for better visual quality, usability, and conversion performance.',
      },
    ],
  },
  {
    label: 'Development',
    items: [
      {
        q: 'Do you handle both design and development?',
        a: 'Yes. We handle complete delivery, including UI design, front-end development, and essential integrations.',
      },
      {
        q: 'Can you build SEO-friendly pages?',
        a: 'Yes. We implement clean structure, performance best practices, and on-page SEO foundations during development.',
      },
      {
        q: 'Can you add forms, tracking, and analytics?',
        a: 'Yes. We set up lead forms, tracking pixels, analytics tools, and event tracking for performance visibility.',
      },
    ],
  },
  {
    label: 'Timeline & Support',
    items: [
      {
        q: 'How long does website development take?',
        a: 'Timeline depends on site size and features, but we deliver through planned milestones with transparent review stages.',
      },
      {
        q: 'Do you provide post-launch support?',
        a: 'Yes. We provide support for updates, bug fixes, and performance improvements after launch.',
      },
      {
        q: 'Do you offer ongoing website maintenance?',
        a: 'Yes. We offer monthly maintenance plans for content updates, technical checks, and continuous optimization.',
      },
    ],
  },
];

export default function WebDesignServicePage() {
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
              Website Design & <span>Development</span>
            </h1>

            <p className="seo-hero-description">
              Build a website that looks exceptional and performs with purpose. Socio Maverick
              creates modern, responsive websites designed for better user experience, stronger
              brand presence, and higher conversion potential.
            </p>
          </div>
        </section>

        <ServiceFaq titleAccent="Web Design" categories={webDesignFaq} />
      </main>
      <Footer />
    </>
  );
}
