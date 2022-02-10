import React from 'react'
import './homepage.styles.scss'
import Header from '../../components/header/header.component'

const HomePage = () => {
	return (
		<div className='homepage'>
			<Header />
			<h1 className='homepage-title'>Homepage</h1>
		</div>
	)
}

export default HomePage