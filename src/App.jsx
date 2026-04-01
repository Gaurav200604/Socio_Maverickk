import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import ScrollQuote from './components/ScrollQuote';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <div className="hero-sticky-wrapper">
        <Hero />
      </div>
      <div className="content-over">
        <div id="services">
          <Services />
        </div>
<Clients />
        <WhyUs />
        
        <ScrollQuote />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
