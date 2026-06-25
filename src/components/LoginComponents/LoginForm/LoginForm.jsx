import { useContext, useState } from "react";
import styles from "../Login/Login.module.css";
import { LoginTabContext } from "../../../utils/contextProducer";

import PasswordInput from "../PasswordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/userApi";
import { useAuth } from "../../../hooks/useAuth";
function LoginForm() {
  const { loginTab } = useContext(LoginTabContext);
  const [userLoginDetails, setUserLoginDetails] = useState({
    userEmail: "",
    password: "",
  });

  const {login} = useAuth();

  const [userWrongCredientials, setUserWrongCredientials] = useState(false);

  const navigate = useNavigate();

  async function handleFormSubmission(event) {
    event.preventDefault();
    const jwtToken = await loginUser(userLoginDetails);

    if (!jwtToken) {
      setUserWrongCredientials(true);
      return;
    }
    
    login(jwtToken)
    navigate("/", { replace: true });
  }

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
      <form id="loginForm" autoComplete="off" onSubmit={handleFormSubmission}>
        <div
          className={`${styles.systemAlert} ${styles.errorBanner}`}
          id={`${styles.loginError}`}
          style={userWrongCredientials ? {} : { display: "none" }}
        >
          <span className="alertIcon">⚠</span>
          <span className="alertText">
            AUTHENTICATION FAILED: INVALID CREDENTIALS
          </span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="loginEmail">EMAIL ADDRESS</label>
          <input
            type="email"
            className={styles.industrialInput}
            id="loginEmail"
            value={userLoginDetails.userEmail}
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                userEmail: e.target.value,
              })
            }
            required
          />
        </div>

        <PasswordInput
          userDetailsState={userLoginDetails}
          userDetailsUpdateFn={setUserLoginDetails}
          formLabel={"PASSWORD"}
        />

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
