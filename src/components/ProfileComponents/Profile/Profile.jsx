import "./Profile.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AccountSettingsForm from "../AccountSettingsForm/AccountSettingsForm";
import OrderSection from "../OrderSection/OrderSection";

function Profile() {
  return (
    <>
      <main className="profile-dashboard">
        <div className="dashboard-container">
          <DashboardHeader />

          <div className="dashboard-grid">
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
