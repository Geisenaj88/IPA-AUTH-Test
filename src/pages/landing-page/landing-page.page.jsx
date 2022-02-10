import React from 'react'
import './landing-page.styles.scss'
import UIkit from 'uikit'

import SignInModal from '../../components/sign-in-modal/sign-in-modal.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<h1>Landing Page</h1>
			<button className="uk-button" onClick={signInWithGoogle}>Sign IN</button>
			<button className="uk-button uk-button-default" onClick={() => UIkit.modal('#sign-in-modal').show()}>Open</button>

			<SignInModal />
					

				
		</div>
	)
}

export default LandingPage