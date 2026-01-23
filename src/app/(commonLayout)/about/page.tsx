"use client";

import { useEffect, useState } from "react";
import { getBlog } from "@/actions/blog.action";
import { BlogPost } from "@/types/blog.types";

export default function AboutPage() {
  const [data, setData] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await getBlog();
        setData(result.data || result);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
              <small>
                Views: {post.views} | Status: {post.status} | Published:{" "}
                {post.published ? "Yes" : "No"}
              </small>
            </p>
            <p>
              Tags:{" "}
              {post.tags && post.tags.length > 0
                ? post.tags.join(", ")
                : "No tags available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
