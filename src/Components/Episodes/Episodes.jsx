import { useAtomValue, useSetAtom } from 'jotai/react'
import { atom } from 'jotai/vanilla'
import React, { useEffect, useState } from 'react'
import { fetchAxios } from '../../API/api'
import CardLink from '../Card/CardLink'

const episodesAtom =  atom([])

const Episodes = () => {
	const [isLoading,setValueLoading] = useState(true)
	
	const [err, setErr] = useState(false);
	const setEpisodes = useSetAtom(episodesAtom)
	const episodes = useAtomValue(episodesAtom)

	useEffect(()=>{
		setEpisodes(fetchAxios('episode', setValueLoading, setErr))
		// const loadEpisodes = async () =>{
		// 	try{
		// 		const res = await instance('episode')
				
		// 		setEpisodes(res.data.results)
		// 		setValueLoading(false)
		// 	} catch (err){
		// 		console.log(err)
		// 		setErr(true)
		// 	}
			
		// }
		// loadEpisodes()
	}, [])

	
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
