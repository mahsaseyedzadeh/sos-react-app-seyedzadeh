import Link from "next/link";
import styles from "./DesktopHeader.module.scss";
import { menuItems } from "../../utils/menu";
import { useEffect, useState } from "react";
import { Navbar, NavbarItem } from "../Navbar";
import Logo from "../Global/Logo";
import CustomButton from "../Global/CustomButton";

const DesktopHeader = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  let lastScrollTop = 0;
  const listener = (e) => {
    let scrollTop = document.body.getBoundingClientRect().top * -1;
    setScrollDirection(lastScrollTop >= scrollTop ? "down" : "up");
    lastScrollTop = scrollTop;
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const loginHandler = () => {
    console.log("login");
  };

  return (
    <>
      <div className={`${styles.container} ${scrollDirection === "down" ? "activeNavbar" : "hideNavbar"}`}>
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
    </>
  );
};
export default DesktopHeader;
