import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full text-white py-4 z-50 backdrop-blur-md bg-black bg-opacity-30" data-aos="fade-down">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <a href="#about" className="hover:text-primary transition">Paul's Portfolio</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#tech" className="hover:text-primary transition">Tech Stack</a>
          <a href="#work" className="hover:text-primary transition">Experience</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#education" className="hover:text-primary transition">Education</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4">
          <a href="#about" className="hover:text-primary" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#tech" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Tech Stack</a>
          <a href="#work" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" className="hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

