import React from "react";
import SidebarContent from "./SidebarContent";

function DesktopSidebar(props) {
  return (
    <aside className="z-30 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block flex-shrink-0">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
