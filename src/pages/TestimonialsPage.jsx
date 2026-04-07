import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '92px', background: '#ffffff' }}>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
