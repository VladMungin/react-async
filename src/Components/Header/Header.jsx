import { useAtom } from 'jotai/react'
import { atom } from 'jotai/vanilla'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import './header.css'

const themeAtom = atom(true)

const Header = () => {
	const [theme, setTheme] = useAtom(themeAtom);
	return (
		<header className={`${theme ? 'light' : 'dark'} header`}>
			<Link className="link" to={ROUTES.HOME}>characters</Link>
			<Link className="link" to={ROUTES.LOCATIONS}>locations</Link>
			<Link className="link" to={ROUTES.EPISODES}>episodes</Link>
			<Link className="link" to={ROUTES.CREATE}>create episodes</Link>
			<button onClick={(e) =>{
				e.preventDefault();
				setTheme(!theme)
			}}>{theme ? 'light' : 'dark'}</button>
		</header>
	)
}

export default Header
