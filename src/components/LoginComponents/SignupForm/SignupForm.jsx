import { useContext } from "react";
import styles from "../Login/Login.module.css";
import { LoginTabContext } from "../../../utils/contextProducer";

function SignupForm() {
  const { loginTab, setLoginTab } = useContext(LoginTabContext);

  return (
    <section
      className={
        loginTab
          ? `${styles.formPanel}`
          : `${styles.formPanel} ${styles.active}`
      }
      id="panel-signup"
      role="tabpanel"
      aria-labelledby="tab-signup"
    >
      <form id="signupForm" autocomplete="off">
        <div className={styles.inputGroup}>
          <label for="regName">FULL NAME</label>
          <input
            type="text"
            className={styles.industrialInput}
            id="regName"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label for="regEmail">EMAIL ADDRESS</label>
          <input
            type="email"
            className={styles.industrialInput}
            id="regEmail"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label for="regPassword">CREATE PASSWORD</label>
          <input
            type="password"
            className={styles.industrialInput}
            id="regPassword"
            required
          />
        </div>
        <div className={styles.formMeta}>
          <label className={styles.checkboxWrapper}>
            <input type="checkbox" id="agreeTerms" required />
            <span className={styles.checkboxLabel}>
              I AGREE TO TERMS & CONDITIONS
            </span>
          </label>
        </div>
        <button type="submit" className={styles.btnActionSubmit}>
          CREATE ACCOUNT
        </button>
      </form>
    </section>
  );
}

export default SignupForm;
