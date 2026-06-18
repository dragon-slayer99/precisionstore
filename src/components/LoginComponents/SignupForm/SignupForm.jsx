import { useContext, useState } from "react";
import styles from "../Login/Login.module.css";
import { LoginTabContext } from "../../../utils/contextProducer";
import PasswordInput from "../PasswordInput/PasswordInput";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { loginTab } = useContext(LoginTabContext);
  const navigate = useNavigate();

  const [signupUserDetails, setSignupUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [enteredEmailAlreadyTaken, setEnteredEmailAlreadyTaken] =
    useState(false);

  async function handleFormSubmission(e) {
    e.preventDefault();
    console.log(signupUserDetails);

    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signupUserDetails.username,
        email: signupUserDetails.email,
        password: signupUserDetails.password,
      }),
    });

    if (response.status === 409) {
      setEnteredEmailAlreadyTaken(true);
      console.log("User already exists with this mail");
    }

    if (!response.ok) {
      throw new Error("This request cannot be processed");
    }

    const data = await response.json();

    console.log(data);

    navigate("/login", { replace: true });
  }

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
      <form id="signupForm" autoComplete="off" onSubmit={handleFormSubmission}>
        <div className={styles.inputGroup}>
          <label htmlFor="regName">FULL NAME</label>
          <input
            type="text"
            className={styles.industrialInput}
            value={signupUserDetails.username}
            onChange={(e) =>
              setSignupUserDetails({
                ...signupUserDetails,
                username: e.target.value,
              })
            }
            id="regName"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="regEmail">EMAIL ADDRESS</label>
          <input
            type="email"
            className={styles.industrialInput}
            value={signupUserDetails.email}
            onChange={(e) =>
              setSignupUserDetails({
                ...signupUserDetails,
                email: e.target.value,
              })
            }
            id="regEmail"
            required
          />
          <span
            className={`${styles.fieldHelper} ${styles.errorText}`}
            id="emailError"
            style={enteredEmailAlreadyTaken ? {} : { display: "none" }}
          >
            THIS EMAIL IS ALREADY REGISTERED.
          </span>
        </div>
        <PasswordInput
          userDetailsState={signupUserDetails}
          userDetailsUpdateFn={setSignupUserDetails}
          formLabel={"CREATE PASSWORD"}
        />
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
