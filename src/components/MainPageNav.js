import React, { useState } from 'react';
import { Router, Routes, Route, Link, NavLink, browserHistory, IndexRoute } from 'react-router-dom';

import log from '../images/jencio-logo.svg';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


export default function MainPageNav() {
	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
		setActive(!isActive)
	}



	return (
		<>

			<div className="container ">
				<div className="row">

					{/* First Card */}
					<div className="col-md-6" >
						<div className="card " >
							<div className="img-wrapper">
								{/* <img src={babyCareIcon} alt="baby care" /> */}
							</div>
							<div className="card-body">
								<h4>Baby Care</h4>
								<p>Give your little ones the love and attention they deserve with our reliable babysitters.</p>
							</div>

							<NavLink to='/' className="nav-link">Home </NavLink>
						
						</div>
					</div>
					{/* Second Card */}
					<div className="col-md-6" >
						<div className="card " >
							<div className="img-wrapper">
								{/* <img src={babyCareIcon} alt="baby care" /> */}
							</div>
							<div className="card-body">
								<h4>Baby Care</h4>
								<p>Give your little ones the love and attention they deserve with our reliable babysitters.</p>
							</div>

							<NavLink to='Retail' className="nav-link">Next </NavLink>
						
						</div>
					</div>
				</div>
			</div>


			
							


			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="About-us" element={<AboutUs />} />
			</Routes>
		</>
	)
}
