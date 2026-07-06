import styles from "../Profile/Profile.module.css";

function AccountOverview() {
  return (
    <section className={`${styles.gridPanel} ${styles.telemetryLog}`}>
      <h2 className={styles.panelHeading}>02 / ACCOUNT OVERVIEW</h2>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>1</span>
          <span className={styles.statLabel}>USER ID</span>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statValue}>0</span>
          <span className={styles.statLabel}>ACTIVE ORDERS</span>
        </div>
      </div>
    </section>
  );
}

export default AccountOverview;
