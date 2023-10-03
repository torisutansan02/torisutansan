import { getAllPostIds, getPostData } from '../../lib/posts';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

export default function Post({ postData }) {
  return (
    <>
      <Navbar />
      <Sidebar></Sidebar>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}