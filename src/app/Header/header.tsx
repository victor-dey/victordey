import Link from "next/link";
import React from "react";
import SocialLinks from "./socialLinks/SocialLinks";
import ToggleButton from "./toggleButton/ToggleButton";
import { navItems } from "./navItems";

const Header = () => {
  return (
    <div className="md:flex hidden flex-row items-center justify-between p-4">
      <header className="w-full">
        <nav className="flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link
              className=" hover:underline link-base text-xl font-semibold"
              href={"/"}
            >
              {"Home"}
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="flex flex-row justify-start">
              {navItems.map((item) => (
                <li>
                  <Link
                    className="ms-5 text-xl hover:underline link-base font-semibold"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-end">
            <ToggleButton></ToggleButton>
            <SocialLinks></SocialLinks>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
