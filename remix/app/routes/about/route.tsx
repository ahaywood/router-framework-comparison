import { Outlet } from "@remix-run/react";

export default function AboutLayout() {
  return (
    <div className="border-2 border-purple-500 m-2 p-2">
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
}
