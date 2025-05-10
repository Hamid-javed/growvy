import React, { useState, useEffect } from "react";

// Hamburger Icon SVG
const HamburgerIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// Close Icon SVG
const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/jobs", text: "Jobs" },
    { href: "/success", text: "Success" },
    { href: "/services", text: "Services" },
    { href: "/pricing", text: "Pricing" },
  ];

  // Optional: Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-green-600 sticky top-0 z-20 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Increased height slightly */}
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-3xl lg:text-4xl font-bold hover:text-green-200 transition-colors"
            >
              Growvy
            </a>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="px-3 py-2 rounded-md text-base lg:text-lg font-medium hover:bg-green-700 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <HamburgerIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-green-600 shadow-lg"
          id="mobile-menu"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className="block px-3 py-3 rounded-md text-base font-medium hover:bg-green-700 hover:text-white transition-colors text-center"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
