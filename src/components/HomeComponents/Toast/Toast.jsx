import { useEffect, useState } from "react";
import "./Toast.css";

function Toast({
  message = "This is the default message",
  title = "Title",
  duration = 4000,
}) {
  const [toastActive, setToastActive] = useState(true);
  useEffect(() => {
    (function setTimerFn() {
      setTimeout(() => setToastActive(false), duration);
    })();
  }, [duration]);

  return (
    <div id="toastContainer" className="toast-container">
      <div className={`toast-card ${toastActive && "active"}`}>
        <div className="toast-header">
          <h4 className="toast-title">{title}</h4>
          <button
            className="toast-close"
            aria-label="Close message"
            onClick={() => setToastActive(false)}
          >
            &times;
          </button>
        </div>
        <p className="toast-message">{message}</p>
      </div>
    </div>
  );
}

export default Toast;
