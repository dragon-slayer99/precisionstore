import { Link } from "react-router-dom";
import "./OrderHeader.css";

function OrderHeader() {
  return (
    <header className="registry-header">
      <nav className="breadcrumbs">
        <Link to="/">HOME</Link>
        <span className="separator">/</span>

        <Link to="/profile">MY ACCOUNT</Link>
        <span className="separator">/</span>

        <span className="current">YOUR ORDERS</span>
      </nav>

      <div className="title-identity-line">
        <h1 className="registry-main-title">MY ORDERS</h1>

        <div className="identity-badge">
          <div className="m-stripe"></div>

          <span className="badge-label">PREMIUM MEMBER</span>
        </div>
      </div>

      {/* <nav className="registry-tabs" aria-label="Order Status Filters">
        <button className="tab-item active" data-filter="ALL">
          ALL ORDERS
          <div className="active-indicator"></div>
        </button>

        <button className="tab-item" data-filter="ACTIVE">
          SHIPPED
        </button>

        <button className="tab-item" data-filter="DELIVERED">
          DELIVERED
        </button>

        <button className="tab-item" data-filter="RETURNED">
          RETURNS
        </button>
      </nav> */}
    </header>
  );
}

export default OrderHeader;
