import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../InfoPage.css';

export default function WebDesignServicePage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main">
        <section className="info-page-section">
          <p className="info-page-eyebrow">Service 05</p>
          <h1>Website Design & Development</h1>
          <p>This page is ready. You can add full Website Design and Development details here later.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
