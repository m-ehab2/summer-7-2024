import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ itemCount }) {
  console.log({ itemCount });
  return (
    <div>
      <nav className="navbar bg-body-secondary">
        <div className="container-fluid">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-brand text-danger" : "navbar-brand"
            }
          >
            Home
          </NavLink>
          <ul className="navbar-nav d-flex w-75 flex-row">
            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link-danger" : "link-dark"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "link-danger" : "link-dark"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "link-danger" : "link-dark"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "link-danger" : "link-dark"
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "link-danger" : "link-dark"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div className="badge badge-secondary">{itemCount}</div>
        </div>
      </nav>
    </div>
  );
}
