
import Layout from "../../../components/layout";
import ArticleIndex from "../../../components/ArticleIndex";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticle } from '../../../api/Article'

const Article = ({ post }) => {
  const router = useRouter();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      getArticle(router.query.id).then((response) => {
        setArticle(response)
      }).catch((error) => {
        // @todo error handler
        console.log(error.message)
      })

    }
  }, [router.isReady]);



  return (
    <Layout>
      <main className='main'>
        <ArticleIndex value={article} />
      </main>
    </Layout>
  );
};

export default Article;
