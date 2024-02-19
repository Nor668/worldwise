import { Outlet } from "react-router-dom";

import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";
import styles from "./Sidebar.module.css";
import Footer from "../Footer/Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
