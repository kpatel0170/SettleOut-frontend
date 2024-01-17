import React from "react";
import Navbar from "../components/Navbar";
// import Sidebar from '../components/Header/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-auto h-auto">
        {/* <Sidebar /> */}
        <div className="grow">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
