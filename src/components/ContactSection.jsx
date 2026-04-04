import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const SERVICE_ID  = 'gaurvh3@gmail.com';
const TEMPLATE_ID = 'template_r3340w3';
const PUBLIC_KEY  = 'wp5rTp1v2yTMEqpZv';

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
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
        setForm({ name:'', email:'', phone:'', company:'', message:'' });
        setSending(false);
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => { setError('Failed to send. Please try again.'); setSending(false); });
  };

  return (
    <section className="cs-section">
      <div className="cs-inner">

        {/* left */}
        <div className="cs-left">
          <p className="cs-eyebrow">Maximise Your Business Growth With,</p>
          <h2 className="cs-title">
            India's Top<br />
            Digital Marketing<br />
            <span className="cs-accent">an Advertising Agency</span>
          </h2>
          <p className="cs-desc">
            Armed with data-driven strategies and a sharp creative mindset, we tackle the toughest
            challenges in digital marketing. Watch your brand grow while your competition wonders how.
          </p>
          <div className="cs-stats">
            <div className="cs-stat">
              <span className="cs-stat-num">150+</span>
              <span className="cs-stat-label">Clients Served</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat-num">3x</span>
              <span className="cs-stat-label">Avg. Growth Rate</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat-num">94%</span>
              <span className="cs-stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* right — white card form */}
        <div className="cs-card">
          <h3 className="cs-card-title">Ready to Grow? Let's Start With a Conversation.</h3>
          <p className="cs-card-sub">Growth is Closer Than You Think. Let's Talk.</p>
          <form className="cs-form" ref={formRef} onSubmit={submit}>
            {sent && <div className="cs-success">✅ Message sent! We'll be in touch soon.</div>}
            {error && <div className="cs-error">{error}</div>}
            <div className="cs-form-row">
              <input type="text" name="name" placeholder="Name*" required
                value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="email" name="email" placeholder="Email*" required
                value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="cs-form-row">
              <input type="tel" name="phone" placeholder="Phone No.*"
                value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              <input type="text" name="company" placeholder="Company / Brand Name"
                value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
            </div>
            <textarea name="message" placeholder="Message" rows={4} required
              value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            <button type="submit" className="cs-submit" disabled={sending}>
              {sending ? 'Sending...' : 'Request a Free Consultation'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
