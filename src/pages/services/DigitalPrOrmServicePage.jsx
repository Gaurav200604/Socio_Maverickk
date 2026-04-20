import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/1.png';

import './SeoServicePage.css';

const digitalPrOrmFaq = [
  {
    label: 'PR Strategy',
    items: [
      {
        q: 'How do you build a digital PR strategy?',
        a: 'We map your brand story, audience interests, and media opportunities to create a monthly PR plan focused on visibility, authority, and qualified reach.',
      },
      {
        q: 'Do you support founder and leadership positioning?',
        a: 'Yes. We develop thought-leadership angles, interview pitches, and expert commentary to help founders build trust in their category.',
      },
      {
        q: 'Can you manage campaign-led PR launches?',
        a: 'Yes. We support product launches, announcements, and milestone campaigns with creative narratives and media outreach execution.',
      },
    ],
  },
  {
    label: 'Online Reputation',
    items: [
      {
        q: 'What is included in ORM services?',
        a: 'Our ORM service covers brand mention monitoring, review response playbooks, sentiment analysis, and actions to strengthen positive search visibility.',
      },
      {
        q: 'Can you help when negative search results appear?',
        a: 'Yes. We create a recovery plan that promotes high-quality brand assets, strengthens authority pages, and improves the balance of search results.',
      },
      {
        q: 'Do you monitor social conversations too?',
        a: 'Yes. We track social mentions and public feedback to identify early reputation risks and respond with clear communication guidance.',
      },
    ],
  },
  {
    label: 'Reporting & Plans',
    items: [
      {
        q: 'How do you report PR and ORM performance?',
        a: 'You receive reports with media placements, sentiment trends, share of voice, branded search movement, and action plans for the next cycle.',
      },
      {
        q: 'Do you offer monthly retainers?',
        a: 'Yes. We offer flexible monthly retainers based on brand scale, reputation complexity, and outreach volume.',
      },
      {
        q: 'How quickly can we start?',
        a: 'After a discovery call and baseline audit, we can begin with strategy and first execution sprint in a short onboarding window.',
      },
    ],
  },
];

export default function DigitalPrOrmServicePage() {
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
              Digital PR & <span>ORM</span>
            </h1>

            <p className="seo-hero-description">
              Build a powerful brand narrative and protect your online reputation with strategic
              media outreach, authority building, and reputation management. Socio Maverick helps
              your business stay visible, trusted, and respected across search and social channels.
            </p>
          </div>
        </section>

        <ServiceFaq titleAccent="Digital PR & ORM" categories={digitalPrOrmFaq} />
      </main>
      <Footer />
    </>
  );
}
