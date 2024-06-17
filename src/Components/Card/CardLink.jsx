import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = ({ id,name, species}) => {
	return (
		<Link className='card' to={`/episode/${id}`}>
			<h1>{name}</h1>
			<h2>{species}</h2>
		</Link>
	)
}

export default CardLink
