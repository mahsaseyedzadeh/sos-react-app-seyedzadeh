import { Grid } from "@mui/material";
import styles from './ArticleIndex.module.scss';
import Image from "next/image";


const ArticleIndex = ({ value }) => {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={6}>
        <div className={styles.gallery}>
          {/* @todo add placeholder to image */}
          <Image src={value?.src} alt={"sos logo"} title={"sos logo"} className={styles.img} layout='fill' />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {value?.title}
          </h1>
          <p className={styles.text}>
            {value?.content}
          </p>
          <span className={styles.date}>
            {value?.date} دقیقه
          </span>

        </div>
      </Grid>
    </Grid>

  )
}
export default ArticleIndex;