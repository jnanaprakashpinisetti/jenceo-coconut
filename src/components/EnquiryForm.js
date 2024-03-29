import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThankYouModal from './ThankYouModal'

import contactUs from '../images/img/contact-us-2.jpg'

const EnquiryForm = () => {
    const form = useRef();
    const [firstName, setFirstName] = useState("");
    const [secondtName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    const [error, setErro] = useState({
        firstName :"",
        secondtName :"",
        email :"",
        mobile :"",
        message :""
    });

    const submitForm = e => {
        e.preventDefault();
        if(firstName.trim()==="") {
            setErro({...error, firstName:"Enter First Name"})
        }else {
            setErro({...error, firstName:""})
        }
        
    }

    const submitHandler = e => {
        e.preventDefault();
        // emailjs.sendForm('service_91qxp92', 'template_62xk6sf', form.current, 'rZIjqFUg-qhiHTe32')
        emailjs.sendForm('service_h26i529', 'template_f2v8yqp', form.current, 'rZIjqFUg-qhiHTe32')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <section className="enquiryForm">
                <div className="container ">

                    <div className="row">
                        <div className="col-md-4">
                            <img src={contactUs} alt="contact Us" />
                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading"> <span className="green">send your </span><span className="yellow">message to us</span></h1>


                            <div className="form-wrapper">
                                {/* <form ref={form} onSubmit={submitHandler} id='enquiryForm'> */}
                                <form ref={form} onSubmit={submitForm} id='enquiryForm'>
                                    {/* Blick-1 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* First Name */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="firstName"><span>* </span>First Name :</label>
                                                <input type="text" className='form-control' id='firstName' name='firstName' placeholder="Enter First Name" required value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                                                {/* <span className='error' id='firstNameError'></span> */}
                                                {error.firstName && <span>{error.firstName}</span>}
                                            </div>
                                            {/* Last Name */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="lastName">Last Name :</label>
                                                <input type="text" className='form-control' id='lastName' name='lastName' placeholder="Enter Last Name" />
                                                <span className='error' id='lastNameError'></span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Blick-2 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* Email */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="email"><span>* </span>Email Id :</label>
                                                <input type="email" className='form-control' id='email' name='email' placeholder="sample@mail.com" required />
                                                <span className='error' id='emailError'></span>
                                            </div>
                                            {/* Mobile No */}
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="mobile"><span>* </span>Mobile No :</label>
                                                <input type="number" className='form-control' id='mobile' name='mobile' placeholder="Enter Mobile No" required />
                                                <span className='error' id='mobileError'></span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Blick-3 */}
                                    <div className="container">
                                        <div className="row">
                                            {/* Comments */}
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="message">Message :</label>
                                                <textarea className='form-control' name="message" id="message" cols="10" rows="5" placeholder="Enter your message..."></textarea>
                                                <span className='error' id="messageError"></span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="btn-wrap">
                                        {/* <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#myModal" >Submit</button> */}
                                        <button type="submit" className="btn btn-primary"  >Submit</button>
                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <ThankYouModal />

            </section>
        </>
    );
}

export default EnquiryForm;
