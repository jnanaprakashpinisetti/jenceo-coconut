import React, { useState, useEffect } from 'react';

import greenCoconut from '../images/img/coconut.jpg';
import yellowCoconut from '../images/img/yellow-coconut.jpg';
import fruites from '../images/img/fruites.jpg';
// import physiotherapyIcon from '../images/icons/physiotherapy.svg';

export default function Card() {

  return (
  <section className="home-cards">
  <div className="section-heading">
    <h1 >
    <span className="green">our</span> <span className="yellow">Products</span>
    </h1>
  </div>
    <div className="container ">
      <div className="row">
      
      {/* First Card */}
        <div className="col-md-4" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={greenCoconut} alt="Green Tender Coconuts"/>
            </div>
            <div className="card-body">
              <h4>Green Tender Coconuts</h4>
              <p>Green Tender Coconut wholesale from Hyderabad to the All over indian, market with best quality which meets international standards</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Second Card */}
        <div className="col-md-4" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={yellowCoconut} alt="Yellow Tender Coconuts"/>
            </div>
            <div className="card-body">
              <h4>Orange Tender Coconuts</h4>
              <p>Yellow Tender Coconut wholesale from Hyderabad to the All over indian, market with best quality which meets international standards</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Third Card */}
        <div className="col-md-4" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={fruites} alt="cook / maid"/>
            </div>
            <div className="card-body">
              <h4>Banana Supply</h4>
              <p>Fresh Bababa Supply to overall indian </p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div>

      {/* Fourth Card */}
        {/* <div className="col-md-3" >
          <div className="card " >
            <div className="img-wrapper">
              <img src={physiotherapyIcon} alt="Physiotherapy"/>
            </div>
            <div className="card-body">
              <h4>Physiotherapy</h4>
              <p>Restore your body with our professional physiotherapy services</p>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </div>
        </div> */}




      </div>
    </div>
    </section>

  )
}
