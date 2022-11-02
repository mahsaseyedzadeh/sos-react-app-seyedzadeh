import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

export const Navbar = ({ children }) => {
  return (
    <nav className={styles.navbar} itemType=''>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  );
};

export const NavbarItem = ({
  link, label, classes, target }) => {

  return (
    <li className={`${classes} ${styles.navItem}`}>
      {target !== undefined && target === "_blank" ? (
        <a href={link} target='_blank' className={styles.navLink} itemProp='url'>
          <span>{label}</span>
        </a>
      ) : (
        <Link href={link} shallow={false} className={styles.navLink} itemProp='url'>
          <span>{label}</span>
        </Link>
      )}
    </li>
  );
};
