import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/product.png';

import './SeoServicePage.css';

const productionPhotographyFaq = [
  {
    label: 'Production Scope',
    items: [
      {
        q: 'What kind of production services do you offer?',
        a: 'We offer brand films, ad shoots, social media content production, product photography, and campaign visuals for digital channels.',
      },
      {
        q: 'Do you handle both photo and video production?',
        a: 'Yes. We manage both photo and video deliverables, including concepting, shoot planning, production, and final editing.',
      },
      {
        q: 'Can you create content for e-commerce and catalogs?',
        a: 'Yes. We produce clean product shots, lifestyle imagery, and commerce-ready assets optimized for marketplaces and brand websites.',
      },
    ],
  },
  {
    label: 'Process',
    items: [
      {
        q: 'Do you provide scripting and shot planning?',
        a: 'Yes. We build creative briefs, scripts, moodboards, and shot lists so every production day is efficient and goal-focused.',
      },
      {
        q: 'Can your team shoot on location?',
        a: 'Yes. We support studio and on-location shoots depending on your campaign requirements, timeline, and production scale.',
      },
      {
        q: 'Do you include post-production editing?',
        a: 'Yes. We provide editing, color grading, retouching, format adaptation, and final delivery for platform-specific usage.',
      },
    ],
  },
  {
    label: 'Timelines & Plans',
    items: [
      {
        q: 'How long does a typical production cycle take?',
        a: 'Timelines depend on complexity, but most projects move through pre-production, shoot, and post-production in planned stages.',
      },
      {
        q: 'Can we book recurring monthly content shoots?',
        a: 'Yes. We offer recurring production plans for brands that need a steady pipeline of campaign and social content.',
      },
      {
        q: 'How is pricing decided?',
        a: 'Pricing is based on shoot duration, crew size, location needs, equipment requirements, and post-production scope.',
      },
    ],
  },
];

export default function ProductionPhotographyServicePage() {
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
              Production & <span>Photography</span>
            </h1>

            <p className="seo-hero-description">
              Turn ideas into high-quality visual assets with strategic production and photography.
              Socio Maverick creates brand visuals that strengthen storytelling, improve campaign
              quality, and drive better engagement.
            </p>
          </div>
        </section>

        <ServiceFaq titleAccent="Production & Photography" categories={productionPhotographyFaq} />
      </main>
      <Footer />
    </>
  );
}
