import styles from "../Profile/Profile.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../utils/ContextProducer";
import { useContext } from "react";

function DashboardHeader() {
  const { userDetails } = useContext(UserContext);

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
        REGISTRY ID: #00{userDetails.id} // JOINED: {userDetails.joinedDate} // STATUS: VERIFIED
      </p>
    </header>
  );
}

export default DashboardHeader;
