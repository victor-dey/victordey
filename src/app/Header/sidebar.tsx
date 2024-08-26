"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  function toggleSidebarVisibility() {
    setOpen(!open);
  }
  return (
    <div className="flex h-full items-center">
      <div>
        <button
          onClick={toggleSidebarVisibility}
          className="md:hidden fixed flex-1 top-4 right-4 z-50 bg-background text-primary p-2"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      <div className=" flex-1 pt-5 items-center justify-between p-4">
        <h1>this is the sidebar</h1>
        <h4>This is the content</h4>
        <ul>
          <li>First link</li>
          <li>Second Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
