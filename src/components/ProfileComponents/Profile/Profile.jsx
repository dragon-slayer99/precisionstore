import styles from "./Profile.module.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AccountSettingsForm from "../AccountSettingsForm/AccountSettingsForm";
import OrderSection from "../OrderSection/OrderSection";

function Profile() {
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
