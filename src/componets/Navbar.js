import React, { useState } from 'react';
import Logo from './assets/Logo.jpg';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Build Africa" className="w-16 h-auto object-contain rounded-lg" />
          <span className="bg-gradient-to-r from-white via-yellow-400 to-green-500 bg-clip-text text-transparent text-2xl font-bold ml-3">
            Build Africa
          </span>
        </div>
        </Link>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-green-400 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/programs">Programs</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/gallary">Gallary</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="donate">Donate</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-red-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 text-center bg-black py-4">
          <li className="hover:text-green-400 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/programs">Programs</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/gallary">Gallary</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-green-400 text-white">
            <Link to="donate">Donate</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
