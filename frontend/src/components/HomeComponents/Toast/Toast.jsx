import "./Toast.css";

function Toast({ title, message, onClose }) {
  return (
    <div className="toast-card active">
      <div className="toast-header">
        <h4 className="toast-title">{title}</h4>
        <button
          className="toast-close"
          aria-label="Close message"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      <p className="toast-message">{message}</p>
    </div>
  );
}

export default Toast;
