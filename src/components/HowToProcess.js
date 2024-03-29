import React from 'react';
import getInTouchIcon from '../images/icons/GetInTouchIcon.svg';
import freeAssessment from '../images/icons/freeAssessmentIcon.svg';
import careerAssigned from '../images/icons/CareerAssignedIcon.svg';
import getYorMaid from '../images/icons/getYorMaid.svg';

export default function HowToProcess() {
    return (
        <section className="process">
            <div className="section-heaidng">
                <h1 className="section-heading">
                    <span className="green">how to</span><span className="yellow"> process</span>
                </h1>
            </div>

            <div className="container">
                <div className="row">

                    {/* card-1 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={getInTouchIcon} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Get In Touch</h4>
                                <p>Tell us your specific needs, so that we can tailor a personalised plan according to your preferences.</p>
                            </div>

                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={freeAssessment} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Free Assessment</h4>
                                <p>Our support team will make arrangements to meet you personally for a full assessment.</p>
                            </div>

                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={careerAssigned} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Career Assigned</h4>
                                <p>We carefully match our clients to theri care & Support worker based on a wide range of criteria.</p>
                            </div>

                        </div>
                    </div>

                    {/* card-4 */}
                    <div className="col-md-3" >
                        <div className="card " >
                            <div className="img-wrapper">
                                <img src={getYorMaid} alt="baby care" />
                            </div>
                            <div className="card-body">
                                <h4>Start of Care</h4>
                                <p>Your care with JenCeo will begin that has been tailored specifically to meet your individual needs.</p>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}
