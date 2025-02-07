import { useState, useEffect } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-black");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "IT Services", subItems: ["Web Development", "App Development", "Cloud Computing", "Cybersecurity", "IT Consulting", "Software Testing", "DevOps Services", "Blockchain Development", "Technical Support"] },
    { name: "IT Solutions", subItems: ["Solution 1", "Solution 2", "Solution 3", "Solution 4", "Solution 5"] },
    { name: "Services", subItems: ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"] },
    { name: "Location", subItems: [] },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img src="logo.svg" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="hover:text-yellow-400 font-bold"
                  onMouseEnter={() => setOpenDropdown(index)}
                   onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                  {item.name}
                </button>
                {openDropdown === index && (
                  <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-50 md:w-[200px]">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact & Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <p className="font-bold text-xl">(800) 399-2648</p>
            <button className="bg-blue-500 rounded-lg px-4 py-1 font-bold text-white">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              <button
                className="w-full text-left font-bold py-2"
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                {item.name}
              </button>
              {openDropdown === index && (
                <div className="pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <a key={subIndex} href="#" className="block py-1 hover:text-yellow-400">
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
