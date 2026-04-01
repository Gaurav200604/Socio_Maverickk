import './Clients.css';

// Top row — smaller, varied weights (like the screenshot top row)
const row1 = [
  { name: 'Glow & Lovely',  cls: 'sz-sm  wt-light  it-yes' },
  { name: 'SHORT STORY',    cls: 'sz-md  wt-bold' },
  { name: 'FeviCreate',     cls: 'sz-sm  wt-semibold' },
  { name: 'Cordelia',       cls: 'sz-sm  wt-light  sp-wide' },
  { name: 'Date Crown',     cls: 'sz-sm  wt-normal' },
  { name: 'DHAMPUR',        cls: 'sz-md  wt-bold   sp-wide' },
  { name: 'Mia',            cls: 'sz-sm  wt-light  it-yes' },
  { name: 'Dr. FIXIT',      cls: 'sz-sm  wt-bold' },
  { name: 'prime video',    cls: 'sz-sm  wt-light  sp-wide' },
  { name: 'Xiaomi',         cls: 'sz-sm  wt-normal' },
  { name: 'Tanishq',        cls: 'sz-sm  wt-semibold it-yes' },
  { name: 'The Change',     cls: 'sz-sm  wt-light' },
];

// Bottom row — bigger, heavier (like the screenshot bottom row)
const row2 = [
  { name: 'GARNIER',        cls: 'sz-xl  wt-bold   it-yes' },
  { name: 'BBLUNT',         cls: 'sz-xxl wt-black' },
  { name: 'bodycraft',      cls: 'sz-lg  wt-light  sp-wide' },
  { name: 'BRITANNIA',      cls: 'sz-xl  wt-black  sp-wide' },
  { name: 'Cipla',          cls: 'sz-xl  wt-bold' },
  { name: 'Mamaearth',      cls: 'sz-lg  wt-semibold' },
  { name: 'boAt',           cls: 'sz-xl  wt-black' },
  { name: 'Nykaa',          cls: 'sz-lg  wt-bold   it-yes' },
  { name: 'Zomato',         cls: 'sz-xl  wt-bold' },
];

const headingWords = [
  { text: 'Brands', accent: false },
  { text: 'that',   accent: false },
  { text: 'trust',  accent: false },
  { text: 'Socio_Maverick', accent: true },
];

function MarqueeRow({ items, direction }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-row ${direction}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={`m-item ${item.cls}`}>
            {item.name}
            <span className="m-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <span className="clients-tag"></span>
        <h2 className="clients-heading">
          {headingWords.map((w, i) => (
            <span key={i} className={`h-word ${w.accent ? 'h-accent' : ''}`}>
              {w.text}
            </span>
          ))}
        </h2>
      </div>

      <div className="clients-body">
        <MarqueeRow items={row1} direction="go-left" />
        <MarqueeRow items={row2} direction="go-right" />
      </div>

      <div className="fade-l" />
      <div className="fade-r" />
    </section>
  );
}
