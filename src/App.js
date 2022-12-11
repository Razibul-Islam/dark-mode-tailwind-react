import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(null);

  // This is default windows theme detected

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

// This is user toggle change

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // console.log(document.documentElement);
    } else {
      document.documentElement.classList.remove("dark");
      // console.log(document.documentElement);
    }
  }, [theme]);

  // This onclick toggle

  const handleDark = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-black h-screen">
      <p
        onClick={handleDark}
        className="text-dark dark:text-white flex justify-center items-center h-full text-7xl"
      >
        Hey i am dark mode
      </p>
    </div>
  );
}

export default App;
