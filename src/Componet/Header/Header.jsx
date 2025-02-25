import React, { useState } from "react";
import "./header.css";
import image from "../../assets/image/tran1.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger Icon
import CloseIcon from "@mui/icons-material/Close"; // Close Icon for mobile menu

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-outer">
      <div className="header-component">
        {/* Left Side (Logo & Navigation) */}
        <div className="header-left">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <img src={image} alt="Netflix logo" width="100px" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        {/* Right Side (Icons) */}
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>TV Shows</li>
            <li onClick={toggleMenu}>Movies</li>
            <li onClick={toggleMenu}>Latest</li>
            <li onClick={toggleMenu}>My List</li>
            <li onClick={toggleMenu}>Browse by Language</li>
          </ul>
        </div>
      )}
    </div>
  );
}
