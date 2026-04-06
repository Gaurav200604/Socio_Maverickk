import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InfoPage.css';

const sampleProjects = [
  {
    title: 'E-commerce Growth Campaign',
    summary: 'Scaled paid and organic traffic with a blended media and SEO strategy.',
  },
  {
    title: 'Local Service Lead Engine',
    summary: 'Improved lead quality and reduced CPL through landing-page optimization.',
  },
  {
    title: 'Brand Visibility Sprint',
    summary: 'Built awareness with social creatives, influencers, and performance media.',
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main">
        <section className="info-page-section">
          <p className="info-page-eyebrow">Our Work</p>
          <h1>Recent projects and outcomes</h1>
          <div className="info-page-grid">
            {sampleProjects.map((item) => (
              <article key={item.title} className="info-page-card">
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
