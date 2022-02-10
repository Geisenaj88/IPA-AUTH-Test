import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { auth } from './firebase/firebase.utils'

import LandingPage from './pages/landing-page/landing-page.page'
import './pages/landing-page/landing-page.styles.scss'

import HomePage from './pages/homepage/homepage.page'
import './pages/homepage/homepage.styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userActionCreators } from './state/actionExports'

function App() {
  	
	const state = useSelector(state => state)
	// const userData = selectCurrentUser(state)
	// console.log(currentUser)
	const dispatch = useDispatch()
	const { setCurrentUser } = bindActionCreators(userActionCreators, dispatch)

	useEffect(() => {
		auth.onAuthStateChanged(async user => {
			if (user) {
				setCurrentUser(user)
			} else {
				setCurrentUser(null)
			}
		})
	}, [])

	return (
		<div>
			<Routes>
				<Route path='/' element={<LandingPage />}></Route>
				<Route path='/home' element={<HomePage />}></Route>
			</Routes>
		</div>
	);
}

export default App;