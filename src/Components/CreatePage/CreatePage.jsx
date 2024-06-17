import React, { useState } from 'react'
import { instance } from '../../utils/const'
import './CreatePage.css'

const CreatePage = () => {
	const [name,setName] = useState();
	const [episode,setEpisode] = useState();
	const [airDate,setAirDate] = useState();

	async function handleClick(name, episode,airDate){
		const res = await instance.put('episode',{
			id: Date.now(),
			name: name,
			air_date: airDate,
			episode: episode
		},{})
		console.log(res.status)
	}
	return (
		<form>
			<div className='form'>
				<label>Name</label><input type="text" onChange={(e)=>{
					setName(e.target.value)
				}}/>
				<label>Episode</label><input type="text" onChange={(e)=>{
					setEpisode(e.target.value)
				}}/>
				<label>Air date</label><input type="text" onChange={(e)=>{
					setAirDate(e.target.value)
				}}/>	
				<button onClick={(e)=>{
					e.preventDefault()
					handleClick(name,episode,airDate)
				}}>Create</button>	
			</div>

		</form>
	)
}

export default CreatePage
