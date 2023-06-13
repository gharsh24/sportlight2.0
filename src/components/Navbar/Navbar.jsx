import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div>
			<h3>LOGO</h3>
			</div>
			
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Stories</a>
				<a href="/#">Community</a>
				<a href="/#">Subscribe</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

			
		</header>
	);
}

export default Navbar;