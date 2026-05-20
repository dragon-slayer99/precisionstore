import React from 'react'

function Footer() {
  return (
    <footer class="ecom-footer">
    <div class="footer-grid-top"></div>

    <div class="footer-container">
        <div class="footer-main-grid">
            
            <div class="footer-column brand-info">
                <div class="footer-brand-tag">
                    <div class="m-stripe"></div>
                    <span class="brand-text">PRECISION LABS</span>
                </div>
                <p class="footer-intel">
                    HIGH-OUTPUT HARDWARE AND MODULAR CARRY SYSTEMS ARCHITECTURED FOR UNCOMPROMISING GEOMETRY.
                </p>
                <div class="system-telemetry">
                    SYS_NODE: REG_09 // PLATFORM_STATUS: ACTIVE
                </div>
            </div>

            <div class="footer-column">
                <h3 class="footer-heading">COLLECTIONS</h3>
                <ul class="footer-links">
                    <li><a href="#">ALL EQUIPMENT</a></li>
                    <li><a href="#">CARBON MATRIX RUNS</a></li>
                    <li><a href="#">TACTICAL WEARABLES</a></li>
                    <li><a href="#">LIMITED DISPATCHES</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3 class="footer-heading">OPERATOR SUPPORT</h3>
                <ul class="footer-links">
                    <li><a href="#">DISPATCH TRACKING</a></li>
                    <li><a href="#">SYSTEM RETURNS</a></li>
                    <li><a href="#">WARRANTY PROTOCOLS</a></li>
                    <li><a href="#">TECHNICAL LOGS</a></li>
                </ul>
            </div>

            <div class="footer-column newsletter-column">
                <h3 class="footer-heading">SUBSCRIBE TO TRANSMISSIONS</h3>
                <p class="newsletter-desc">RECEIVE INTEL ON LIMITED ARCHITECTURE DROPS AND EQUIPMENT MANIFESTOS.</p>
                <form class="footer-newsletter-form" id="footerNewsletter">
                    <div class="input-wrapper">
                        <input type="email" placeholder="ENTER EMAIL ADDRESS" class="footer-input" required autocomplete="off" />
                        <button type="submit" class="btn-footer-submit">SUBMIT</button>
                    </div>
                </form>
            </div>

        </div>

        <div class="footer-bottom-bar">
            <div class="legal-info">
                <span>&copy; 2026 PRECISION LABS INC. CODES SECURED. ALL RIGHTS RESERVED.</span>
                <div class="legal-links">
                    <a href="#">PRIVACY POLICY</a>
                    <span class="separator">//</span>
                    <a href="#">TERMS OF SERVICE</a>
                    <span class="separator">//</span>
                    <a href="#">SYSTEM REGULATION</a>
                </div>
            </div>
            
            <div class="localization-selector" id="localizerContainer">
                <button class="btn-localization" id="langSelectorTrigger" aria-haspopup="listbox" aria-expanded="false">
                    LOC: GLOBAL (EN) // CURR: USD <span class="arrow-indicator">↓</span>
                </button>
                <ul class="localization-dropdown" id="langDropdown" role="listbox">
                    <li data-value="EN-USD" class="active" role="option" aria-selected="true">GLOBAL (EN) // USD</li>
                    <li data-value="EU-EUR" role="option" aria-selected="false">EUROPE (EN) // EUR</li>
                    <li data-value="JP-JPY" role="option" aria-selected="false">JAPAN (JA) // JPY</li>
                </ul>
            </div>
        </div>

    </div>
</footer>
  )
}

export default Footer