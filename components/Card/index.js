import styles from "./Card.module.scss";
import Image from "next/image";
import src from "../../public/images/articles/arctic-fox.webp";
import CustomButton from "../Global/CustomButton";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={src} alt={"sos logo"} title={"sos logo"} className={styles.img} layout='fill' />
      </div>

      <h3 className={styles.cardTitle}>راهنمای دریافت معرفی‌نامه</h3>
      <span className={styles.createdTime}>
        asss
      </span>
      <p className={styles.content}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...
      </p>
      <Link href={"/article/2"}>
        ادامه
      </Link>

    </div>
  );
};
export default Card;
