import Card from "../../../components/Card";
import Layout from "../../../components/layout";
import ArticleIndex from "../../../components/ArticleIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Article = ({ post }) => {
  const router = useRouter();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      getArticle()
    }
  }, [router.isReady]);

  const getArticle = () => {
    axios.get(`${process.env.server}/posts/${router.query.id}`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        // @todo error handler
        console.log(err.message);
      });
  };

  return (
    <Layout>
      <main className='main'>
        <ArticleIndex value={article} />
      </main>
    </Layout>
  );
};

export default Article;
