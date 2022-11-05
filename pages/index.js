import Layout from "../components/layout";
import ArticleSection from '../components/ArticleSection';
import axios from 'axios';




const Home = ({ posts }) => {

  return (
    <Layout>
      <main className='main'>
        <ArticleSection posts={posts?.data} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {


  const posts = await axios.get(`${process.env.server}/posts`
  ).then((res) => {
    return { data: res.data, error: null };
  })
    .catch((err) => {
      return { data: null, error: JSON.stringify(err.message) };
    });
  return {
    props: {
      posts
    },
  }
}
export default Home;