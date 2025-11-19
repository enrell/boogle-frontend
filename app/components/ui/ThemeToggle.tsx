import { IoMoon, IoSunny, IoDesktopOutline } from "react-icons/io5";
import { useTheme } from "../theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-boogle-dark-lighter text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 outline-none focus:border-gray-300 dark:focus:border-gray-500"
      title={`Current theme: ${theme}`}
      aria-label="Toggle theme"
    >
      {theme === "light" && <IoSunny className="w-5 h-5" />}
      {theme === "dark" && <IoMoon className="w-5 h-5" />}
      {theme === "system" && <IoDesktopOutline className="w-5 h-5" />}
    </button>
  );
}
