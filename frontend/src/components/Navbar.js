import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css'; // Fixed double slash in path

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();
    
    // If we're already on the page that contains the section, just scroll
    if (location.pathname === path) {
      scrollToSection(sectionId);
    } else {
      // Otherwise navigate to the page, then scroll after it loads
      window.location.href = `${path}#${sectionId}`;
    }
  };

  // const openPopup = (e) => {
  //   e.preventDefault();
  //   // Add your popup logic here
  //   console.log('Popup opened');
  // };

  const handleLogin = () => {
    navigate('/auth'); // Navigate to auth page
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    const searchQuery = e.target.search.value;
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743159137/logo-img_cauqun.png" alt="KHWAB Boutique" />
        </Link>
      </div>

      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search products..." name="search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="/#home" onClick={(e) => handleNavigation(e, '/', 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="/#collections" onClick={(e) => handleNavigation(e, '/', 'collections')}>
              Collections
            </a>
          </li>
          <li>
            <a href="/#about" onClick={(e) => handleNavigation(e, '/', 'about')}>
              About Us
            </a>
          </li>
          <li>
            <a href="/#services" onClick={(e) => handleNavigation(e, '/', 'services')}>
              Service
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={(e) => handleNavigation(e, '/', 'services')}>
              Contact
            </a>
          </li>
          {/* <li>
            <button 
              className="nav-link-button" 
              onClick={openPopup}
            >
              Contact
            </button>
          </li> */}
          <li>
            <button 
              className="login-btn" 
              onClick={handleLogin}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
