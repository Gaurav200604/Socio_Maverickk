import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from '../assets/socio_mavrick.png';
import fbIcon from '../assetsocial/facebook.svg';
import igIcon from '../assetsocial/instagram.svg';
import liIcon from '../assetsocial/linkedin.svg';
import twIcon from '../assetsocial/twitter.svg';
import './Footer.css';

const SERVICE_ID  = 'gaurvh3@gmail.com';
const TEMPLATE_ID = 'template_r3340w3';
const PUBLIC_KEY  = 'wp5rTp1v2yTMEqpZv';

const services1 = ['Social Media Management','Performance Marketing','Brand Identity & Design','Content Creation','SEO & Website Growth','Influencer Marketing'];
const services2 = ['Graphic Designing','Paid Media & Advertising','Email Marketing','Video Production','Funnels & Lead Generation','Marketing Automation'];
const about     = ['Our Work','Who We Are','Services','Case Studies','Blogs & News','Contact Us'];

const socials = [
  { label: 'Facebook',  href: '#', icon: fbIcon },
  { label: 'Instagram', href: '#', icon: igIcon },
  { label: 'LinkedIn',  href: '#', icon: liIcon },
  { label: 'Twitter',   href: '#', icon: twIcon },
];

export default function Footer() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setSending(false);
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setError('Failed to send. Please try again.');
        setSending(false);
      });
  };

  return (
    <footer id="contact" className="ft-footer">

      {/* ── CTA band ── */}
      <div className="ft-cta-band">
        <div className="ft-cta-inner">

          {/* left — dark side */}
          <div className="ft-cta-left">
            <p className="ft-cta-eyebrow">Maximise Your Business Growth With,</p>
            <h2 className="ft-cta-title">
              India's Top<br />
              Digital Marketing<br />
              <span className="ft-cta-accent">Agency</span>
            </h2>
            <p className="ft-cta-desc">
              Armed with data-driven strategies and a sharp creative mindset, we tackle the toughest
              challenges in digital marketing. Watch your brand grow while your competition wonders how.
            </p>
            <div className="ft-cta-stats">
              <div className="ft-stat">
                <span className="ft-stat-num">150+</span>
                <span className="ft-stat-label">Clients Served</span>
              </div>
              <div className="ft-stat">
                <span className="ft-stat-num">3x</span>
                <span className="ft-stat-label">Avg. Growth Rate</span>
              </div>
              <div className="ft-stat">
                <span className="ft-stat-num">98%</span>
                <span className="ft-stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* right — white card form */}
          <div className="ft-cta-card">
            <h3 className="ft-card-title">Ready to Grow? Let's Start With a Conversation.</h3>
            <p className="ft-card-sub">Growth is Closer Than You Think. Let's Talk.</p>
            <form className="ft-form" ref={formRef} onSubmit={submit}>
              {sent && <div className="ft-success">✅ Message sent! We'll be in touch soon.</div>}
              {error && <div className="ft-error">{error}</div>}
              <div className="ft-form-row">
                <input type="text" name="name" placeholder="Name*" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input type="email" name="email" placeholder="Email*" required
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="ft-form-row">
                <input type="tel" name="phone" placeholder="Phone No.*"
                  value={form.phone || ''} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <input type="text" name="company" placeholder="Company / Brand Name"
                  value={form.company || ''} onChange={e => setForm({ ...form, company: e.target.value })} />
              </div>
              <textarea name="message" placeholder="Message" rows={4} required
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="ft-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Request a Free Consultation'}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── main grid ── */}
      <div className="ft-main">
        <div className="ft-brand">
          <img src={logo} alt="Socio Maverick" className="ft-logo" />
          <p className="ft-brand-name">Socio<span>_Maverick</span></p>
          <p className="ft-address">New Delhi, India — Remote Friendly</p>
          <p className="ft-copy-small">© {new Date().getFullYear()} Socio_Maverick. All Rights Reserved.</p>
          <div className="ft-contacts">
            <a href="tel:+919999999999" className="ft-contact-link">📞 +91 89310 35612</a>
            <a href="mailto:hello@sociomaverick.com" className="ft-contact-link">✉️ hello@sociomaverick.com</a>
          </div>
          <div className="ft-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="ft-social" aria-label={s.label} data-hover>
                <img src={s.icon} alt={s.label} />
              </a>
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
        {/* <div className="ft-badges">
          <span className="ft-badge">Google Partner</span>
          <span className="ft-badge">Meta Business Partner</span>
          <span className="ft-badge">⭐ 4.9 Google Reviews</span>
        </div> */}
      </div>

    </footer>
  );
}
