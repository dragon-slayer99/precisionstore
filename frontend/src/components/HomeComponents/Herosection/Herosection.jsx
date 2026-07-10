import "./Herosection.css";
import { Link } from "react-router-dom";

function HeroSection() {

  return (
    <section className="ecom-hero">
      <div className="structural-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="hero-metadata" id="heroTelemetry">
        NEW SEASON // FREE SHIPPING // LIMITED STOCK AVAILABLE
      </div>

      <div className="hero-content">
        <div className="brand-accent-tag">
          <div className="m-stripe"></div>
          <span className="tag-text">2026 PREMIUM COLLECTION</span>
        </div>

        <h1 className="hero-headline">
          ELEVATE YOUR
          <br />
          <span className="outline-text">EVERYDAY STYLE.</span>
        </h1>

        <p className="hero-description">
          Discover modern essentials crafted for comfort, performance, and
          timeless design. Explore curated collections built for everyday
          living.
        </p>

        <div className="hero-cta-group">
          <Link to='/products' className="btn-ghost-primary">
            SHOP NOW
          </Link>
          <Link to='/new-arrivals' className="btn-ghost-secondary">
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </div>

      <div className="hero-ticker-grid">
        <div className="ticker-item">
          <span className="ticker-label">01 / SHIPPING</span>
          <span className="ticker-value">FREE WORLDWIDE DELIVERY</span>
        </div>

        <div className="ticker-item">
          <span className="ticker-label">02 / QUALITY</span>
          <span className="ticker-value">PREMIUM MATERIALS</span>
        </div>

        <div className="ticker-item">
          <span className="ticker-label">03 / RETURNS</span>
          <span className="ticker-value">30-DAY EASY RETURNS</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
