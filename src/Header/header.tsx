import { NavItem } from "@/app/StandardTypes/StandardTypes";
import Link from "next/link";
import React from "react";
import SocialLinks from "./socialLinks/SocialLinks";
import ToggleButton from "./toggleButton/ToggleButton";

const navItems: NavItem[] = [
  { link: "/", label: "Home", style: "ms-1" },
  { link: "/About", label: "About", style: "ms-1" },
  { link: "/blog", label: "Blog", style: "ms-1" },
  { link: "/contact", label: "Contact", style: "ms-1" },
];
const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-center">
      <nav className="w-max py-3 px-8 border border-solid rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        {navItems.map((item) => (
          <Link className={`${item.style} hover:underline`} href={item.link}>
            {item.label}
          </Link>
        ))}
        <ToggleButton></ToggleButton>
      </nav>
      <div className="absolute right-0 flex space-x-4 mt-4 mr-4">
        <SocialLinks></SocialLinks>
      </div>
    </header>
  );
};

export default Header;
