import './Clients.css';
import miranda from '../assetcompany/Miranda_House__1_-removebg-preview.png';
import kmc     from '../assetcompany/kmclogo.png';
import rajat   from '../assetcompany/Rajat_Caters-removebg-previewNEW.png';
import bttpl   from '../assetcompany/Beamer_Trades_and_Technologies__1_-removebg-preview.png';
import nextias from '../assetcompany/nxtias-removebg-preview.png';
import chem    from '../assetcompany/chem academy.webp';
import extra   from '../assetcompany/377551757_702749201872063_6254657345124592206_n.jpg.jpeg';

const row1 = [miranda, kmc, rajat, bttpl, nextias, chem, extra];
const row2 = [bttpl, nextias, chem, extra, miranda, kmc, rajat];

function MarqueeRow({ items, direction }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`marquee-row ${direction}`}>
      <div className="marquee-track">
        {repeated.map((src, i) => (
          <div key={i} className="m-logo-wrap" data-hover>
            <div className="m-logo-card">
              <img
                src={src}
                alt={`client-${i}`}
                className={`m-logo-img ${src === nextias || src === bttpl ? 'm-logo-large' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="clients-section">
      <h2 className="clients-title">OUR <span>CLIENTS</span></h2>
      <p className="clients-subtitle">Brands that trust Socio_Maverick</p>

      <div className="clients-body">
        <MarqueeRow items={row1} direction="go-left" />
        <MarqueeRow items={row2} direction="go-right" />
      </div>

      <div className="fade-l" />
      <div className="fade-r" />
    </section>
  );
}
