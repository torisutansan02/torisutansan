'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';

export default function BlogPage({ allPostsData }) {
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(allPostsData.flatMap(post => post.category))].filter(Boolean);

  const filteredPosts = selectedCategory
    ? allPostsData.filter(post => post.category === selectedCategory)
    : [];

  if (user) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className="text">
          <h1 className = "heading"> Blog </h1>
          
          <p className = "pretty"> 
            You can find links to my blog posts below. These are posts that revolve around my daily life.
            I find various things interesting so checking out my blog is a must! There are lots of things
            I do on a day-to-day basis. I am changing things up, and I plan on following a solid routine.
            Routines are essential for time management and ensuring I can finish tasks.
          </p>

          <p className = "pretty">
            The blogs below have a name with a particular topic. Each one from descending order is
            chronological. I am going to date each one of these blogs to give an idea of how frequently I post.
            This also gives you an idea of how much my life changes over time.
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
  } else (
    <>
      <Navbar />
      <Sidebar />
      <div className="text">
        <h1 className="heading"> Blog </h1>
        <p className="pretty">Please log in to access blogs...</p>
      </div>
      <Footer />
    </>
  );
}
