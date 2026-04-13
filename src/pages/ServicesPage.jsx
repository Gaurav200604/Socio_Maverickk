import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="services-page-main">
        <Services />
      </main>
      <Footer />
    </>
  );
}
