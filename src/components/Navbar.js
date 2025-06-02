"use client";
import React, { useState } from "react";
import { FaHome, FaSearch, FaInstagram, FaDiscord, FaGithub, FaBlogger } from "react-icons/fa"; // Importing icons from React Icons
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const navLinks = [
      { name: "Home", icon: <FaHome className="h-5 w-5 text-teal-400" />, href: "/" },
      { name: "Blogs", icon:  <FaBlogger className="h-5 w-5 text-teal-400" />, href: "/blogs" },
      { name: "Projects", icon: <FaSearch className="h-5 w-5 text-teal-400" />, href: "/projects" },
      { name: "About", icon: <IoPersonSharp className="h-5 w-5 text-teal-400" />, href: "/about" },
    ];
  
    const socialLinks = [
      { name: "Instagram", icon: <FaInstagram className="h-5 w-5 text-white" />, href: "#" },
      { name: "Discord", icon: <FaDiscord className="h-5 w-5 text-white" />, href: "#" },
      { name: "GitHub", icon: <FaGithub className="h-5 w-5 text-white" />, href: "#" },
    ];
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    return (
      <div  className="sticky top-0 left-0 w-full z-50">
        <div className="w-full  bg-[#00516b] border-white border-b-2 py-4 px-6 flex items-center justify-between relative">
          <div className="flex items-center">
            <span className="text-teal-400 font-mono text-xl mr-2">&lt;C/&gt;</span>
            <span className="text-white text-xl font-semibold hover:text-teal-400 transition-colors duration-300 cursor-pointer">
              Tanvir 
            </span>
          </div>
  
          <div className="md:hidden flex items-center absolute top-4 right-4 z-50">
            <button onClick={toggleMenu} className="text-white focus:outline-none relative">
              <div
                className={`h-1 w-6 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <div
                className={`h-1 w-6 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <div
                className={`h-1 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
  
          {/* Desktop Navbar links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-teal-400 hover:text-teal-300 hover:scale-110  transition-all duration-300 flex items-center"
              >
               
                <span className="scale-110 mx-2 translate-y-0.5">{link.name}</span>
                {link.icon && <span className="mr-2">{link.icon}</span>}
              </Link>
            ))}
  
            {/* Search input */}
            <div className="relative">
              <input
                type="text"
                className="bg-white rounded-full py-1 px-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 w-44"
                placeholder="Search..."
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch className="h-4 w-4" />
              </span>
            </div>
  
            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">


<SocialLinksA />




</div>

          </div>
        </div>
  
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 backdrop-blur-sm transition-transform duration-300 z-40 px-6 py-4 flex items-center justify-center`}
        >
          <div className="space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className=" text-teal-400 hover:text-teal-300 py-2 flex items-center justify-center"
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                <span>{link.name}</span>
              </a>
            ))}
  
            <div className="flex flex-col items-center mt-4 space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className=" text-teal-400 hover:text-teal-300 flex items-center justify-center"
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SocialLinksA = ()=>{
    
  return (
  socialLinks.map((link) => (
    <div key={link.name} className="group relative">
      <a
        href={link.href}
        className="transition-transform duration-300 transform hover:scale-110 hover:text-teal-300 flex items-center"
      >
          <span className="">{link.icon}</span>
        <span className="ml-2 group-hover:opacity-100 transition-all duration-300 text-teal-300 hover:text-white">
          {link.name}
        </span>
      </a>
    </div>
  ))
)
}