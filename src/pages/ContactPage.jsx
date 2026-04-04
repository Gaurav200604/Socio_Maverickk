import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-page-main">
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
