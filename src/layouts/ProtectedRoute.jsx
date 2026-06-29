import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import Loader from "../components/HomeComponents/Loader/Loader";

function ProtectedRoute() {
  const { authenticated, loading } = useAuth();

  // return authenticated ? <Outlet /> : loading ? <Loader /> : <Outlet />;
  return authenticated ? <Outlet /> : loading ? <Loader /> : <Navigate to={'/login'} />;
}

export default ProtectedRoute;
