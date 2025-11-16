import React, { useState } from "react";
import logo from '../assets/img/logo.png'
import './navbar.css'
import { usePrivy } from "@privy-io/react-auth";
import Connect from "./Connect";
import Disconnect from "./Disconnect";

const Navbar = () => {
 const { ready, authenticated, user } = usePrivy();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="py-3 px-4 lg:px-12 z-50 fixed top-0 left-0 w-full shadow-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between lg:bg-gradient-to-r lg:from-[#0a2f2a]/40 lg:to-[#0d3d35]/40 lg:backdrop-blur-sm lg:border lg:border-cyan-500/30 lg:rounded-full px-4 lg:px-6 py-3 lg:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="ARC Logo" className="w-full h-8 lg:w-full lg:h-10" />
            
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 text-white text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200">About Us</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Education Hub</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200">Services</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {authenticated && (
              <div className="text-sm font-bold px-3 py-2 rounded-2xl bg-white text-green-400">
                {user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : ''}
              </div>
            )}
            {authenticated ? <Disconnect /> : <Connect />}
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 z-50 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-gradient-to-b from-[#0a2f2a] to-[#051b17] border-r border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo in Sidebar */}
          <div className="flex items-center gap-2 mb-10 pb-6 border-b border-cyan-500/20">
            <img src={logo} alt="ARC Logo" className="w-10 h-10" />
            <div className="flex flex-col leading-none">
              <span className="text-xs text-cyan-400 font-light">The Agentic</span>
              <span className="text-xl font-bold text-white">ARC</span>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-5 mb-8 text-white">
            <a 
              href="#" 
              onClick={closeMenu}
              className="text-base hover:text-cyan-400 transition-colors duration-200 py-2 border-b border-cyan-500/10 hover:border-cyan-400/30"
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={closeMenu}
              className="text-base hover:text-cyan-400 transition-colors duration-200 py-2 border-b border-cyan-500/10 hover:border-cyan-400/30"
            >
              About Us
            </a>
            <a 
              href="#" 
              onClick={closeMenu}
              className="text-base hover:text-cyan-400 transition-colors duration-200 py-2 border-b border-cyan-500/10 hover:border-cyan-400/30"
            >
              Education Hub
            </a>
            <a 
              href="#" 
              onClick={closeMenu}
              className="text-base hover:text-cyan-400 transition-colors duration-200 py-2 border-b border-cyan-500/10 hover:border-cyan-400/30"
            >
              Services
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-auto">
            {authenticated && (
              <div className="text-sm font-bold px-3 py-2 rounded-2xl bg-white text-green-400 text-center">
                {user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : ''}
              </div>
            )}
            {authenticated ? <Disconnect /> : <Connect />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar