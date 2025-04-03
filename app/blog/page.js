// app/blog/page.js or page.tsx
import { getSortedPostsData } from '@/lib/posts';
import BlogPage from '@/components/BlogPage';

export const dynamic = 'force-static'; // ✅ Full static generation at build time

export default async function Blog() {
  try {
    const allPostsData = await getSortedPostsData(); // ✅ Await async data fetch
    return <BlogPage allPostsData={allPostsData || []} />;
  } catch (error) {
    console.error('❌ Failed to load blog posts:', error);
    return (
      <main className="prose mx-auto py-10">
        <h1>Blog</h1>
        <p>Sorry, we couldn’t load the blog posts at this time.</p>
      </main>
    );
  }
}
