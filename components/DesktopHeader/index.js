import styles from "./DesktopHeader.module.scss";
import { menuItems } from "../../utils/menu";

import { Navbar, NavbarItem } from "../Navbar";
import Logo from "../Global/Logo";
import CustomButton from "../Global/CustomButton";

const DesktopHeader = () => {
  const loginHandler = () => {
    console.log("login");
  };

  return (
    <div className={styles.container}>
      <div className={`main ${styles.flexBox}`}>
        <Logo />
        <Navbar>
          {menuItems.map((menuItem, index) => (
            <NavbarItem key={index} link={menuItem.url} name={menuItem.id} label={menuItem.label} classes={`${menuItem.class}`} />
          ))}
        </Navbar>
        <CustomButton message={"ورود و فعالسازی"} onClick={loginHandler} />
      </div>
    </div>
  );
};
export default DesktopHeader;
