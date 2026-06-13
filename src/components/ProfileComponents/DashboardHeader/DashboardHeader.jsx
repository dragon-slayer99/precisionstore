import styles from "../Profile/Profile.module.css";

function DashboardHeader() {
  return (
    <header className={styles.dashboardHeader}>
      <div className={styles.breadcrumbs}>
        <a href="#">HOME</a>
        <span className={styles.separator}>/</span>
        <span className={styles.current}>MY ACCOUNT</span>
      </div>

      <div className={styles.headerIdentityBlock}>
        <h1 className={styles.dashboardTitle}>ACCOUNT DASHBOARD</h1>

        <div className={styles.tierBadge}>
          <div className={styles.mStripe}></div>
          <span className={styles.tierLabel}> PREMIUM MEMBER </span>
        </div>
      </div>

      <p className={styles.registryId}>
        MEMBER SINCE 2024 // FREE EXPRESS SHIPPING ENABLED
      </p>
    </header>
  );
}

export default DashboardHeader;
