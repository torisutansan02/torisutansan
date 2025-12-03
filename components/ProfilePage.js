"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [likedPosts, setLikedPosts] = useState([]);
  const [favoritedPosts, setFavoritePosts] = useState([]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
  if (user) {
      fetch("/api/user/liked-posts", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setLikedPosts(data.likedPosts || []));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
        fetch("/api/user/favorited-posts", {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => setFavoritePosts(data.favoritedPosts || []));
      }
    }, [user]);


  if (isLoading || !user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="text">
        <h1 className="heading">Profile Page</h1>

        <div className="bg-gray-700 w-fit px-4 py-1 rounded-lg">
          <img src={user.picture} alt="Profile Picture" className="rounded-full mt-2" />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Nickname:</strong> {user.nickname}</p>
        </div>

        <h2 className="heading mt-6">Posts You Liked</h2>
        <div className="bg-gray-700 w-fit rounded-lg py-1 px-4 list-none">
          {likedPosts.length === 0 ? (
            <p>You haven't liked any posts yet.</p>
          ) : (
            likedPosts.map((post) => (
            <p key={post.id}>
              <a
                href={`/blog/${post.id.replace(/-/g, "/")}`}
                className="text-blue-200 bg-inherit"
              >
                - {post.title
                  .replace(/-/g, "/")
                }
              </a>
            </p>
            ))
          )}
        </div>

        <h2 className="heading mt-6">Posts You Favorited</h2>
        <div className="bg-gray-700 w-fit rounded-lg py-1 px-4 list-none">
          {favoritedPosts.length === 0 ? (
            <p>You haven't favorited any posts yet.</p>
          ) : (
            favoritedPosts.map((post) => (
            <p key={post.id}>
              <a
                href={`/blog/${post.id.replace(/-/g, "/")}`}
                className="text-blue-200 bg-inherit"
              >
                - {post.title
                  .replace(/-/g, "/")
                }
              </a>
            </p>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
