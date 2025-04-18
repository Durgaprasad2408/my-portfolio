
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
            <a href='#home'>DurgaPrasad</a>
          </span>
          
          <div className="hidden md:flex gap-1">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-purple-600 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="hidden md:flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium"
          >
            Hire Me
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-purple-50"
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <X className="h-6 w-6 text-purple-600" /> : 
              <Menu className="h-6 w-6 text-purple-600" />
            }
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'max-h-screen opacity-100 mt-4' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl p-4 space-y-2">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block text-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-lg mt-4 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
