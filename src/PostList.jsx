import { Link } from "react-router-dom";
import { postsContext } from "./Contexts/PostsContext";
import { useContext } from "react";

export default function PostList() {
  const posts = useContext(postsContext);
  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/Post/${post.id}`}>
        <div
          style={{ background: "orange", marginTop: "10px", padding: "10px" }}
        >
          <h2>{post.title}</h2>
        </div>
      </Link>
    );
  });
  return <>{postList}</>;
}
