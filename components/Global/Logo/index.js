import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/header/SosLogo.svg";
import styles from "./logo.module.scss";

const Logo = () => {
	return (
		<Link href={"/"}>
			<Image src={logo} alt={"sos logo"} title={"sos logo"} className={styles.image} width={198} height={40} />
		</Link>
	);
};
export default Logo;
