import React, { useContext } from "react";
import SidebarContent from "./SidebarContent";
import { SidebarContext } from "../../context/SidebarContext";

function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-50"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden transform transition-transform duration-150 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}

export default MobileSidebar;
