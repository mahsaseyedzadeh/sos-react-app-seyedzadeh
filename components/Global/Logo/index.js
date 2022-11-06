import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

const Logo = () => {
	return (
		<Link href={"/"}>
			<Image src={"/images/header/SosLogo.svg"} alt={"sos-logo"} title={"sos-logo"} className={styles.image} width={198} height={40} />
		</Link>
	);
};
export default Logo;
