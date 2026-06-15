import { useContext } from "react";
import styles from "../Login/Login.module.css";
import { LoginTabContext } from "../../../utils/contextProducer";

import PasswordInput from "../PasswordInput/PasswordInput";

function LoginForm() {
  const { loginTab, setLoginTab } = useContext(LoginTabContext);

  return (
    <section
      className={
        loginTab
          ? `${styles.formPanel} ${styles.active}`
          : `${styles.formPanel}`
      }
      id="panel-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form id="loginForm" autocomplete="off">
        <div className={styles.inputGroup}>
          <label for="loginEmail">EMAIL ADDRESS</label>
          <input
            type="email"
            className={styles.industrialInput}
            id="loginEmail"
            required
          />
        </div>

        <PasswordInput />

        <div className={styles.formMeta}>
          <label className={styles.checkboxWrapper}>
            <input type="checkbox" id="rememberMe" />
            <span className={styles.checkboxLabel}>REMEMBER ME</span>
          </label>
          <a href="#" className={styles.inlineLink}>
            FORGOT PASSWORD?
          </a>
        </div>

        <button type="submit" className={styles.btnActionSubmit}>
          LOGIN TO ACCOUNT
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
