import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InfoPage.css';

const serviceItems = [
  'Search Engine Optimization',
  'Paid Advertising',
  'Social Media Marketing',
  'Website Design and Development',
  'Digital PR and ORM',
  'Event Marketing',
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main">
        <section className="info-page-section">
          <p className="info-page-eyebrow">Services</p>
          <h1>Simple overview of what we offer</h1>
          <ul className="info-page-list">
            {serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
