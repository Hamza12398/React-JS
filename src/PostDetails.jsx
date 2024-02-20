import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { postsContext } from "./Contexts/PostsContext";
import { useContext } from "react";

export default function PostDetails() {
  const { postId } = useParams();
  const posts = useContext(postsContext);
  const post = posts.find((p) => {
    return p.id === parseInt(postId);
  });
  // console.log(post);
  return (
    <>
      <h1>This is Posts Details</h1>
      <h1 style={{ color: "red" }}>{post.title}</h1>
      <h2 style={{ color: "red" }}>{post.body}</h2>
      <Link to="/Post">
        <button
          style={{ fontSize: "40px", borderRadius: "20px", width: "150px" }}
        >
          Back
        </button>
      </Link>
    </>
  );
}
