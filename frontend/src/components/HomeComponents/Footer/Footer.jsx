import "./Footer.css";

function Footer() {
  return (
    <footer className="ecom-footer">
      <div className="footer-grid-top"></div>

      <div className="footer-container">
        <div className="footer-main-grid">
          <div className="footer-column brand-info">
            <div className="footer-brand-tag">
              <div className="m-stripe"></div>
              <span className="brand-text">PRECISION LABS</span>
            </div>
            <p className="footer-intel">
              HIGH-OUTPUT HARDWARE AND MODULAR CARRY SYSTEMS ARCHITECTURED FOR
              UNCOMPROMISING GEOMETRY.
            </p>
            <div className="system-telemetry">
              SYS_NODE: REG_09 // PLATFORM_STATUS: ACTIVE
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">COLLECTIONS</h3>
            <ul className="footer-links">
              <li>
                <a href="#">ALL EQUIPMENT</a>
              </li>
              <li>
                <a href="#">CARBON MATRIX RUNS</a>
              </li>
              <li>
                <a href="#">TACTICAL WEARABLES</a>
              </li>
              <li>
                <a href="#">LIMITED DISPATCHES</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">OPERATOR SUPPORT</h3>
            <ul className="footer-links">
              <li>
                <a href="#">DISPATCH TRACKING</a>
              </li>
              <li>
                <a href="#">SYSTEM RETURNS</a>
              </li>
              <li>
                <a href="#">WARRANTY PROTOCOLS</a>
              </li>
              <li>
                <a href="#">TECHNICAL LOGS</a>
              </li>
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h3 className="footer-heading">SUBSCRIBE TO TRANSMISSIONS</h3>
            <p className="newsletter-desc">
              RECEIVE INTEL ON LIMITED ARCHITECTURE DROPS AND EQUIPMENT
              MANIFESTOS.
            </p>
            <form className="footer-newsletter-form" id="footerNewsletter">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="ENTER EMAIL ADDRESS"
                  className="footer-input"
                  required
                  autoComplete="off"
                />
                <button type="submit" className="btn-footer-submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="legal-info">
            <span>
              &copy; 2026 PRECISION LABS INC. CODES SECURED. ALL RIGHTS
              RESERVED.
            </span>
            <div className="legal-links">
              <a href="#">PRIVACY POLICY</a>
              <span className="separator">//</span>
              <a href="#">TERMS OF SERVICE</a>
              <span className="separator">//</span>
              <a href="#">SYSTEM REGULATION</a>
            </div>
          </div>

          <div className="localization-selector" id="localizerContainer">
            <button
              className="btn-localization"
              id="langSelectorTrigger"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              LOC: GLOBAL (EN) // CURR: USD{" "}
              <span className="arrow-indicator">↓</span>
            </button>
            <ul
              className="localization-dropdown"
              id="langDropdown"
              role="listbox"
            >
              <li
                data-value="EN-USD"
                className="active"
                role="option"
                aria-selected="true"
              >
                GLOBAL (EN) // USD
              </li>
              <li data-value="EU-EUR" role="option" aria-selected="false">
                EUROPE (EN) // EUR
              </li>
              <li data-value="JP-JPY" role="option" aria-selected="false">
                JAPAN (JA) // JPY
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
