import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export default function Header() {
  const [menuToggleOn, setMenuToggleOn] = useState(false);
  const { authenticated, logout } = useAuth();

  const spanOneStyle = {
    transform: "translateY(3.5px) rotate(45deg)",
  };

  const spanTwoStyle = {
    transform: "translateY(-3.5px) rotate(-45deg)",
  };

  return (
    <header className="ecom-header">
      <div className="header-container">
        <Link to="/" className="brand-logo">
          PRECISION<span>STORE</span>
        </Link>

        <div className="search-container">
          <input
            type="text"
            placeholder="SEARCH MODELS..."
            className="search-input"
          />
          <button className="search-submit">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <Link to="/products">NEW ARRIVALS</Link>
            <Link to="/orders">ORDERS</Link>
            <Link to="/cart">CART</Link>
            <Link onClick={logout}>LOGOUT</Link>
          </ul>
        </nav>

        <div className="controls-cluster">
          <Link to="/profile" className="icon-btn" aria-label="Account">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <button
            className="hamburger"
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

      <div className={menuToggleOn ? "mobile-menu active" : "mobile-menu"}
        id="mobileMenu"
      >
        <div className="m-stripe-divider"></div>

        <ul className="mobile-links">
          <Link to="/products" onClick={() => setMenuToggleOn(false)}>
            NEW ARRIVALS
          </Link>
          <Link to="/orders" onClick={() => setMenuToggleOn(false)}>
            ORDERS
          </Link>
          <Link to="/cart" onClick={() => setMenuToggleOn(false)}>
            CART
          </Link>
          <Link
            onClick={() => {
              setMenuToggleOn(false);
              logout();
            }}
          >
            LOGOUT
          </Link>
        </ul>
      </div>
    </header>
  );
}
