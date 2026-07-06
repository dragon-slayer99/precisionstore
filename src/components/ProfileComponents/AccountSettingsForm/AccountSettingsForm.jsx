import { useState } from "react";
import styles from "../Profile/Profile.module.css";

function AccountSettingsForm() {
  const [userDetails, setUserDetails] = useState({
    email: "intern.techouts@gmail.com",
    id: 1,
    joinedDate: "June 16, 2026",
    message: "User found",
    name: "Intern",
  });

  function handleUserFormInput(e) {
    const { name, value } = e.target;
    setUserDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  }

  return (
    <section className={`${styles.gridPanel} ${styles.accountSettings}`}>
      <h2 className={styles.panelHeading}>01 / USER IDENTITY</h2>

      <form
        className={styles.precisionForm}
        id="profileForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}> FULL NAME </label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleUserFormInput}
            className={styles.textInput}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.inputLabel}> EMAIL ADDRESS </label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            className={styles.textInput}
            onChange={handleUserFormInput}
            required
          />
        </div>

        <div className={styles.formGroupRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}> PASSWORD </label>
            <input
              type="password"
              value="••••••••••••"
              className={styles.textInput}
              disabled
            />
          </div>

          <button
            type="button"
            className={`${styles.btnGhostSecondary} ${styles.insideField}`}
          >
            CHANGE
          </button>
        </div>

        <button
          type="submit"
          className={`${styles.btnGhostPrimary} ${styles.formSubmit}`}
        >
          SAVE CHANGES
        </button>
      </form>
    </section>
  );
}

export default AccountSettingsForm;
