// app/blog/page.tsx
import { getSortedPostsData } from '@/lib/posts';
import BlogPage from '@/components/BlogPage';

export default async function Blog() {
  const allPostsData = await getSortedPostsData(); // or just getSortedPostsData() if it's not async

  return <BlogPage allPostsData={allPostsData || []} />;
}
