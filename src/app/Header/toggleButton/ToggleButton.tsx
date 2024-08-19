"use client";
import React, { useEffect, useState } from "react";

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
      <button onClick={toggleTheme}>ThemeSwitcher</button>
    </div>
  );
};

export default ToggleButton;
