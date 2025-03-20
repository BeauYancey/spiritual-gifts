import { useState } from "react";
import MenuIcon from "../assets/menu.svg?react"
import { Link } from "@tanstack/react-router";

export default function Navbar() {
	const [navbarState, setNavbarState] = useState('closed')
	return (
		<>
			<nav className={navbarState}>
				<button id='nav-toggle' className={`nav-${navbarState}`} onClick={() => setNavbarState(prev => prev === 'closed' ? 'open' : 'closed')}>
					<MenuIcon />
				</button>
				<div className='nav-content'>
					<Link to='/quiz'>Quiz</Link>
					<Link to='/'>Learn More</Link>
					<Link to='/commit'>Commit to Growth</Link>
				</div>
			</nav>
		</>
	);
}