import { NavItem } from "@/app/StandardTypes/StandardTypes";
import Link from "next/link";
import React from "react";
import SocialLinks from "./socialLinks/SocialLinks";
import ToggleButton from "./toggleButton/ToggleButton";

const navItems: NavItem[] = [
  { link: "/", label: "Home", style: " ms-1" },
  { link: "/About", label: "About", style: " ms-1" },
  { link: "/Blog", label: "Blog", style: " ms-1" },
  { link: "/Contact", label: "Contact", style: " ms-1" },
];
const Header = () => {
  return (
    <div className="md:flex hidden flex-row items-center justify-between p-4">
      <header className="w-full">
        <nav className="flex items-center justify-between">
          <div className="flex-1 flex justify-start"></div>
          <div className="flex-1 flex justify-center">
            {navItems.map((item) => (
              <Link
                className={`${item.style} hover:underline `}
                href={item.link}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex-1 flex justify-end pt-3">
            <ToggleButton></ToggleButton>
            <SocialLinks></SocialLinks>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
