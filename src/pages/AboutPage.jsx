import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InfoPage.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main">
        <section className="info-page-section">
          <p className="info-page-eyebrow">About Us</p>
          <h1>Helping brands grow with clear digital strategy</h1>
          <p>
            We are a performance-first marketing team focused on practical, measurable growth.
            Our work combines strategy, content, media, and optimization to move business goals.
          </p>
          <p>
            This is placeholder page content and can be replaced anytime with your final About copy.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
