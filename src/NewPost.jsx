import { Link } from "react-router-dom"

export default function NawPost() {
  return(
    <>
      <div>
        <h1>New Post</h1>
        <Link to="/Post">
          <button>
            Back To Posts
          </button>
        </Link>
      </div>
    </>
  )
}