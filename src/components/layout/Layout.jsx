import React, { useContext } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AuthContext } from "../../Context/AuthContext";

const Layout = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
