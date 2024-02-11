import React, { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./context/Context";

const App = () => {
  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-slate-200 dark:bg-gray-900">
        <div className="w-full">
          <div className="w-full py-6 mb-4 shadow-lg fixed inset-x-0 bg-white dark:bg-gray-900">
            <div className="w-3/4 mx-auto flex justify-between text-black dark:text-white ">
              <div className="uppercase font-sans font-semibold tracking-tight">
                Theme Switcher
              </div>
              <ThemeBtn />
            </div>
          </div>

          <div className="mx-auto w-3/4 flex flex-wrap gap-5 justify-between pt-20">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
