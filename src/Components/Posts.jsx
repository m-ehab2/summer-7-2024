import React, { useEffect, useState } from "react";
import PostsChild from "./PostsChild";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log({ data });

        // const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/posts"
        // );
        // console.log(response);
        // if (response.status !== 200) throw new Error("Failed to fetch data");
        // const data = await response.json();
        // console.log("Succeed");
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  // get : for getting data
  // post : for adding data
  // delete : for deleting data
  // put - patch : for updating data
  return (
    <div>
      {loading ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <div>
          <PostsChild posts={posts} />
          <button onClick={() => setCounter((prev) => prev + 1)}>
            {counter}
          </button>
        </div>
      )}
    </div>
  );
}
