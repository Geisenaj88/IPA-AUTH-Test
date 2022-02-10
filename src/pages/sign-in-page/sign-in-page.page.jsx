import React from 'react'
import { Link } from 'react-router-dom'
import './sign-in-page.styles.scss'
import UIkit from 'uikit'

import SignIn from '../../components/sign-in/sign-in.component'

const SignInPage = () => {
	return (
		<div className='sign-in-page'>
			<h1>Sign In</h1>
			<SignIn />
			<h3>Don't have an account? Register <Link to='/register'>HERE</Link></h3>
		</div>
	)
}

export default SignInPage