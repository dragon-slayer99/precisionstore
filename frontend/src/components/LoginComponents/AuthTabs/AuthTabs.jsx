import { useContext } from "react";
import styles from "../Login/Login.module.css";
import { LoginTabContext } from "../../../utils/contextProducer";

function AuthTabs() {
  const { loginTab, setLoginTab } = useContext(LoginTabContext);

  return (
    <nav className={styles.authTabs} role="tablist">
      <button
        className={`${styles.authTab} ${styles.active}`}
        id="tab-login"
        role="tab"
        aria-selected="true"
        aria-controls="panel-login"
        onClick={() => setLoginTab(() => !loginTab)}
      >
        LOGIN
        {loginTab && <div className={styles.activeStripe}></div>}
      </button>
      <button
        className={styles.authTab}
        id="tab-signup"
        role="tab"
        aria-selected="false"
        aria-controls="panel-signup"
        onClick={() => setLoginTab(() => !loginTab)}
      >
        REGISTER
        {!loginTab && <div className={styles.activeStripe}></div>}
      </button>
    </nav>
  );
}

export default AuthTabs;
