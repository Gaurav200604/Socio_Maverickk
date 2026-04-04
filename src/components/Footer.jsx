import logo from '../assets/socio_mavrick.png';
import fbIcon from '../assetsocial/facebook.svg';
import igIcon from '../assetsocial/instagram.svg';
import liIcon from '../assetsocial/linkedin.svg';
import twIcon from '../assetsocial/twitter.svg';
import './Footer.css';

const services = [
  'Search Engine Optimization','Paid Advertisement','Digital PR and ORM',
  'A.I. and Content Marketing','Productions and Photography',
  'Website Design and Development','Social Media Marketing',
  'Event Management','E-Mail Marketing','E-Commerce Marketing',
  'Pay Per Click','Branding and Design',
];

const company = [
  { label: 'About Us',       href: '#' },
  { label: 'Why Choose Us?', href: '#why' },
  { label: 'Services',       href: '#services' },
  { label: 'Contact Us',     href: '/contact' },
  { label: 'Blogs',          href: '#' },
];

const socials = [
  { label: 'Instagram', href: '#', icon: igIcon },
  { label: 'LinkedIn',  href: '#', icon: liIcon },
  { label: 'Facebook',  href: '#', icon: fbIcon },
  { label: 'Twitter',   href: '#', icon: twIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="ft-footer">
      <div className="ft-grid">

        {/* col 1 — Brand */}
        <div className="ft-brand-col">
          <img src={logo} alt="Socio Maverick" className="ft-brand-logo" />
          <p className="ft-brand-tagline">
            Socio <span className="ft-brand-accent brand-name">Maverick</span> Pvt. Ltd.
          </p>
          <a href="/contact" className="ft-contact-btn">CONTACT US</a>
          <div className="ft-address-block">
            <p className="ft-address-label">OFFICE ADDRESS</p>
            <p className="ft-address-text">
              New Delhi, India — Remote Friendly<br />
              hello@sociomaverick.com<br />
              +91 89310 35612
            </p>
          </div>
          <div className="ft-follow-block">
            <p className="ft-follow-label">FOLLOW US ON</p>
            <div className="ft-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="ft-social" aria-label={s.label} data-hover>
                  <img src={s.icon} alt={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* col 2 — Company */}
        <div className="ft-col">
          <div className="ft-col-header">
            <span className="ft-col-icon">❖</span>
            <h4 className="ft-col-title">COMPANY</h4>
          </div>
          <ul className="ft-service-list">
            {company.map(c => (
              <li key={c.label}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* col 3 — Services */}
        <div className="ft-col">
          <div className="ft-col-header">
            <span className="ft-col-icon">❖</span>
            <h4 className="ft-col-title">SERVICES</h4>
          </div>
          <ul className="ft-service-list">
            {services.map(s => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* <div className="ft-bottom-bar">
        <p>All Rights Reserved — {new Date().getFullYear()}</p>
      </div> */}
    </footer>
  );
}
