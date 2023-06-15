import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header style={{ fontFamily: "'Titillium Web', sans-serif" }}>
      <div>
        <h3
          style={{
            fontFamily: "'Kaushan Script', cursive",
            fontSize: "1.8rem",
          }}
        >
          Sportslight{" "}
        </h3>
      </div>

      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#stories">Stories</a>
        <a href="#upcoming">Upcoming Events</a>
        <a href="#subscribe">Subscribe</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
