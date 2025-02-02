"use client"; // Menandai file ini sebagai komponen klien

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State untuk mengelola menu mobile
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Data link navigasi
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-[#a28f65] shadow-lg text-black"> {/* Updated background color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo di sebelah kiri */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/assets/img/wehaLogo.png"
                alt="logo WEHA"
                width={100}
                height={30}
                className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Link>
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {/* Ikon Hamburger */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Menu Desktop di sebelah kanan */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-black hover:bg-opacity-20 hover:bg-white hover:text-white rounded-md px-4 py-2 transition duration-300 font-normal"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 primary-bg"> {/* Updated background color */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-black hover:bg-opacity-20 hover:bg-white hover:text-white rounded-md px-4 py-2 transition duration-300 font-normal"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
