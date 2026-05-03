import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/events.png';

import './servicescomponentstyle.css';

const eventManagementFaq = [
  {
    label: 'Planning',
    items: [
      {
        q: 'What event formats do you manage?',
        a: 'We manage corporate events, product launches, community activations, conferences, and hybrid experiences with full planning support.',
      },
      {
        q: 'Do you help with event concept and theme creation?',
        a: 'Yes. We create event concepts, stage flow, messaging, and attendee journey design to match your campaign goals and brand voice.',
      },
      {
        q: 'Can you handle end-to-end event execution?',
        a: 'Yes. Our team handles planning, vendor coordination, production oversight, on-ground management, and post-event wrap-up.',
      },
    ],
  },
  {
    label: 'Execution',
    items: [
      {
        q: 'Do you provide venue and vendor management?',
        a: 'Yes. We coordinate venues, production vendors, branding setup, and technical teams to ensure smooth execution on event day.',
      },
      {
        q: 'Can you support event promotions too?',
        a: 'Yes. We can run pre-event promotions using social media, paid ads, and content to boost registrations and attendance quality.',
      },
      {
        q: 'How do you manage last-minute event changes?',
        a: 'We maintain contingency plans and a live command flow so schedule updates, speaker changes, or operational issues are handled quickly.',
      },
    ],
  },
  {
    label: 'Reporting & Pricing',
    items: [
      {
        q: 'Do you provide post-event reports?',
        a: 'Yes. We share reports with attendance insights, engagement highlights, content outcomes, and recommendations for future events.',
      },
      {
        q: 'How is event pricing structured?',
        a: 'Pricing is customized based on event scale, production complexity, deliverables, and promotion requirements.',
      },
      {
        q: 'How early should we start planning?',
        a: 'We recommend starting early for larger events, but we also support fast-turnaround projects with focused timelines.',
      },
    ],
  },
];

export default function EventManagementServicePage() {
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
              Event <span>Management</span>
            </h1>

            <p className="seo-hero-description">
              From planning to flawless execution, Socio Maverick delivers high-impact brand
              events that create memorable experiences, stronger engagement, and measurable
              business outcomes.
            </p>
          </div>
        </section>

        <ServiceFaq titleAccent="Event Management" categories={eventManagementFaq} />
      </main>
      <Footer />
    </>
  );
}
