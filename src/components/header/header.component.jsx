import React from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom'


const Header = () => {
	return (
		<div>
			<div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top">
				<div className="g-container no-pad">
					<nav className="uk-navbar uk-navbar-container uk-navbar-transparent uk-light"  data-uk-navbar="mode: click">
						<div className="uk-navbar-left">
							<div className="uk-navbar-item uk-padding-remove-horizontal">
								<Link to="/home">
									<img className="wide-img uk-visible@s" src="../../src/assets/banner-logo.png" alt="Logo" />
									<img className="small-img uk-hidden@s" src="../../src/assets/banner-logo.png" alt="Logo" />
								</Link>
							</div>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav uk-visible@s">
								<li className="nav-wide">
										
								</li>
							</ul>
							<a className="uk-navbar-toggle uk-navbar-item uk-hidden@s" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header