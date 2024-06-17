import React, { useEffect, useState } from 'react'
import { instance } from '../../utils/const'
import CardLink from '../Card/CardLink'
const Episodes = () => {
	const [isLoading,setValueLoading] = useState(true)
	const [episodes, setEpisodes] = useState([])
	const [err, setErr] = useState(false);
	

	useEffect(()=>{
		const loadEpisodes = async () =>{
			try{
				const res = await instance('episode')
				
				setEpisodes(res.data.results)
				setValueLoading(false)
			} catch (err){
				console.log(err)
				setErr(true)
			}
			
		}
		loadEpisodes()
	})
	return (
		<div className='home'>
			{isLoading && !err ? (<p>Загрузка</p>) : episodes.map(({id,name,episode}) =>{
				return(<CardLink key={id} id={id} name={name} species={episode}/>)
			})}
			{err ? (<p>Ошибка</p>) : ''}
		</div>
	)
}

export default Episodes
