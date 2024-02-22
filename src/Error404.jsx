import { Link } from "react-router-dom";
export default function Errro() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button style={{ fontSize: "30px" }}>Retun Home Page</button>
      </Link>
    </>
  );
}
