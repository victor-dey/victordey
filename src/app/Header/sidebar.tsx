"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { navItems } from "./navItems";
import Link from "next/link";
import ToggleButton from "./toggleButton/ToggleButton";
import SocialLinks from "./socialLinks/SocialLinks";
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
        <div className="flex flex-col pl-12 pt-20">
          <ul>
            {navItems.map((item) => (
              <li>
                <Link
                  className="text-4xl leading-normal"
                  onClick={toggleSidebarVisibility}
                  href={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex flex-row">
            <ToggleButton></ToggleButton>
            <SocialLinks></SocialLinks>
          </div>
        </div>
        {/* <div>This is the inside of the sidebar content</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
