import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="breadcrumbs">
        <a href="#">HOME</a>
        <span className="separator">/</span>
        <span className="current">MY ACCOUNT</span>
      </div>

      <div className="header-identity-block">
        <h1 className="dashboard-title">ACCOUNT DASHBOARD</h1>

        <div className="tier-badge">
          <div className="m-stripe"></div>
          <span className="tier-label"> PREMIUM MEMBER </span>
        </div>
      </div>

      <p className="registry-id">
        MEMBER SINCE 2024 // FREE EXPRESS SHIPPING ENABLED
      </p>
    </header>
  );
}

export default DashboardHeader;
