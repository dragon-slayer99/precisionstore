import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuToggleOn, setMenuToggleOn] = useState(false);

  const spanOneStyle = {
    transform: "translateY(3.5px) rotate(45deg)",
  };

  const spanTwoStyle = {
    transform: "translateY(-3.5px) rotate(-45deg)",
  };

  return (
    <header class="ecom-header">
      <div class="header-container">
        <Link to="/" class="brand-logo">
          PRECISION<span>STORE</span>
        </Link>

        <div class="search-container">
          <input
            type="text"
            placeholder="SEARCH MODELS..."
            class="search-input"
          />
          <button class="search-submit">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>

        <nav class="desktop-nav">
          <ul class="nav-links">
          <Link to="/products">NEW ARRIVALS</Link>
          <Link to="/orders">ORDERS</Link>
          <Link to="/cart">CART</Link>
          <Link to="/support">SUPPORT</Link>
          </ul>
        </nav>

        <div class="controls-cluster">
          <Link to='/profile' class="icon-btn" aria-label="Account">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          <div class="cart-wrapper">
            <Link to='/wishlist' class="icon-btn" aria-label="Cart">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1.5"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </Link>
            <span class="cart-badge">2</span>
          </div>
          <button
            class="hamburger"
            id="menuToggle"
            onClick={() =>
              menuToggleOn ? setMenuToggleOn(false) : setMenuToggleOn(true)
            }
          >
            <span style={menuToggleOn ? spanOneStyle : {}}></span>
            <span style={menuToggleOn ? spanTwoStyle : {}}></span>
          </button>
        </div>
      </div>

      <div
        class={menuToggleOn ? "mobile-menu active" : "mobile-menu"}
        id="mobileMenu"
      >
        <div class="m-stripe-divider"></div>

        <ul class="mobile-links">
          <Link to="/new-arrivals">NEW ARRIVALS</Link>
          <Link to="/orders">ORDERS</Link>
          <Link to="/cart">CART</Link>
          <Link to="/support">SUPPORT</Link>
        </ul>
      </div>
    </header>
  );
}
