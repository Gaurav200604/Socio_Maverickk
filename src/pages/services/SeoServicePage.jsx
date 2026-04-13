import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../InfoPage.css';

export default function SeoServicePage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main">
        <section className="info-page-section">
          <p className="info-page-eyebrow">Service 01</p>
          <h1>Search Engine Optimization (SEO)</h1>
          <p>This page is ready. You can add full SEO service details here later.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
