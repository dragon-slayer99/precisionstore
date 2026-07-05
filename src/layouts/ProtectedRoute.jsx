import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function ProtectedRoute() {
  const { authenticated } = useAuth();

  // return authenticated ? <Outlet /> : loading ? <Loader /> : <Outlet />;
  return authenticated ? <Outlet /> : <Navigate to={'/login'} />;
}

export default ProtectedRoute;
