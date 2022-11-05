import Link from "next/link"
import styles from './ArticleSection.module.scss';
import Grid from '@mui/material/Grid';
import Card from "../Card";


const ArticleSection = ({ posts }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          مقاله ها
        </h1>
        <Link className={styles.linkedTo} href={"articles"}>
          نمایش همه
        </Link>
      </header>
      <Grid container spacing={2}>
        {posts?.map((post, index) => (
          <Grid key={index} item xs={12} md={4} lg={3}>
            <Card value={post} />
          </Grid>
        ))}

      </Grid>


    </section>

  )
}
export default ArticleSection