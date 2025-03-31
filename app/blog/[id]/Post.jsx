"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import "katex/dist/katex.min.css";
import "./katex-custom.css";
import "@/styles/Home.module.css";
import "@/styles/globals.css";

export default function Post({ postData }) {
  const { user } = useUser();
  const [likes, setLikes] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const postId = postData.id;

  useEffect(() => {

    const fetchData = async () => {
      if (!postId) return;

      try {
        const res = await fetch(`/api/post-meta?postId=${postId}`);
        if (!res.ok) throw new Error("Failed to fetch post metadata");

        const { likes, favorites, comments } = await res.json();
        setLikes(likes);
        setFavorites(favorites);
        setComments(comments);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [postId]);

  const handleLike = async () => {
    if (!user) return alert("Login to like this post");
    if (!postId) return alert("Post ID not found");

    const res = await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        userId: user.sub,
        name: user.name,
        email: user.email,
      }),
    });

    if (res.ok) {
      setLikes((prev) => prev + 1);
    } else if (res.status === 409) {
      alert("You already liked this post.");
    } else {
      alert("Failed to like post.");
    }
  };

  const handleFavorite = async () => {
    if (!user) return alert("Login to favorite this post");
    if (!postId) return alert("Post ID not found");
  
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        userId: user.sub,
        name: user.name,
        email: user.email,
      }),
    });
  
    if (res.ok) {
      setFavorites((prev) => prev + 1);
    } else if (res.status === 409) {
      alert("You already favorited this post.");
    } else {
      alert("Failed to favorite post.");
    }
  };  

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login to comment");
    if (!newComment.trim()) return;
    if (!postId) return alert("Post ID not found");

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        userId: user.sub,
        name: user.name,
        email: user.email,
        content: newComment,
      }),
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments((prev) => [newCommentData, ...prev]);
      setNewComment("");
    } else if (response.status === 429) {
      alert("You have reached the max comments for this post.");
    } else {
      alert("Failed to add comment");
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="text">
        <div className="pretty">
          <h1 className="blogheading">{postData.title}</h1>
          <p className="blogheading">{postData.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>

        <div className="actions">
          <button className = "m-2 mt-5 bg-zinc-500 p-1" onClick={handleLike}> ❤️ {likes}</button>
          <button className = "m-2 mt-5 bg-zinc-500 p-1" onClick={handleFavorite}> 💾 {favorites}</button>
        </div>

        <div className="comments">
          <h3>Comments ({comments.length})</h3>

          {user ? (
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className = "flex p-8 bg-zinc-600"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment.."
                required
              />
              <button className = "bg-zinc-500 mt-2 mb-2 p-2" type="submit">Post Comment</button>
            </form>
          ) : (
            <p>Please log in to comment.</p>
          )}

          {comments.length ? (
            comments.map((comment) => (
              <div className="text-12 mr-3 p-3 border-gray-200 bg-gray-600" key={comment.id}>
                <strong>{user.name}</strong>{" "}
                <p className=""> {comment.content} </p>
                <p className="text-sm text-gray-400">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
