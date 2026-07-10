import styles from "./Login.module.css";

import AuthHeader from "../AuthHeader/AuthHeader";
import AuthTabs from "../AuthTabs/AuthTabs";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { LoginTabContext } from "../../../utils/contextProducer";
import { useState } from "react";

function Login() {
  const [loginTab, setLoginTab] = useState(true);

  return (
    <main className={styles.mainAuthContainer}>
      <div className={styles.authContainer}>
        <LoginTabContext.Provider value={{ loginTab, setLoginTab }}>
          <AuthHeader />

          <AuthTabs />

          <LoginForm />

          <SignupForm />
        </LoginTabContext.Provider>

        <footer className={styles.telemetryBanner}>
          <span>FREE SHIPPING ON ORDERS OVER ₹999</span>
          <span id="telemetryTime">SECURE CHECKOUT</span>
        </footer>
      </div>
    </main>
  );
}

export default Login;
