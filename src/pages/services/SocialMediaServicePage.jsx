import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/social.png';

import './servicescomponentstyle.css';

const socialMediaFaq = [
  {
    label: 'Strategy',
    items: [
      {
        q: 'How do you build a social media strategy?',
        a: 'We map your audience, content pillars, posting cadence, and platform priorities to create a strategy tied to brand and business goals.',
      },
      {
        q: 'Which platforms do you manage?',
        a: 'We manage key channels such as Instagram, LinkedIn, Facebook, YouTube, and others based on where your audience is most active.',
      },
      {
        q: 'Do you plan monthly content calendars?',
        a: 'Yes. We build monthly calendars with content themes, creative direction, captions, and campaign moments for consistent execution.',
      },
    ],
  },
  {
    label: 'Content & Community',
    items: [
      {
        q: 'Do you create post designs and reels?',
        a: 'Yes. We produce static creatives, carousel content, reels concepts, and short-form assets aligned with your brand style.',
      },
      {
        q: 'Can you manage comments and messages?',
        a: 'Yes. We support community management workflows for timely engagement, moderation, and better audience relationships.',
      },
      {
        q: 'Do you support campaign-based social pushes?',
        a: 'Yes. We plan and execute launch campaigns, seasonal pushes, and collaboration-focused social campaigns.',
      },
    ],
  },
  {
    label: 'Reporting & Plans',
    items: [
      {
        q: 'How do you track social media performance?',
        a: 'We track reach, engagement, saves, shares, follower quality, website actions, and content trends to refine your strategy.',
      },
      {
        q: 'Do you provide monthly reports?',
        a: 'Yes. You receive monthly reports with wins, learnings, growth metrics, and the next content-action plan.',
      },
      {
        q: 'Do you offer monthly social media retainers?',
        a: 'Yes. We provide flexible monthly retainers based on channels, content volume, and campaign support requirements.',
      },
    ],
  },
];

export default function SocialMediaServicePage() {
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
              Social Media <span>Marketing</span>
            </h1>

            <p className="seo-hero-description">
              Grow your brand with social strategies that build engagement, community trust, and
              consistent visibility. Socio Maverick helps you turn social presence into measurable
              marketing impact.
            </p>
          </div>
        </section>

        <ServiceFaq titleAccent="Social Media" categories={socialMediaFaq} />
      </main>
      <Footer />
    </>
  );
}
