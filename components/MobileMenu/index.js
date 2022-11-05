import { useEffect, useState } from "react";
import style from "./MobileMenu.module.scss";
import Link from "next/link";
import { menuItems } from "../../utils/menu";
import Logo from "../Global/Logo";
import CustomButton from "../Global/CustomButton";

const MobileMenu = () => {

  const [showMenu, setShowMenu] = useState(false);

  const loginHandler = () => {
    console.log("login");
  };


  return (
    <nav className={style.mobileNav}>
      <div
        className={style.IconBox}
        onClick={() => {
          setShowMenu(!showMenu);
        }}>
        <span className={style.Icon} />
        <span className={style.Icon} />
        <span className={style.Icon} />
      </div>
      <Logo />
      <CustomButton className={style.loginButton} message={"ورود و فعالسازی"} onClick={loginHandler} />

      <div className={`${style.burgerMenu} ${showMenu ? style.open : ""}`}>
        <ul className={style.menuList}>
          <li className={style.closeIconRow}>
            <span
              className={style.closeIcon}
              onClick={() => {
                setShowMenu(!showMenu);
              }}>
              بستن
            </span>
          </li>
          {menuItems.map((item, index) => (
            <li>
              <Link className={style.link} key={index} href={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default MobileMenu;
