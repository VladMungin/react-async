import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import './header.css'
const Header = () => {
	return (
		<header className='header'>
			<Link className="link" to={ROUTES.HOME}>characters</Link>
			<Link className="link" to={ROUTES.LOCATIONS}>locations</Link>
			<Link className="link" to={ROUTES.EPISODES}>episodes</Link>
			<Link className="link" to={ROUTES.CREATE}>create episodes</Link>
		</header>
	)
}

export default Header
