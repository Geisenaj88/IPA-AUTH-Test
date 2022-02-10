import React, { useState } from 'react'
import './profile.styles.scss'
import UIkit from 'uikit'

import { Link } from 'react-router-dom'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Profile = () => {

	const [fName, setFName] = useState('')
	const [lName, setLName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confPassword, setConfPassword] = useState('')

	const handleSubmit = async (e) => {
		event.preventDefault()
		if (password !== confPassword) {
			UIkit.modal.alert("Passwords don't match")
			return;
		}
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password)
			setDisplayName('')
			setEmail('')
			setPassword('')
			setConfPassword('')
		} catch (error) {
			console.log('error creating account', error)
		}
	}


	return (
		<div className='profile'>
			<form onSubmit={handleSubmit}>
				<div className="uk-grid-small" data-uk-grid>
					<div className="uk-width-1-2@s">
						<input className="uk-input" type="text" placeholder="First Name" onChange={(e) => setFName(e.target.value)} />
					</div>
					<div className="uk-width-1-2@s">
						<input className="uk-input" type="text" placeholder="Last Name" onChange={(e) => setLName(e.target.value)} />
					</div>
					<div className="uk-width-1-1">
						<input className="uk-input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="uk-width-1-2@s">
						<input className="uk-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div className="uk-width-1-2@s">
						<input className="uk-input" type="password" placeholder="Confirm password" onChange={(e) => setConfPassword(e.target.value)} />
					</div>
				</div>
				<div className='buttons uk-margin'>
					<Link to='/'>
						<button className='uk-button'>
							Cancel
						</button>
					</Link>
					<button className='uk-button uk-button-primary' type="submit">
						Create Profile
					</button>
					{/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>*/} 
				</div>
			</form>
		</div>
	)
}

export default Profile