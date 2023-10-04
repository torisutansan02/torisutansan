import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { getSortedPostsData } from '../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <>
        <Navbar />
        <Sidebar></Sidebar>
        <h2 className = "heading">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>

        <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}