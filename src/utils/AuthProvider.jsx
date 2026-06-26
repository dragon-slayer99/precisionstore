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
          console.log("Authentication status changed to => false");
        }
        return;
      }

      const response = await validateToken(accessToken);

      if (mounted) {
        setAuthenticated(response.ok);
        console.log("Authentication status changed to => ", response.ok);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [authenticated]);

  function login(token) {
    localStorage.setItem("accessToken", token);
    setAuthenticated(true);
    console.log("Authentication status changed to => true")
  }

  function logout() {
    localStorage.removeItem("accessToken");
    setAuthenticated(false);
    console.log("Authentication status changed to => false")
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
