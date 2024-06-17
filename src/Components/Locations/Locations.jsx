import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/const'
import Card from '../Card/Card'

const Locations = () => {
	const [isLoading, setValueLoading] = useState(true)
	const [err, setErr] = useState(true)
	const [locations, setLocations] = useState([])
	//console.log(locations)
	useEffect(()=>{
		const loadLoc = async () =>{
			try{
				const res = await fetch(`${BASE_URL}/location`)
				if(res.status == 200) {
					const data = await res.json()

				setLocations(data.results)
				setValueLoading(false)
				} else {
					setErr(err)
				}
				
			} catch(err) {
				console.log(err)
			}
			
		}
		loadLoc()
	},[])
	return (
		<div className='home'>
			{isLoading && !err ? (<p>Загрузка</p>) : locations.map(({id, name,type}) =>{
				return(<Card key={id} name={name} species={type}/>)
			})}
			{err ? (<p>Ошибка</p>) : ''}
		</div>

	)
}

export default Locations
