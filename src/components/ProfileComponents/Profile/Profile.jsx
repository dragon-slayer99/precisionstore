import styles from "./Profile.module.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AccountSettingsForm from "../AccountSettingsForm/AccountSettingsForm";
import AccountOverview from "../AccountOverview/AccountOverview";

function Profile() {

  return (
    <main className={styles.profileDashboard}>
      <div className={styles.dashboardContainer}>
        <DashboardHeader />
        <div className={styles.dashboardGrid}>
          <AccountSettingsForm />
          <AccountOverview />
        </div>
      </div>
    </main>
  );
}

export default Profile;
