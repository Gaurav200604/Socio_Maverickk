import { useState, useEffect } from 'react';
import logo from '../assets/socio_mavrick.png';
import './Navbar.css';

const words = ['Media', 'Production', 'Brands', 'Tech IT'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const navLinks = ['Home', 'Why Us', 'Services', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <img src={logo} alt="Socio Maverick" className="nav-logo-img" />
          <span className={`nav-logo-word ${visible ? 'word-in' : 'word-out'}`}>
            <span className="nav-logo-dot">.</span>{words[wordIndex]}
          </span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() =>
                  scrollTo(link.toLowerCase().replace(' ', '-').replace('why us', 'why'))
                }
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button className="nav-cta" onClick={() => scrollTo('contact')}>
              Get Started
            </button>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
