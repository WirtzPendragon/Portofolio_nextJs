import React, { useState } from "react";

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen); 

  return (
    <>
    <nav>


      <div className="flex flex-row w-screen h-14 items-center justify-between lg:justify-around font-inter font-medium text-xs lg:text-lg bg-appGreen-900 text-primary px-4">

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

        <span className="hidden lg:flex">
          <a href="#section-about" className="hover:scale-125 my-5 mr-2 lg:mr-5">About</a>
          <a href="#project" className="hover:scale-125 my-5 mr-2 lg:mr-5">Project</a>
          <a href="#section-contact" className="hover:scale-125 my-5 mr-2 lg:mr-5">Contact</a>
        </span>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-appGreen-900 text-primary flex flex-col items-center py-4">
          <a href="#section-about" className="hover:scale-110 my-2">About</a>
          <a href="#project" className="hover:scale-110 my-2">Project</a>
          <a href="#section-contact" className="hover:scale-110 my-2">Contact</a>
        </div>
      )}
          </nav>


      <div>{children}</div>
    </>
  );
}
