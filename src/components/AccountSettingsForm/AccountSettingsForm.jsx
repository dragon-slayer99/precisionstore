import { useState } from "react";
import "./AccountSettingsForm.css";

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
    <section className="grid-panel account-settings">
      <h2 className="panel-heading">ACCOUNT INFORMATION</h2>

      <form className="precision-form" id="profileForm">
        <div className="form-group">
          <label className="input-label"> FULL NAME </label>

          <input
            type="text"
            value={userDetails.name}
            name="name"
            className="text-input"
            onChange={handleUserFormInput}
            required
          />
        </div>

        <div className="form-group">
          <label className="input-label"> EMAIL ADDRESS </label>

          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleUserFormInput}
            className="text-input"
            required
          />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label className="input-label"> PASSWORD </label>

            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleUserFormInput}
              className="text-input"
            />
          </div>

          <button type="button" className="btn-ghost-secondary inside-field">
            CHANGE
          </button>
        </div>

        <div className="form-group">
          <label className="input-label">SHIPPING MATRIX (DEFAULT)</label>
          <textarea
            className="text-input textarea-input"
            name="address"
            value={userDetails.address}
            onChange={handleUserFormInput}
          ></textarea>
        </div>

        <button type="" className="btn-ghost-primary form-submit">
          SAVE CHANGES
        </button>
      </form>
    </section>
  );
}

export default AccountSettingsForm;
