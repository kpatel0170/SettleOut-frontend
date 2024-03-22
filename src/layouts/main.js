// MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-transparent dark:bg-gray-900">
      <div className="w-full block">
        <Navbar />
        <main>
          {children}
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
