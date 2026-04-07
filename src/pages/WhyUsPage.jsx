import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '92px', background: '#ffffff' }}>
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
