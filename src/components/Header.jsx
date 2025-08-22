import { useState } from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm transition-all duration-300" id="header">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="gradient-text">Durga</span><span className="text-gray-800">Prasad</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-gray-700">Home</a>
            <a href="#about" className="nav-link text-gray-700">About</a>
            <a href="#education" className="nav-link text-gray-700">Education</a> 
            <a href="#skills" className="nav-link text-gray-700">Skills</a>
            <a href="#projects" className="nav-link text-gray-700">Projects</a>
            <a href="#contact" className="nav-link text-gray-700">Contact</a>
          </nav>
          
          <div className={`md:hidden hamburger ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <div className="md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden" style={{ maxHeight: mobileOpen ? '500px' : '0' }} id="mobile-menu">
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a href="#home" className="text-gray-700 hover:text-primary transition py-2">Home</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition py-2">About</a>
          <a href="#skills" className="text-gray-700 hover:text-primary transition py-2">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-primary transition py-2">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-primary transition py-2">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition py-2">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;