import { useState } from 'react';
import logo from '../assets/socio_mavrick.png';
import './Footer.css';

const services1 = ['Social Media Management','Performance Marketing','Brand Identity & Design','Content Creation','SEO & Website Growth','Influencer Marketing'];
const services2 = ['Graphic Designing','Paid Media & Advertising','Email Marketing','Video Production','Funnels & Lead Generation','Marketing Automation'];
const about     = ['Our Work','Who We Are','Services','Case Studies','Blogs & News','Contact Us'];

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contact" className="ft-footer">

      {/* ── CTA band ── */}
      <div className="ft-cta-band">
        <div className="ft-cta-inner">
          <div className="ft-cta-left">
            <h2 className="ft-cta-title">Ready to grow<br />your brand?</h2>
            <p className="ft-cta-sub">Let's talk.</p>
            
          </div>
          <form className="ft-form" onSubmit={submit}>
            {sent && <div className="ft-success">We'll be in touch soon!</div>}
            <div className="ft-form-row">
              <input type="text" placeholder="Your Name" required value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email Address" required value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <textarea placeholder="Tell us about your project..." rows={4} required value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="ft-submit">
              Send Message
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── main grid ── */}
      <div className="ft-main">
        <div className="ft-brand">
          <img src={logo} alt="Socio Maverick" className="ft-logo" />
          <p className="ft-address">New Delhi, India — Remote Friendly</p>
          <p className="ft-copy-small">© {new Date().getFullYear()} Socio_Maverick. All Rights Reserved.</p>
          <div className="ft-contacts">
            <a href="tel:+919999999999" className="ft-contact-link">📞 +91 89310 35612</a>
            <a href="mailto:hello@sociomaverick.com" className="ft-contact-link">✉️ hello@sociomaverick.com</a>
          </div>
          <div className="ft-socials">
            {['FB','IG','IN','TW','YT'].map(s => (
              <a key={s} href="#" className="ft-social" aria-label={s} data-hover>{s}</a>
            ))}
          </div>
        </div>

        <div className="ft-col">
          <h4 className="ft-col-title">Our Services</h4>
          <ul>{services1.map(s => <li key={s}><a href="#services">{s}</a></li>)}</ul>
        </div>

        <div className="ft-col">
          <h4 className="ft-col-title">More Services</h4>
          <ul>{services2.map(s => <li key={s}><a href="#services">{s}</a></li>)}</ul>
        </div>

        <div className="ft-col">
          <h4 className="ft-col-title">About</h4>
          <ul>{about.map(s => <li key={s}><a href="#">{s}</a></li>)}</ul>
        </div>
      </div>

      {/* ── bottom bar ── */}
      <div className="ft-bottom">
        <div className="ft-legal">
          <span className="ft-legal-title">Legal</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Cancellation &amp; Refund</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <div className="ft-badges">
          <span className="ft-badge">Google Partner</span>
          <span className="ft-badge">Meta Business Partner</span>
          <span className="ft-badge">⭐ 4.9 Google Reviews</span>
        </div>
      </div>

    </footer>
  );
}
