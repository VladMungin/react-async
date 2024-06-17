import React from 'react'
import { Route, Routes } from 'react-router'
import { ROUTES } from '../../utils/routes'
import CreatePage from '../CreatePage/CreatePage'
import Episode from '../Episodes/Episode'
import Episodes from '../Episodes/Episodes'
import Home from '../Home/Home'
import Locations from '../Locations/Locations'

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home/>}/>
			<Route path={ROUTES.EPISODES} element={<Episodes/>}/>
			<Route path={ROUTES.LOCATIONS} element={<Locations/>}/>
			<Route path={ROUTES.EPISODE} element={<Episode/>} />
			<Route path={ROUTES.CREATE} element={<CreatePage/>} />
		</Routes>
	)
}

export default AppRoutes
