import React from "react";

export default function PostsChild({ posts }) {
  if (posts.length)
    return (
      <>
        {posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </>
    );
  return <div>No Posts Found</div>;
}
