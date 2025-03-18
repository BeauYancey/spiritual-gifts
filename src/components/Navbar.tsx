import { useState } from "react";
import MenuIcon from "../assets/menu.svg?react"

export default function Navbar() {
	const [navbarState, setNavbarState] = useState('closed')
	return (
		<>
			<nav className={navbarState}>
				<button id='nav-toggle' className={`nav-${navbarState}`} onClick={() => setNavbarState(prev => prev === 'closed' ? 'open' : 'closed')}>
					<MenuIcon />
				</button>
				<div className='nav-content'>
					<a href='/'>Quiz</a>
					<a href='/'>Learn More</a>
					<a href='/'>Commit to Growth</a>
				</div>
			</nav>
		</>
	);
}