import { useState } from "react";
import styles from "../Login/Login.module.css";

function PasswordInput({ userDetailsState, userDetailsUpdateFn, formLabel }) {
  const [showPassword, setShowPassword] = useState(false);


  // SVG Paths for the "Eye Off" (Hide) state
  const eyeOffSvg = (
    <>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </>
  );

  // SVG Paths for the "Eye On" (Show) state
  const eyeOnSvg = (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </>
  );

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="loginPassword">{formLabel}</label>

      <div className={styles.inputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.industrialInput}
          value={userDetailsState.password}
          onChange={(e) =>
            userDetailsUpdateFn({
              ...userDetailsState,
              password: e.target.value,
            })
          }
          id="loginPassword"
          required
        />

        <button
          type="button"
          id={styles.togglePassword}
          aria-label="Show password"
          onClick={() => setShowPassword(() => !showPassword)}
        >
          <svg
            id="eyeIcon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle> */}
            {showPassword ? eyeOffSvg : eyeOnSvg}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
