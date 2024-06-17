import React from 'react'

const Card = ({ name, species}) => {
	return (
		<div className='card'>
			<h1>{name}</h1>
			<h2>{species}</h2>
		</div>
	)
}

export default Card
