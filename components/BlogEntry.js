import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { getSortedPostsData } from '../pages/api/posts';

const BlogEntry = ({allPostsData}) => {
    return (
        <>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default BlogEntry;