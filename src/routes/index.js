import React, { useEffect } from 'react'
import { Link, redirect, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SignUp from '../pages/signUp/index'
import SignIn from '../pages/singIn/index'

function Index() {

	return (
	<div>
		<Router basename='abramge'>
			<Routes>
			<Route exact path="signin" element={<SignIn />} />
			<Route exact path="signup" element={<SignUp />} />
			</Routes>
		</Router>
	</div>
	)
}

export default Index
