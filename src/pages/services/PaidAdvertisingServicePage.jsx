import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/ad.png';

import './SeoServicePage.css';

const paidAdvertisingFaq = [
  {
    label: 'Campaign Strategy',
    items: [
      {
        q: 'Which ad platforms do you manage?',
        a: 'We manage Google Ads, Meta Ads, LinkedIn campaigns, and selected platform mixes based on audience behavior and acquisition goals.',
      },
      {
        q: 'How do you choose the right campaign objective?',
        a: 'We align objectives with business outcomes, such as lead generation, purchases, app installs, or brand awareness, then design campaigns accordingly.',
      },
      {
        q: 'Can you build a media plan for our budget?',
        a: 'Yes. We create a channel and budget split plan based on funnel stage, expected performance, and growth priorities.',
      },
    ],
  },
  {
    label: 'Optimization',
    items: [
      {
        q: 'How often do you optimize campaigns?',
        a: 'We monitor and optimize campaigns continuously, including audience refinement, bidding adjustments, creative testing, and landing page feedback.',
      },
      {
        q: 'Do you run A/B testing for ads?',
        a: 'Yes. We test headlines, visuals, offers, CTAs, and audience segments to improve conversion rates and reduce cost per result.',
      },
      {
        q: 'Can you improve underperforming ad accounts?',
        a: 'Yes. We audit account structure, tracking setup, creative quality, and targeting to build a practical recovery and scaling plan.',
      },
    ],
  },
  {
    label: 'Tracking & Pricing',
    items: [
      {
        q: 'Do you set up conversion tracking?',
        a: 'Yes. We set up and validate conversion tracking so campaign decisions are based on accurate data, not assumptions.',
      },
      {
        q: 'What reporting will we get?',
        a: 'You receive clear reports on spend, ROAS, CPA, lead quality signals, winning creatives, and next optimization actions.',
      },
      {
        q: 'Do you offer monthly management plans?',
        a: 'Yes. We offer monthly paid media management plans tailored to your ad budget, funnel complexity, and growth targets.',
      },
    ],
  },
];
export default function PaidAdvertisingServicePage() {
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
              Paid <span>Advertising</span>
            </h1>

            <p className="seo-hero-description">
              Scale faster with data-driven paid campaigns built for high-intent reach, qualified
              leads, and stronger return on ad spend. Socio Maverick designs, launches, and
              optimizes ads that convert.
            </p>
          </div>
        </section>

        <ServiceFaq titleAccent="Paid Advertising" categories={paidAdvertisingFaq} />
      </main>
      <Footer />
    </>
  );
}
