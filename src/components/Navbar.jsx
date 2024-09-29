import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from "./Backdrop";

import "./Navbar.css";

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerhandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerhandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 pin-to-top">
      {drawerIsOpen && <Backdrop onClick={closeDrawerhandler} />}
      <SideDrawer show={drawerIsOpen}>
        <nav className="navigations center">
          <NavLinks onClick={closeDrawerhandler} />
        </nav>
      </SideDrawer>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <button className="nav-btn" onClick={openDrawerhandler}>
            <span />
            <span />
            <span />
          </button>
          <Link to="/" className="text-2xl font-bold">
            Berozgaar
          </Link>
        </div>
        <div className="space-x-4 hide">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
