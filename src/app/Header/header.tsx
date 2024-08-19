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
    <div className="flex flex-row items-center justify-center p-4">
      <nav className="flex flex-row sticky">
        {navItems.map((item) => (
          <Link className={`${item.style} hover:underline`} href={item.link}>
            {item.label}
          </Link>
        ))}
        <div>
          <ToggleButton></ToggleButton>
        </div>
        <div className="">
          <SocialLinks></SocialLinks>
        </div>
      </nav>
      <header></header>
    </div>
  );
};

export default Header;
