import { useEffect, useState } from "react";

export const ThemePreference = () => {
  const [theme, setTheme] = useState("light");

  const setThemePreference = (mode) => {
    window.localStorage.setItem("themePref", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setThemePreference("light") : setThemePreference("dark");
  };

  useEffect(() => {
    const savedThemePref = window.localStorage.getItem("themePref");
    savedThemePref === "dark"
      ? setThemePreference("dark")
      : setThemePreference("light");
  }, []);

  return [theme, toggleTheme];
};
