import { useState } from "react";
import { ToastContext } from "./ContextProducer";
import Toast from "../components/HomeComponents/Toast/Toast";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function showToast( title, message, type = "info", duration = 1000 ) {
    const id = crypto.randomUUID();

    const toast = {
      id,
      title,
      message,
      type
    };


    setToasts((prev) => [...prev, toast]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id != id));
  }

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div id="toastContainer" className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

