import { NavItem } from "@/app/StandardTypes/StandardTypes";
import Link from "next/link";
import React from "react";
const navItems: NavItem[] = [
  { link: "/", label: "Home", style: "ms-1" },
  { link: "/About", label: "About", style: "ms-1" },
  { link: "/blog", label: "Blog", style: "ms-1" },
  { link: "/contact", label: "Contact", style: "ms-1" },
];
const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-center">
      <nav className="w-max py-3 px-8 border border-solid rounded-full font-medium capitalize flex items-center">
        {navItems.map((item) => (
          <Link className={item.style} href={item.link}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
