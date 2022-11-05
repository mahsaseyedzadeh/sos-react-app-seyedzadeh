import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";


const Card = ({ value }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={value?.src} alt={"sos logo"} title={"sos logo"} className={styles.img} layout='fill' />
      </div>

      <h3 className={styles.cardTitle}>{value?.title}</h3>
      <span className={styles.createdTime}>
        {value?.date} دقیقه
      </span>
      <p className={styles.content}>
        {value?.content}
      </p>
      <Link href={`/articles/${value?.id}`} className={styles.Link}>
        <span>
          ادامه
        </span>

      </Link>

    </div>
  );
};
export default Card;
