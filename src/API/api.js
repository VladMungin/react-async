import { BASE_URL, instance } from '../utils/const'

export const fetchThen = (url, setData, setLoading, setError) =>{
	fetch(`${BASE_URL}${url}`)
		.then((res) => {
			if(res.status == 200) {
				return res.json()
			} else {
				setError(true)
			}
	})
	.then((data) =>{
		setData(data.results)
		setLoading(false)
	})
}

export const fetchAsync = async (url, setData, setLoading, setError) =>{
	try{
		const res = await fetch(`${BASE_URL}${url}`)
		if(res.status == 200) {
			const data = await res.json()
			setData(data.results)
			setLoading(false)
		} else {
			setError( true)
		}
	} catch(err){
		console.log(err)
	}
}

export const fetchAxios = async (url, setData, setLoading, setError) =>{
	try {
		const res = await instance(url)
		setData(res.data.results)
		setLoading(false)
	} catch(err){
		console.log(err)
		setError(true)
	}
}