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
        <div className="nav-links-container">
          <nav className="desktop-nav">
            <ul className="nav-links">
              {authenticated ? (
                <>
                  <Link to="/products">NEW ARRIVALS</Link>
                  <Link to="/orders">ORDERS</Link>
                  <Link to="/cart">CART</Link>
                  <Link onClick={logout}>LOGOUT</Link>
                </>
              ) : (
                <Link to={"/login"}>LOGIN</Link>
              )}
            </ul>
          </nav>

          <div className="controls-cluster">
            {authenticated && (
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
            )}

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
      </div>

      <div
        className={menuToggleOn ? "mobile-menu active" : "mobile-menu"}
        id="mobileMenu"
      >
        <div className="m-stripe-divider"></div>

        <ul className="mobile-links">
          {authenticated ? (
            <>
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
            </>
          ) : (
            <Link to={"/login"}>LOGIN</Link>
          )}
        </ul>
      </div>
    </header>
  );
}
