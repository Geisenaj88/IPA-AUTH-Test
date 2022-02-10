import React, { useState } from 'react'
import UIkit from 'uikit'
import './sign-in-modal.styles.scss'
import './google-btn.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignInModal = () => {

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
		<div id="sign-in-modal" className="uk-flex-top" data-uk-modal>
			<div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
				<button className="uk-modal-close-default" type="button" data-uk-close></button>

				<button onClick={signInWithGoogle} className="login-with-google-btn" >
  					Sign in with Google
				</button>
				<h4>- OR -</h4>
				<span>Sign in with your email and password</span>
			
				<form onSubmit={handleSubmit}>
					<div className="uk-margin">
            			<input className="uk-input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        			</div>
					<div className="uk-margin">
            			<input className="uk-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        			</div>
					

					<div className='buttons'>
						<button className='uk-button uk-button-primary' type="submit">
							Sign In
						</button>
						{/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>*/} 
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignInModal