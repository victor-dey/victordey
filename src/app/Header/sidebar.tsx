"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { navItems } from "./navItems";
import Link from "next/link";
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
          className="md:hidden fixed flex-1 top-4 right-4 bg-background text-primary p-2"
        >
          <FontAwesomeIcon size="2x" icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-background text-primary w-full transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {open && (
          <button
            onClick={toggleSidebarVisibility}
            className="md:hidden fixed flex-1 top-4 right-4 z-60 bg-background text-primary p-2"
          >
            <FontAwesomeIcon size="2x" icon={faClose}></FontAwesomeIcon>
          </button>
        )}
        <ul>
          {navItems.map((item) => (
            <li>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        {/* <div>This is the inside of the sidebar content</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
