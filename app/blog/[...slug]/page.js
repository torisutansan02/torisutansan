import Post from "./Post";
import { getAllPostIds, getPrebuiltPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPostIds();

  return posts.map(({ id }) => ({
    slug: id.split("/"), // nested arrays (["python","syntax"])
  }));
}

export const dynamic = "force-static";

export default async function BlogPostPage({ params }) {
  const p = await params;

  if (!p?.slug) return notFound();

  // slug is always an array for [...slug]
  const id = Array.isArray(p.slug)
    ? p.slug.join("/")
    : p.slug;

  let postData;
  try {
    postData = getPrebuiltPost(id);
  } catch {
    return notFound();
  }

  return <Post postData={postData} />;
}
