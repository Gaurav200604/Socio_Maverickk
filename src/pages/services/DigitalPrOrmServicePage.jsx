import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceFaq from '../../components/ServiceFaq';
import { useState, useEffect } from 'react';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/digital.png';
import './servicescomponentstyle.css';
import '../../components/WhyUs.css';

const ormWhySlides = [
  {
    title: 'Proactive, Not Reactive',
    desc:
      "We don't wait for reputation crises — we build such a strong positive presence that negative content struggles to surface.",
  },
  {
    title: 'SEO + PR + Content — Fully Integrated',
    desc:
      'Our ORM is powered by three disciplines working in concert — not a single-tactic approach that leaves gaps.',
  },
  {
    title: 'Youth Brand Reputation Specialists',
    desc:
      'We understand how younger audiences discover, discuss, and judge brands — and build strategies for the platforms they use.',
  },
  {
    title: 'Founder & Leadership Reputation',
    desc:
      'We protect and build the online presence of founders and leaders — because people trust people before companies.',
  },
  {
    title: 'Transparent and Ethical Practices',
    desc:
      'We never use fake reviews, black-hat tactics, or misleading content. Everything we build is sustainable and Google-proof.',
  },
];

const digitalPrOrmFaq = [
  {
    label: 'PR Strategy',
    items: [
      {
        q: 'How do you build a digital PR strategy?',
        a: 'We map your brand story, audience interests, and media opportunities to create a monthly PR plan focused on visibility, authority, and qualified reach.',
      },
      {
        q: 'Do you support founder and leadership positioning?',
        a: 'Yes. We develop thought-leadership angles, interview pitches, and expert commentary to help founders build trust in their category.',
      },
      {
        q: 'Can you manage campaign-led PR launches?',
        a: 'Yes. We support product launches, announcements, and milestone campaigns with creative narratives and media outreach execution.',
      },
    ],
  },
  {
    label: 'Online Reputation',
    items: [
      {
        q: 'What is included in ORM services?',
        a: 'Our ORM service covers brand mention monitoring, review response playbooks, sentiment analysis, and actions to strengthen positive search visibility.',
      },
      {
        q: 'Can you help when negative search results appear?',
        a: 'Yes. We create a recovery plan that promotes high-quality brand assets, strengthens authority pages, and improves the balance of search results.',
      },
      {
        q: 'Do you monitor social conversations too?',
        a: 'Yes. We track social mentions and public feedback to identify early reputation risks and respond with clear communication guidance.',
      },
    ],
  },
  {
    label: 'Reporting & Plans',
    items: [
      {
        q: 'How do you report PR and ORM performance?',
        a: 'You receive reports with media placements, sentiment trends, share of voice, branded search movement, and action plans for the next cycle.',
      },
      {
        q: 'Do you offer monthly retainers?',
        a: 'Yes. We offer flexible monthly retainers based on brand scale, reputation complexity, and outreach volume.',
      },
      {
        q: 'How quickly can we start?',
        a: 'After a discovery call and baseline audit, we can begin with strategy and first execution sprint in a short onboarding window.',
      },
    ],
  },
];

export default function DigitalPrOrmServicePage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent(c => (c + 1) % ormWhySlides.length);
        setAnimating(true);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = ormWhySlides[current];

  return (
    <>
      <Navbar />
      <main className="info-page-main seo-page-main digital-pr-orm-page">
        <section className="seo-hero-section">
          <div className="seo-hero-content">
            <img src={seoHeroImage} alt="Online Reputation Management" className="seo-hero-image" />

            <h1 className="seo-hero-title">Online Reputation Management <span>ORM</span></h1>

            <p className="seo-hero-description">
              SocioMaverick's ORM services monitor, protect, and build your brand's online reputation across Google, social media, and review platforms. 
              Control the narrative before someone else does.    </p>
          </div>
        </section>

        <section className="seo-about-section orm-about">
          <div className="seo-about-content">
            <div className="seo-about-copy">
              <h2>What Does Google Say About You When You're Not in the Room?</h2>

              <p>
                Before a prospect books your service, before an investor meets your team, before a
                journalist writes their first word about your brand — they Google you. In that
                moment, the results on page one of Google are your reputation.
              </p>

              <p>
                In an era where a single negative review or viral post can reach millions in hours,
                Online Reputation Management is critical. SocioMaverick's ORM team combines Digital PR,
                SEO, and crisis communications to ensure what the world sees reflects the truth —
                your values, your quality, your story — not the noise.
              </p>
            </div>

            <div className="seo-about-visual">
              <img src={seoHeroImage} alt="ORM by SocioMaverick" />
            </div>
          </div>
        </section>

        <section className="seo-approach-section orm-services">
          <div className="seo-approach-shell">
            <h2 className="seo-approach-heading">Our Online Reputation Management Services</h2>

            <div className="seo-approach-grid">
              <article className="seo-approach-card">
                <h3>Reputation Audit & Risk Assessment</h3>
                <p>
                  We audit your current online reputation — mapping mentions, reviews, articles, and
                  search results. We identify risks and opportunities to bridge how you're seen vs how you want to be seen.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Positive Content Creation & SERP Ownership</h3>
                <p>
                  We flood page one of Google with high-authority, positive content about your brand.
                  Brand-owned content, earned media, social profiles, and directory listings that own your search.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Review Management & Response Strategy</h3>
                <p>
                  We monitor every review platform, craft professional responses to negative reviews, develop strategies 
                  to encourage positive reviews, and build trust with every prospect.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Crisis Communications & Rapid Response</h3>
                <p>
                  When crisis hits, the first 48 hours matter. We provide rapid-response strategy, key messaging, stakeholder 
                  communications, and media management to minimize damage.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Social Media Reputation Monitoring</h3>
                <p>
                  Real-time monitoring across platforms. We track every mention of your brand, executives, and products 
                  so you know instantly when something significant happens.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Negative Content Suppression & Removal</h3>
                <p>
                  We pursue legal and editorial routes for removal of defamatory content. When removal isn't possible, we use 
                  SEO and content strategies to suppress unfavourable results off page one.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Personal Brand & Executive Reputation Management</h3>
                <p>
                A company's reputation is often tied to its founders and leaders. We manage the online presence of founders, CEOs, and senior executives — building a positive, authoritative digital footprint through 
                LinkedIn optimisation, thought leadership content, media placements, and Wikipedia-level brand assets.
                </p>
              </article>

              <article className="seo-approach-card">
                <h3>Continuous Monitoring & Monthly Reporting</h3>
                <p>
                Reputation is not a one-time project — it's an ongoing discipline. We provide continuous monitoring, real-time alerts, and monthly reputation health reports that track 
                sentiment trends, review scores, search result positions, and the overall trajectory of your brand's online perception. </p>
              </article>
              
            </div>
          </div>
        </section>

        <section className="orm-process-section">
          <div className="orm-process-shell">
            <h2 className="seo-approach-heading">Our ORM Process — From Assessment to Authority</h2>

            <div className="orm-process-grid">
              <article className="orm-process-item">
               
                <h3>Reputation Audit</h3>
                <p>Full mapping of your current online presence — reviews, search results, social mentions, news coverage, and forum discussions.</p>
              </article>

              <article className="orm-process-item">
               
                <h3>Risk Scoring & Priority Matrix</h3>
                <p>We categorise reputational risks by severity and urgency to build a clear action plan.</p>
              </article>

              <article className="orm-process-item">
               
                <h3>Positive Content Infrastructure</h3>
                <p>We build web properties, content assets, and earned media placements to own branded search.</p>
              </article>

              <article className="orm-process-item">
            
                <h3>Negative Content Strategy</h3>
                <p>Removal requests, suppression campaigns, and counter-narrative content deployed against specific threats.</p>
              </article>

              <article className="orm-process-item">
               
                <h3>Review Platform Management</h3>
                <p>Response frameworks and review generation campaigns across every review touchpoint.</p>
              </article>

              <article className="orm-process-item">
                
                <h3>Ongoing Monitoring & Rapid Response</h3>
                <p>24/7 brand monitoring with defined escalation protocols for crisis situations.</p>
              </article>

              {/* <article className="orm-process-item">
                <div className="orm-icon">✓</div>
                <h3>Monthly Reputation Health Report</h3>
                <p>Sentiment score, search result map, review dashboard, and strategic recommendations every month.</p>
              </article> */}
            </div>
          </div>
        </section>

        <section id="why" className="ws-section">
          <div className="ws-header">
            <h2 className="ws-header-title">Why <span className="ws-header-accent">SocioMaverick</span> ORM Is Different</h2>
            <p className="ws-header-sub">We combine PR, SEO and crisis response to protect and grow your brand.</p>
          </div>

          <div className={`ws-inner ${animating ? 'ws-in' : 'ws-out'}`}>
            <div className="ws-text">
              <h2 className="ws-title">{slide.title}</h2>
              <p className="ws-desc">{slide.desc}</p>

              <div className="ws-progress">
                <div className="ws-progress-bar" key={current} />
              </div>

              <div className="ws-dots">
                {ormWhySlides.map((_, i) => (
                  <button
                    key={i}
                    className={`ws-dot ${i === current ? 'active' : ''}`}
                    onClick={() => { setAnimating(false); setTimeout(() => { setCurrent(i); setAnimating(true); }, 300); }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceFaq titleAccent="Digital PR & ORM" categories={digitalPrOrmFaq} />
      </main>
      <Footer />
    </>
  );
}
