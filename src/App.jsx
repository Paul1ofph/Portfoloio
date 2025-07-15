import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ViewallWorks from "./Pages/ViewallWorks";
import AnimatedCursor from "react-animated-cursor";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      {/* Toggle Button */}
      <div className="p-4 flex justify-end">
        {/* Floating Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-lg hover:scale-105 transition-transform"
          title="Toggle Theme"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={27}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#F6A64F',
          borderRadius: '30px 30px 0px 30px',
        }}
        outerStyle={{
          border: '3px solid #F6A64F',
          borderRadius: '30px 30px 0px 30px',
          backgroundColor: 'transparent',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
        showSystemCursor={true}
      />

      {/* Router Pages */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewall" element={<ViewallWorks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
