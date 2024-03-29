import React, { useState } from 'react';
import { Router, Routes, Route, Link, NavLink, browserHistory, IndexRoute } from 'react-router-dom';

import log from '../images/jencio-logo.svg';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import Elements from './Elements/Elements';


export default function Navbar() {
	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
		setActive(!isActive)
	}



	return (
		<>

			<header className="navbar-bg 	 scroll-change">
				<nav className="navbar navbar-expand-md container">
					{/* <a className="navbar-brand"> */}
					<NavLink to='/' className="navbar-brand"><img src={log} alt="JENCEO Logo" width="50px" /></NavLink>
					{/* </a> */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
						<i className={isActive ? "fa fa-close" : "fa fa-bars"} onClick={toggleClass} ></i>
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to='/' className="nav-link">Home </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='About-Us' className="nav-link">About Us </NavLink>
							</li>

							<li className="nav-item">
								<NavLink to='Our-services' className="nav-link"> Our Services</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='FAQs' className="nav-link">FAQs </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Contact' className="nav-link">Contact Us </NavLink>
							</li>
							{/* <li className="nav-item">
								<NavLink to='Elements' className="nav-link"> Trender Cocnut </NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='Link' className="nav-link"> Link </NavLink>
							</li> */}
						</ul>
					</div>
				</nav>
			</header>


			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="About-us" element={<AboutUs />} />
				<Route path="Our-services" element={<OurServices />} />
				<Route path="FAQs" element={<Faq />} />
				<Route path="Contact" element={<ContactUs />} />
				<Route path="/Elements" element={<Elements />} />
			</Routes>
		</>
	)
}
