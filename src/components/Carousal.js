import React from 'react';
import cocnutTree from "../images/carousal/cocnuts-tree-mobile.jpg";
import cocnutFarm from "../images/carousal/coconut-farm-mobile.jpg";
import coconut from "../images/carousal/coconut-mobile.jpg";

export default function MyCarousal() {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
                <div className="carousel-item carousel-1 active">
                    <div className="innet-text">
                    <h2 >Best Tender Coconut Suppliers <br></br> In Hyderabad</h2>
                        <h5>We are exporting coconuts regularly various parts of India .</h5>
                    </div>
                    <img className="d-mobile" src={cocnutTree} alt="cook" />

                </div>
                <div className="carousel-item carousel-2">

                    <div className="innet-text">
                        {/* <h2>Baby Care Service</h2>
                        <h5>Nurturing Tomorrow, Today: Exceptional Baby Care Services Tailored with Love and Expertise.</h5> */}
                    </div>
                    <img className="d-mobile" src={cocnutFarm} alt="cook" />

                </div>
                <div className="carousel-item carousel-3">
                    <div className="innet-text">
                        {/* <h2>Old age care Service</h2>
                       <h5>Enriching Lives, Embracing Wisdom: Compassionate Old Age Care Tailored for Dignity and Comfort.</h5> */}
                    </div>
                    <img className="d-mobile" src={coconut} alt="cook" />
                </div>
            </div>

            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

    )
}
