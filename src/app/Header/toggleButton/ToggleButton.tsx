"use client";
import React, { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-color-scheme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  }
  return (
    <div>
      <button
        className="me-1 link-base hover:scale-105 transition-all ease duration-200"
        onClick={toggleTheme}
      >
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          size="lg"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ToggleButton;
