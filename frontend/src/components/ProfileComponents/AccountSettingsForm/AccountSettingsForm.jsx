import { useContext, useState } from "react";
import styles from "../Profile/Profile.module.css";
import { UserContext } from "../../../utils/ContextProducer";
import { updateUserDetails } from "../../../api/userApi";
import { useToast } from "../../../hooks/useToast";

function AccountSettingsForm() {
  const { userDetails } = useContext(UserContext);

  const { showToast } = useToast();

  const [tempUserDetails, setTempUserDetails] = useState({
    ...userDetails,
  });
  const [isUpdating, setIsUpdating] = useState(false);

  function handleUserFormInput(e) {
    const { name, value } = e.target;
    setTempUserDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  }

  async function handleFormSubmission(e) {
    e.preventDefault();
    setIsUpdating(true);
    try {
      if (
        userDetails.name === tempUserDetails.name &&
        userDetails.email === tempUserDetails.email
      ) {
        setIsUpdating(false);
        return;
      }

      const response = await updateUserDetails(
        tempUserDetails.name,
        tempUserDetails.email,
      );

      if (!response.ok) {
        showToast("Updation status", "Something went wrong!");
      }

      const data = await response.json();
      showToast("Updation status", "Updated successfully");
      setTempUserDetails(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <section className={`${styles.gridPanel} ${styles.accountSettings}`}>
      <h2 className={styles.panelHeading}>01 / USER IDENTITY</h2>

      <form
        className={styles.precisionForm}
        id="profileForm"
        onSubmit={(e) => handleFormSubmission(e)}
      >
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}> FULL NAME </label>
          <input
            type="text"
            name="name"
            value={tempUserDetails.name}
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
            value={tempUserDetails.email}
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
          style={isUpdating ? { opacity: 0.6, cursor: "not-allowed" } : {}}
        >
          {isUpdating ? `SAVING....` : `SAVE CHANGES`}
        </button>
      </form>
    </section>
  );
}

export default AccountSettingsForm;
