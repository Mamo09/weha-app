// src/app/components/Header.tsx  
"use client"; // Menandai file ini sebagai komponen klien  
  
import { useState } from 'react';  
import Link from 'next/link';  
  
const Navbar: React.FC = () => {  
  const [isOpen, setIsOpen] = useState<boolean>(false); // State untuk mengelola menu mobile  
  
  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  
  
  // Data link navigasi  
  const navLinks = [  
    { name: 'Home', path: '/' },  
    { name: 'Blog', path: '/blog' },  
    { name: 'Service', path: '/service' },  
    { name: 'About', path: '/about' },  
    { name: 'Contact', path: '/contact' },  
  ];  
  
  return (  
    <nav className="bg-gray-800 shadow-lg">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="flex justify-between items-center h-16">  
          {/* Logo di sebelah kiri */}  
          <div className="flex-shrink-0">  
            <h1 className="text-2xl font-bold text-white">Logo</h1>  
          </div>  
  
          {/* Tombol Hamburger untuk Mobile */}  
          <div className="flex md:hidden">  
            <button onClick={toggleMenu} className="text-white focus:outline-none">  
              {/* Ikon Hamburger */}  
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />  
              </svg>  
            </button>  
          </div>  
  
          {/* Menu Desktop di sebelah kanan */}  
          <div className="hidden md:flex md:items-center md:space-x-4">  
            {navLinks.map((link) => (  
              <Link key={link.name} href={link.path} className="text-white hover:bg-gray-600 rounded-md px-3 py-2 transition duration-200">  
                {link.name}  
              </Link>  
            ))}  
          </div>  
        </div>  
      </div>  
  
      {/* Menu Mobile */}  
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>  
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">  
          {navLinks.map((link) => (  
            <Link key={link.name} href={link.path} className="block text-white hover:bg-gray-600 rounded-md px-3 py-2 transition duration-200">  
              {link.name}  
            </Link>  
          ))}  
        </div>  
      </div>  
    </nav>  
  );  
};  
  
export default Navbar;  
