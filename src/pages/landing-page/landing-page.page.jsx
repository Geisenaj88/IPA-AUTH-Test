import React from 'react'
import { Link } from 'react-router-dom'
import './landing-page.styles.scss'
import UIkit from 'uikit'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<h1>Landing Page</h1>
			<Link to='/signin'>
				<button className="uk-button uk-button-default">Sign In</button>
			</Link>

		</div>
	)
}

export default LandingPage