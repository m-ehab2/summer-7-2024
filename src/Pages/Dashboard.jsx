import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <Link to="/dashboard/users" className="navbar-brand mx-2">
          Users
        </Link>
        <Link to="posts" className="navbar-brand">
          Posts
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
