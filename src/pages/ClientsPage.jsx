import Navbar from '../components/Navbar';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '92px', background: '#ffffff' }}>
        <Clients />
      </main>
      <Footer />
    </>
  );
}
