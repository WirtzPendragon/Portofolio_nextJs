import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button 
                onClick={handleClick} 
                className="flex flex-col justify-center items-center h-12 w-12 border-2 border-black rounded"
            >
                <span className={`block h-1 w-6 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}`}></span>
                <span className={`block h-1 w-6 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-1 w-6 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'}`}></span>
            </button>

            {isOpen && (
                <nav className="absolute bg-white shadow-lg mt-2 rounded">
                    <ul className="flex flex-col">
                        <li className="p-2 hover:bg-gray-200">Home</li>
                        <li className="p-2 hover:bg-gray-200">About</li>
                        <li className="p-2 hover:bg-gray-200">Services</li>
                        <li className="p-2 hover:bg-gray-200">Contact</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;