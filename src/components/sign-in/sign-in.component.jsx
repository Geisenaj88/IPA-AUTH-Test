import React, { useState } from 'react'
import UIkit from 'uikit'
import { Link } from 'react-router-dom'
import './sign-in.styles.scss'
import './google-btn.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault();		
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
		}).catch(err => console.log(err))
		
		setEmail('')
		setPassword('')
	}

	return (
		<div className='sign-in'>
			<button className="uk-modal-close-default" type="button" data-uk-close></button>

			<button onClick={signInWithGoogle} className="login-with-google-btn" >
				Sign in with Google
			</button>
			<h4>- OR -</h4>
			<span>Sign in with your email and password</span>
		
			<form className="uk-margin" onSubmit={handleSubmit}>
				<div className="uk-margin">
					<input className="uk-input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="uk-margin">
					<input className="uk-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
				</div>
				

				<div className='buttons'>
					<Link to='/'>
						<button className='uk-button'>
							Cancel
						</button>
					</Link>
					<button className='uk-button uk-button-primary' type="submit">
						Sign In
					</button>
					{/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>*/} 
				</div>
			</form>
		</div>
	)
}

export default SignIn