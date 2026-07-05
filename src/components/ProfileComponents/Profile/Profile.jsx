import styles from "./Profile.module.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AccountSettingsForm from "../AccountSettingsForm/AccountSettingsForm";
import OrderSection from "../OrderSection/OrderSection";
import { useEffect } from "react";
import { getUserDetails } from "../../../api/userApi";

function Profile() {

  useEffect(() => {

    (async function fetchUserDetails() {
      const response = await getUserDetails();

      const data = await response.json();

      console.log(data);

    })()

  }, [])

  return (
    <>
      <main className={styles.profileDashboard}>
        <div className={styles.dashboardContainer}>
          <DashboardHeader />

          <div className={styles.dashboardGrid}>
            {/* <!-- ACCOUNT SETTINGS --> */}

            <AccountSettingsForm />

            {/* <!-- ORDERS --> */}

            <OrderSection />
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
