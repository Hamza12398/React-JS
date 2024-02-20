import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import { postsContext } from "./Contexts/PostsContext";

function App() {
  let postData = [
    {
      id: 1,
      title: "First Post",
      body: "This is Body For Each Title",
    },
    {
      id: 2,
      title: "Second Post",
      body: "This is Body For Each Title and Body",
    },
    {
      id: 3,
      title: "Third Post",
      body: "This is Body For Each Title and Body  and Body",
    },
    {
      id: 4,
      title: "Fourth Post",
      body: "This is Body For Each Title and Body  and Body and Body",
    },
  ];
  return (
    <postsContext.Provider value={postData}>
      <div className="App">
        <div>
          <Link to="/">
            <button style={{ fontSize: "40px" }}>Home</button>
          </Link>

          <Link to="/Hello">
            <button style={{ fontSize: "40px" }}>Hello</button>
          </Link>

          <Link to="/Post">
            <button style={{ fontSize: "40px" }}>Posts</button>
          </Link>
        </div>
        {/* ROUTER */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<PostList />} />
          <Route path="/Hello" element={<Hello />} />
          <Route path="/PostDetails/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}
export default App;
