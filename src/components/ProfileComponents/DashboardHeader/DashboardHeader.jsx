import styles from "../Profile/Profile.module.css";
import { Link } from "react-router-dom";

function DashboardHeader() {
  return (
    <header className={styles.dashboardHeader}>
      <div className={styles.breadcrumbs}>
        <Link to={"/"}>HOME</Link>
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
        REGISTRY ID: #0001 // JOINED: JUNE 16, 2026 // STATUS: VERIFIED
      </p>
    </header>
  );
}

export default DashboardHeader;
