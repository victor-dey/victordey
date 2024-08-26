import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-primary py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Victor Dey. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
