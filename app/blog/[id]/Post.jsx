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
  const [hasLiked, setHasLiked] = useState(false);
  const [hasFavorited, setHasFavorited] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  const postId = postData.id;

  useEffect(() => {
    const fetchData = async () => {
      if (!postId) return;

      try {
        const res = await fetch(
          `/api/post-meta?postId=${postId}${user ? `&userId=${user.sub}` : ''}`
        );
        if (!res.ok) throw new Error("Failed to fetch post metadata");

        const { likes, favorites, comments, hasLiked, hasFavorited } = await res.json();
        setLikes(likes);
        setFavorites(favorites);
        setComments(comments);
        setHasLiked(hasLiked);
        setHasFavorited(hasFavorited);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [postId, user]);

  const handleLike = async () => {
    if (likeLoading || !user || !postId) return;
    setLikeLoading(true);
    try {
      const res = await fetch("/api/likes", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId: user.sub }),
      });

      if (res.ok) {
        if (hasLiked) {
          setLikes((prev) => Math.max(prev - 1, 0));
          setHasLiked(false);
        } else {
          setLikes((prev) => prev + 1);
          setHasLiked(true);
        }
      } else {
        alert("Failed to toggle like.");
      }
    } finally {
      setLikeLoading(false);
    }
  };

  const handleFavorite = async () => {
    if (favoriteLoading || !user || !postId) return;
    setFavoriteLoading(true);
    try {
      const res = await fetch("/api/favorites", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId: user.sub }),
      });

      if (res.ok) {
        if (hasFavorited) {
          setFavorites((prev) => Math.max(prev - 1, 0));
          setHasFavorited(false);
        } else {
          setFavorites((prev) => prev + 1);
          setHasFavorited(true);
        }
      } else {
        alert("Failed to toggle favorite.");
      }
    } finally {
      setFavoriteLoading(false);
    }
  };

  const handleCommentSubmit = async (e) => {
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
      setComments((prev) => [newCommentData, ...prev]);
      setNewComment("");
    } else if (response.status === 429) {
      alert("You have reached the max comments for this post.");
    } else {
      alert("Failed to add comment");
    }
  };

  const handleCommentDelete = async (commentId) => {
    if (!user || !commentId) return;
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (!confirmDelete) return;

    const res = await fetch("/api/comments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId, userId: user.sub }),
    });

    if (res.ok) {
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } else {
      alert("Failed to delete comment.");
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="text">
        <div className="pretty">
          <h3 className="blogheading">{postData.title}</h3>
          <p className="blogheading">{postData.date}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>

        <div className="actions">
          <button
            disabled={likeLoading}
            className={`m-2 mt-5 p-1 rounded ${
              hasLiked ? "bg-gray-600 text-white" : "bg-zinc-500 text-white"
            }`}
            onClick={handleLike}
          >
            ❤️ {likes}
          </button>

          <button
            disabled={favoriteLoading}
            className={`m-2 mt-5 p-1 rounded ${
              hasFavorited ? "bg-gray-600 text-white" : "bg-zinc-500 text-white"
            }`}
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
                className="flex p-8 bg-zinc-600 w-100 rounded text-white"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                required
              />
              <button className="bg-zinc-500 mt-2 mb-2 p-2 rounded text-white" type="submit">
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
                className="flex items-start gap-3 text-sm mr-3 mt-2 p-3 border border-gray-500 bg-gray-600 rounded"
              >
                {/* {comment.userImage ? (
                  <img
                    src={comment.userImage}
                    alt={`${comment.userName}'s profile`}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm">
                    {comment.userName?.[0] || "?"}
                  </div>
                )} */}

                <div className="flex-1">
                  <strong className="text-white">{user.name}</strong>
                  <p className="text-white whitespace-pre-wrap break-all">{comment.content}</p>
                  <p className="text-xs text-gray-300">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>

                {user && (
                  <button
                    className="text-xd ml-2"
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
