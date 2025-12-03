'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useUser } from '@auth0/nextjs-auth0';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogPage({ allPostsData }) {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <p>Loading...</p>;
  }

  const categories = [...new Set(allPostsData.flatMap(post => post.category))].filter(Boolean);

  const filteredPosts = selectedCategory
    ? allPostsData.filter(post => post.category === selectedCategory)
    : [];

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="text">
        <h1 className="heading">Blog</h1>

        <p className="pretty">
          You can find links to my blog posts below...
        </p>

        <div className="relative inline-block">
          <select
            className="appearance-none width-auto pr-10 pt-3 pb-3 pl-5 rounded bg-zinc-500 text-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>Category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-white">
            ▼
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          filteredPosts.map(({ id, title }) => (
            <p key={id}>
              <a
                className="grid bg-zinc-700 hover:bg-gray-900 content-center text-center py-4 mt-1 rounded-sm text-white"
                href={`/blog/${id}`}
              >
                {title}
              </a>
            </p>
          ))
        ) : (
          <p>Please select a category.</p>
        )}
      </div>

      <Footer />
    </>
  );
}
