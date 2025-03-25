import { useState } from "react";
import MenuIcon from "../assets/menu.svg?react"
import { Link } from "@tanstack/react-router";
import { useService } from "./QuizContextProvider";

export default function Navbar() {
	const [navbarState, setNavbarState] = useState('closed')
	const service = useService()

	function getLink() {
		try {
			const gifts = service.getGifts()
			if (gifts.top.length > 0) {
				return <Link to='/quiz/results'>Results</Link>
			} else {
				return <Link to='/quiz'>Quiz</Link>
			}
		} catch {
			return <Link to='/quiz'>Quiz</Link>
		}
	}

	return (
		<>
			<nav className={navbarState}>
				<button id='nav-toggle' className={`nav-${navbarState}`} onClick={() => setNavbarState(prev => prev === 'closed' ? 'open' : 'closed')}>
					<MenuIcon />
				</button>
				<div className='nav-content'>
					{getLink()}
					<Link to='/'>Learn More</Link>
					<Link to='/develop'>Development Plan</Link>
				</div>
			</nav>
		</>
	);
}