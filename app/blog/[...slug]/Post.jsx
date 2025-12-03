"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import MarkdownRenderer from "@/components/MarkdownRenderer";

import "katex/dist/katex.min.css";
import "./katex-custom.css";
import "@/styles/Home.module.css";
import "@/styles/globals.css";

export default function Post({ postData }) {
  const { user } = useUser();
  const [likes, setLikes] = useState(postData?.likes || 0);
  const [favorites, setFavorites] = useState(postData?.favorites || 0);
  const [comments, setComments] = useState(postData?.comments || []);
  const [newComment, setNewComment] = useState("");
  const [hasLiked, setHasLiked] = useState(postData?.hasLiked || false);
  const [hasFavorited, setHasFavorited] = useState(postData?.hasFavorited || false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  const memoizedHtml = useMemo(() => postData.contentHtml, [postData.contentHtml]);
  const postId = postData.id;

  const fetchPostMetadata = useCallback(async () => {
    if (!postId || !user) return;
    try {
      const res = await fetch(`/api/post-meta?postId=${postId}&userId=${user.sub}`);
      if (!res.ok) throw new Error("Failed to fetch post metadata");

      const { likes, favorites, comments, hasLiked, hasFavorited } = await res.json();
      setLikes(likes);
      setFavorites(favorites);
      setComments(comments);
      setHasLiked(hasLiked);
      setHasFavorited(hasFavorited);
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }, [postId, user]);

  useEffect(() => {
    fetchPostMetadata();
  }, [fetchPostMetadata]);

  const handleLike = useCallback(async () => {
    if (likeLoading || !user || !postId) return;
    setLikeLoading(true);
    try {
      const res = await fetch("/api/likes", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId: user.sub }),
      });

      if (res.ok) {
        setLikes(prev => (hasLiked ? Math.max(prev - 1, 0) : prev + 1));
        setHasLiked(!hasLiked);
      } else {
        alert("Failed to toggle like.");
      }
    } finally {
      setLikeLoading(false);
    }
  }, [postId, user, hasLiked, likeLoading]);

  const handleFavorite = useCallback(async () => {
    if (favoriteLoading || !user || !postId) return;
    setFavoriteLoading(true);
    try {
      const res = await fetch("/api/favorites", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId: user.sub }),
      });

      if (res.ok) {
        setFavorites(prev => (hasFavorited ? Math.max(prev - 1, 0) : prev + 1));
        setHasFavorited(!hasFavorited);
      } else {
        alert("Failed to toggle favorite.");
      }
    } finally {
      setFavoriteLoading(false);
    }
  }, [postId, user, hasFavorited, favoriteLoading]);

  const handleCommentSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!user || !newComment.trim() || !postId) return;

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        userId: user.sub,
        name: user.name,
        email: user.email,
        image: user.picture,
        content: newComment,
      }),
    });

    if (response.ok) {
      const newCommentData = await response.json();
      setComments(prev => [newCommentData, ...prev]);
      setNewComment("");
    } else if (response.status === 429) {
      alert("You have reached the max comments for this post.");
    } else if (response.status === 400) {
      alert("Meaningful comments must be between 20 and 100 characters.")
    } else {
      alert("Failed to add comment");
    }
  }, [newComment, postId, user]);

  const handleCommentDelete = useCallback(async (commentId) => {
    if (!user || !commentId) return;
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (!confirmDelete) return;

    const res = await fetch("/api/comments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId, userId: user.sub }),
    });

    if (res.ok) {
      setComments(prev => prev.filter(c => c.id !== commentId));
    } else {
      alert("Failed to delete comment.");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="text">
        <div className="pretty">
          <h4 className="blogheading">{postData.title}</h4>
          <h5 className="blogheading">{postData.date}</h5>

          {/* ✅ This avoids re-rendering the entire block */}
          <MarkdownRenderer html={memoizedHtml} />
        </div>

        <div className="actions">
          <button
            disabled={likeLoading}
            className={`m-2 mt-5 p-4 rounded border-none ${hasLiked ? "bg-gray-600 text-white" : "bg-zinc-500 text-white"}`}
            onClick={handleLike}
          >
            ❤️ {likes}
          </button>

          <button
            disabled={favoriteLoading}
            className={`m-2 mt-5 p-4 rounded border-none ${hasFavorited ? "bg-gray-600 text-white" : "bg-zinc-500 text-white"}`}
            onClick={handleFavorite}
          >
            💾 {favorites}
          </button>
        </div>

        <div className="comments">
          <h3>Comments ({comments.length})</h3>

          {user ? (
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="flex p-8 bg-zinc-600 w-100 rounded text-white placeholder:text-white"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                required
              />
              <button className="bg-zinc-500 mt-4 mb-2 p-4 rounded border-none text-white" type="submit">
                Post Comment
              </button>
            </form>
          ) : (
            <p>Please log in to comment.</p>
          )}

          {comments.length ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="lg:flex items-center gap-3 text-sm mr-3 mt-2 p-3 border border-gray-500 bg-gray-600 rounded"
              >
                <img src={user.picture || "/default-profile.png"} alt="User Avatar" className="w-fit mb-1 mr-2 h-fit rounded-full" />
                <div className="flex-1 mt-2">
                  <strong className="text-white text-2xl">{user.name}</strong>
                  <p className="text-white whitespace-pre-wrap break-all text-lg">{comment.content}</p>
                  <p className="text-md text-gray-300">{new Date(comment.createdAt).toLocaleString()}</p>
                </div>

                {user && comment.userId === user.sub && (
                  <button
                    className="text-2xl text-red-500 hover:text-red-600 mr-4 lg:mt-0 mt-2 bg-red-100 rounded-lg border-none cursor-pointer p-2"
                    onClick={() => handleCommentDelete(comment.id)}
                  >
                    Delete
                  </button>
                )}
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
