import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <div style={{ background: "orangered", width: "100%" }}>
        <h1>Posts</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div style={{ background: "orangered", width: "100%" }}>
        <h1>Posts</h1>
      </div>
    </>
  );
}
