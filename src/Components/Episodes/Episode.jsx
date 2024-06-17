import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchAxios } from '../../API/api'
import { instance } from '../../utils/const'



const Episode = () => {
	const {id} = useParams()
	const [episode, setEpisode] = useState([]);
	const [err, setErr] = useState(false)
	const [isLoading, setValueLoading] = useState(true);
	const [nameEdit,setNameEdit] = useState();
	const [episodeEdit,setEpisodeEdit] = useState();
	const [airDateEdit,setAirDateEdit] = useState();

	useEffect(()=>{
		fetchAxios(`episode/${id}`, setEpisode, setValueLoading, setErr, id)
		// const loadEpisode = async () =>{
		// 	try{
		// 		const res = await instance(`episode/${id}`)
		// 		setEpisode(res.data)
		// 		setValueLoading(false)
		// 	} catch(err){
		// 		console.log(err)
		// 		setErr(true)
		// 	}
		// }
		// loadEpisode()
	},[id])

	async function handleClickDel(){
		const res = await instance.delete(`/episode`,{
			data:{
				id: id
			}
		})
		console.log(res.status)
	}
	async function handleClickEdit(name,airDate, episode){
		const res = await instance.patch(`/episode`,{
			id: id,
			name: name,
			air_date: airDate,
			episode: episode
		})
		console.log(res)
	}
	return (
		<div>
			{isLoading && !err ? (<p>Загрузка</p>) : (
			<div>
				<input defaultValue={episode?.name} onChange={(e)=>{
					setNameEdit(e.target.value)
				}}/>
				<input defaultValue={episode?.air_date} onChange={(e)=>{
					setAirDateEdit(e.target.value)
				}}/>
				<input defaultValue={episode?.episode} onChange={(e)=>{
					setEpisodeEdit(e.target.value)
				}}/>
				<button onClick={(e)=>{
					e.preventDefault()
					handleClickDel()
				}}>Удалить</button>
				<button onClick={(e)=>{
					e.preventDefault()
					handleClickEdit(nameEdit,airDateEdit, episodeEdit)
				}}>Изменить</button>
			</div>)}
		</div>
	)
}

export default Episode
