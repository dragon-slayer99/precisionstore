import Header from "../components/HomeComponents/Header/Header";
import Footer from "../components/HomeComponents/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
