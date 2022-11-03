import Footer from "../footer";
import styles from "./Layout.module.scss";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from '../MobileHeader';
import dynamic from "next/dynamic";
import { useEffect } from "react";
const DesktopHeader = dynamic(() => import("../DesktopHeader"));


export default function Layout({ children }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
      {isMedium ? <MobileHeader /> : <DesktopHeader />}
      {children}
      <Footer />
    </>


  );
}

