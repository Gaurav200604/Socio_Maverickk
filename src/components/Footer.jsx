import logo from '../assets/socio_mavrick.png';
import fbIcon from '../assetsocial/facebook.svg';
import igIcon from '../assetsocial/instagram.svg';
import liIcon from '../assetsocial/linkedin.svg';
import twIcon from '../assetsocial/twitter.svg';
import './Footer.css';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Why Choose Us?', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blogs', href: '/work' },
];

const services = [
  'Search Engine Optimization',
  'Paid Advertisement',
  'Digital PR and ORM',
  'A.I. and Content Marketing',
  'Productions and Photography',
  'Website Design and Development',
  'Social Media Marketing',
  'Event Management',
  'E-Mail Marketing',
  'E-Commerce Marketing',
  'Pay Per Click',
  'Branding and Design',
  'Careers',
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sociomaverick?igsh=MWJqbGdpa2g3bGt1YQ==',
    icon: igIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sociomaverick',
    icon: liIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1du8FWywBZ/?mibextid=wwXIfr',
    icon: fbIcon,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/sociomaverick?s=21&t=zeDGUXgHi6VJUXfNvbYunA',
    icon: twIcon,
  },
];

const Footer = ({ fullPage = false }) => {
  return (
    <footer id="contact" className={`footer${fullPage ? ' footer--fullpage' : ''}`}>
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Socio Maverick" className="footer-logo-img" />
          </div>

          <h2 className="footer-brand-name">
            Socio <span className="brand-highlight">Maverick</span> Pvt. Ltd.
          </h2>

          <a href="/contact" className="footer-cta-btn">CONTACT US</a>

          <div className="footer-address">
            <p className="address-label">OFFICE ADDRESS</p>
            <p className="address-text">
              2nd Floor, Property No. 44, Regal Building,<br />
              Connaught Place., New Delhi, Delhi 110001, IN
            </p>
            <a href="mailto:hello@sociomaverick.com" className="footer-link">hello@sociomaverick.com</a>
            <a href="tel:+918931035612" className="footer-link">+91 9311901949</a>
          </div>

          <div className="footer-social">
            <p className="social-label">FOLLOW US ON</p>
            <div className="social-icons">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="social-icon"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-nav-col">
          <h3 className="footer-col-title">
            <span className="col-title-icon">❖</span> COMPANY
          </h3>
          <ul className="footer-nav-list">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="footer-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-divider" />

        <div className="footer-nav-col">
          <h3 className="footer-col-title">
            <span className="col-title-icon">❖</span> SERVICES
          </h3>
          <ul className="footer-nav-list">
            {services.map((service) => (
              <li key={service}>
                <a href="/services" className="footer-nav-link">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved © {new Date().getFullYear()} Socio Maverick Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
