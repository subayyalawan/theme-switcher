import React from "react";
import useTheme from "../context/Context";

const ThemeBtn = () => {
  const { theme, darkTheme, lightTheme } = useTheme();

  const handleThemeChange = (e) => {
    const isDarkTheme = e.target.value;
    console.log(isDarkTheme);
    if (isDarkTheme === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={theme}
        className="sr-only peer"
        onChange={handleThemeChange}
        checked={theme === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-1 peer-focus:ring-4 peer-focus:ring-transparent dark:peer-focus:ring-transparent rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white capit">
        {theme === "dark" ? "Light" : "Dark"} Theme
      </span>
    </label>
  );
};

export default ThemeBtn;
