import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../InfoPage.css';
import seoHeroImage from '../../assetservice/1.png';
import seoAboutImage from '../../assetservice/2.png';

import './SeoServicePage.css';

export default function SeoServicePage() {
  return (
    <>
      <Navbar />
      <main className="info-page-main seo-page-main">
        <section className="seo-hero-section">
          <div className="seo-hero-content">
            <img
              src={seoHeroImage}
              alt="Search Engine Optimization"
              className="seo-hero-image"
            />

            <h1 className="seo-hero-title">
              Search Engine <span>Optimization</span>
            </h1>

            <p className="seo-hero-description">
              Achieving a higher search engine ranking is key to increasing website traffic and
              generating leads. As one of the top SEO agencies in India, Socio Maverick ensures
              the increase in organic website traffic for all its clients.
            </p>
          </div>
        </section>

        <section className="seo-about-section">
          <div className="seo-about-content">
            <div className="seo-about-copy">
              <h2>
                Go Beyond SEO with
                <br />
                Socio <span>Maverick</span>
              </h2>

              <p>
                At Socio Maverick, we understand that in the digital age, achieving top-notch
                visibility on search engines is critical for business success. Our SEO services are
                meticulously designed to not only boost your online presence but also drive organic
                traffic and increase engagement. With our professional expertise and advanced
                strategies, we help your website rank higher on search engine results pages (SERPs)
                and maximize profitability.
              </p>
            </div>

            <div className="seo-about-visual">
              <img src={seoAboutImage} alt="SEO services by Socio Maverick" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
