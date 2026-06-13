import { useState } from "react";
import styles from "../Profile/Profile.module.css";

function AccountSettingsForm() {
  const [userDetails, setUserDetails] = useState({
    name: "Alexander Vance",
    email: "alex.vance@email.com",
    password: "Alexander123",
    address:
      "VECTOR BUILDING, FLOORS 4-6&#10;100 INDUSTRIAL PARKWAY&#10;AUSTIN,TX 78701",
  });

  function handleUserFormInput(e) {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  }

  return (
    <section className={styles.gridPanel}>
      <h2 className={styles.panelHeading}>ACCOUNT INFORMATION</h2>

      <form className={styles.precisionForm} id="profileForm">
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}> FULL NAME </label>

          <input
            type="text"
            value={userDetails.name}
            name="name"
            className={styles.textInput}
            onChange={handleUserFormInput}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.inputLabel}> EMAIL ADDRESS </label>

          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleUserFormInput}
            className={styles.textInput}
            required
          />
        </div>

        <div className={styles.formGroupRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}> PASSWORD </label>

            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleUserFormInput}
              className={styles.textInput}
            />
          </div>

          <button type="button" className={`${styles.btnGhostSecondary} ${styles.insideField}`}>
            CHANGE
          </button>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>SHIPPING MATRIX (DEFAULT)</label>
          <textarea
            className={`${styles.textInput} ${styles.textareaInput}`}
            name="address"
            value={userDetails.address}
            onChange={handleUserFormInput}
          ></textarea>
        </div>

        <button type="" className={`${styles.btnGhostPrimary} ${styles.formSubmit}`}>
          SAVE CHANGES
        </button>
      </form>
    </section>
  );
}

export default AccountSettingsForm;
