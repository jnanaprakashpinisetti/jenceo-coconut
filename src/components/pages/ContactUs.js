import React from 'react';

import SendMessage from '../SendMessage'

import ContactImg from '../../images/img/contact-us.jpg';
import Cell from '../../images/icons/social-media/cell-blue.svg';
import Email from '../../images/icons/social-media/email-blue.svg';
import Location from '../../images/icons/social-media/location-blue.svg';
import watsapp from '../../images/icons/social-media/watsapp-blue.svg';

const ContactUs = () => {
    return (
        <>
            <section className="contact-us">
                <div className="hero-banner mt-80">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="section-heading"><span className="green">Contact</span> <span className="yellow">Us</span></h2>
                                <h5>
                                    We are here to help in your every step, please feel free to contact us through our online or offline touchpoints.</h5>

                            </div>
                         
                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>What can we help you with today?</h2>
                        </div>
                    </div>
                </div>
                <div className="container call-wrap">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card " >
                                <div className="img-wrapper">
                                    <img src={Cell} alt="baby care" />
                                    <p>24/7 Service</p>
                                    <h3>Call Us</h3>
                                </div>
                                <div className="card-body">
                                    <h4>  <a href="tell:9888559955" >9888 559955</a></h4>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card " >
                                <div className="img-wrapper">
                                    <img src={Email} alt="email" />
                                    <p>Droop a line</p>
                                    <h3>Mail Us</h3>
                                </div>
                                <div className="card-body">
                                    <h4>  <a href="mailto:jenceocustomercare@gmail.com" >jenceocustomercare@gmail.com</a></h4>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card " >
                                <div className="img-wrapper">
                                    <img src={Location} alt="email" />
                                    <p>Location</p>
                                    <h3>Visit Us</h3>
                                </div>
                                <div className="card-body">
                                    <p>#2-3-381, Road No. 4,
                                        Sainagar Colony, Alkapuri X Road,
                                        Nagole, Hyderabad,  Telangana  (India), Pin - 500 068,
                                   </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <SendMessage />



            </section>


        </>
    );
}

export default ContactUs;
