import styles from "../Login/Login.module.css";

function AuthHeader() {
  return (
    <header className={styles.authHeader}>
      <span className={styles.sysLabel}>PREMIUM ONLINE STORE</span>
    </header>
  );
}

export default AuthHeader;
