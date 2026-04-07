import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '92px', background: '#ffffff' }}>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
