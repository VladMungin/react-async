import React, { useEffect, useState } from 'react'
import { fetchThen } from '../../API/api'
import Card from '../Card/Card'
import './home.css'
const Home = () => {
	const [isLoading, setValueLoading] = useState(true);
	const [names,setName] = useState([]);
	const [err, setErr] = useState(false);
	useEffect(()=>{
		fetchThen('character', setName, setValueLoading, setErr);
		// fetch(`${BASE_URL}character`)
		// .then((res)=>{
		// 	if(res.status == 200){
		// 		return res.json()
		// 	} else {
		// 		setErr(true)
		// 	}
			
		// })
		// .then((data) =>{
		// 	setName(data.results)
		// 	setValueLoading(false);
		// })
		
	},[])
	console.log(err)
	return (
			<div className='home'>
				{isLoading && !err ? (<p>Загрузка</p>) : names.map(({id,name,species})=>{
					return(<Card key={id} name={name} species={species}/>)
				})}
				{err ? (<p>Ошибка</p>) : ''}
			</div>	
	)
}

export default Home
