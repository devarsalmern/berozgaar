import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const NavLinks = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <React.Fragment>
      <NavLink to="/" className="hover:underline side-drawer-display">
            Home
          </NavLink>
          <NavLink to="/jobs" className="hover:underline side-drawer-display">
            Jobs
          </NavLink>
          <NavLink to="/about" className="hover:underline side-drawer-display">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:underline side-drawer-display">
            Contact
          </NavLink>
          {isAuthenticated ? (
            <>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 side-drawer-display"
              >
                Logout
              </button>
              <NavLink to="/profile" className="hover:underline side-drawer-display">
                Profile
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 side-drawer-display"
            >
              Login
            </NavLink>
          )}
    </React.Fragment>
  );
};

export default NavLinks;
