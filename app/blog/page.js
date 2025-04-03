// app/blog/page.js
import { getSortedPostsData } from '@/lib/posts';
import BlogPage from '@/components/BlogPage';

// We use `generateStaticParams` in App Router to generate static params at build time
export const generateStaticParams = async () => {
  const allPostsData = await getSortedPostsData();
  return allPostsData.map(post => ({
    id: post.id,
  }));
};

export default async function Blog() {
  const allPostsData = await getSortedPostsData(); // Fetch blog data during build

  return <BlogPage allPostsData={allPostsData || []} />;
}
