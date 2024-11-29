import React, { useState } from "react";

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol menu

  const toggleMenu = () => setIsOpen(!isOpen); // Fungsi untuk toggle menu

  return (
    <>
      <div className="flex flex-row w-screen h-14 items-center justify-between lg:justify-around font-inter font-medium text-xs lg:text-lg bg-appGreen-900 text-primary px-4">
        {/* Brand Name */}
        <p className="text-lg font-bold">Aditya Wiranata</p>
        
        {/* Hamburger Button */}
        <button
          className="lg:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
          </div>
        </button>

        {/* Menu for larger screens */}
        <span className="hidden lg:flex">
          <a href="#" className="hover:scale-125 my-5 mr-2 lg:mr-5">About</a>
          <a href="#" className="hover:scale-125 my-5 mr-2 lg:mr-5">Project</a>
          <a href="#" className="hover:scale-125 my-5 mr-2 lg:mr-5">Contact</a>
        </span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-appGreen-900 text-primary flex flex-col items-center py-4">
          <a href="#" className="hover:scale-110 my-2">About</a>
          <a href="#" className="hover:scale-110 my-2">Project</a>
          <a href="#" className="hover:scale-110 my-2">Contact</a>
        </div>
      )}

      {/* Content below Navbar */}
      <div>{children}</div>
    </>
  );
}
