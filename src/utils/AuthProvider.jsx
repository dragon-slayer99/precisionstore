import { useEffect, useState } from "react";
import { AuthContext } from "./ContextProducer";
import { validateToken } from "../api/userApi";
export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    let mounted = true;

    (async function checkTokenValidity() {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        if (mounted) {
          setAuthenticated(false);
        }
        return;
      }

      const response = await validateToken(accessToken);

      if (mounted) {
        setAuthenticated(response.ok);
      }
    })();

    return () => {
      mounted = false;
    }
  }, [authenticated]);

  function login(token) {
    localStorage.setItem("accessToken", token);
    setAuthenticated(true);
  }

  function logout() {
    localStorage.removeItem("accessToken");
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
