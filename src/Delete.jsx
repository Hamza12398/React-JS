import { Link } from "react-router-dom"

export default function Delete() {
  return(
    <>
      <div>
        <h1>Deleting Successfuly</h1>
        <Link to="/Post">
          <button>
            Back To Posts
          </button>
        </Link>
      </div>
    </>
  )
}