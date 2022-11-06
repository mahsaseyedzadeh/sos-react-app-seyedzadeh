import Footer from "../footer";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileMenu from '../MobileMenu';
import dynamic from "next/dynamic";
const DesktopHeader = dynamic(() => import("../DesktopHeader"));


export default function Layout({ children }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMedium ? <MobileMenu /> : <DesktopHeader />}
      {children}
      <Footer />
    </>


  );
}


