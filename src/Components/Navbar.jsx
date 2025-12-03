import React, { useEffect, useRef, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (window.innerWidth < 768) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-adjust menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div
        ref={menuRef}
        className="flex items-center justify-between rounded-full bg-white/25 border border-[#feebcc] backdrop-blur-[5px] m-5 p-3 md:p-0 "
      >
        {/* Logo */}
        {/* <img src="" alt="LOGO" className="h-7 ml-6 -mb-1" /> */}
        <HashLink to="/#" smooth>
          <div className="font-bold text-xl h-7 ml-6 -mb-1 cursor-pointer">
            PaulofPh{" "}
          </div>
        </HashLink>

        {/* Hamburger Icon (Visible only on small screens) */}
        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <HashLink
                to={item.path}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsOpen(false); // close menu on mobile when link clicked
                  }
                }}
              >
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
