import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <header class="dashboard-header">
      <div class="breadcrumbs">
        <a href="#">HOME</a>
        <span class="separator">/</span>
        <span class="current">MY ACCOUNT</span>
      </div>

      <div class="header-identity-block">
        <h1 class="dashboard-title">ACCOUNT DASHBOARD</h1>

        <div class="tier-badge">
          <div class="m-stripe"></div>
          <span class="tier-label"> PREMIUM MEMBER </span>
        </div>
      </div>

      <p class="registry-id">
        MEMBER SINCE 2024 // FREE EXPRESS SHIPPING ENABLED
      </p>
    </header>
  );
}

export default DashboardHeader;
