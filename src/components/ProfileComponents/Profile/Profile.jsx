import styles from "./Profile.module.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AccountSettingsForm from "../AccountSettingsForm/AccountSettingsForm";
import { useEffect } from "react";
import { getUserDetails } from "../../../api/userApi";
import AccountOverview from "../AccountOverview/AccountOverview";

function Profile() {
  useEffect(() => {
    (async function fetchUserDetails() {
      const response = await getUserDetails();
      const data = await response.json();

      console.log(data);
    })();
  }, []);

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
