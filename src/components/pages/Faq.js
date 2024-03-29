import React from 'react';
import EnquiryForm from '../EnquiryForm';

const Faq = () => {
    return (<div className="faq">
        <div className="hero-banner mt-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-heading"> <span className="green"> Got a question ? <br></br></span> <span className="yellow"> get your answer </span></h2>
                        <h5> We are available to help you around the clock, <br></br>so feel free to ask any questions you may have.</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="panel-group" id="accordion">
                <h2> Frequently asked questions </h2> <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> What kind of Products you supply? </a>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">
                            <p> We provide all the household services, be it hiring a housemaid or a house servant staff, babysitter or a nanny, cook or chef, elderly care or patient care, or a nurse-we provide solutions for all your domestic HELP requirement. </p> <ul>
                                <li> Green Tender Coconuts </li>
                                <li> Orange Tender Coconuts </li>
                                <li> Coconuts </li>
                                <li> Bananas </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> How will our relationship work ? </a> </h4> </div> <div id="collapse2"
                            className="panel-collapse collapse ">
                        <div className="panel-body"> We recognize the importance of communication, especially when it comes to important valuables in your home and any specific cleaning requests you may have.Our housecleaning franchises value your trust and do everything possible to earn it by performing reliable, affordable, top-notch cleaning services to meet your needs and exceed your expectations </div> </div> </div>


                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> How can I place a Order ? </a>
                        </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse ">
                        <div className="panel-body"> You can simply <strong> Call </strong> or <strong>Watsapp</strong> to our customer care no. < a href="tell:9888559955"> <strong> 9888 559955 </strong> </a> or visit our website < a href="www.jenceo.com//Contact"> jenceo.com / Contact </a> for placing your service request. We’re available 27/7.
</div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> Do you have a Guarantee ? </a>
                        </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse ">
                        <div className="panel-body"> OUR SERVICES ARE ALWAYS GUARANTEED : Just call or email if you have a question or concern about our services, and we will contact you within 24 hours to solve your issue. </div> </div> </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse5"> Why should I trust JenCeo Home Care Services ? </a>
                        </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse ">
                        <div className="panel-body">
                            <p>We’ re proud to offer professional house cleaning services and employ residential housekeepers, who pride themselves on top-quality services.After undergoing an extensive background check, each member of our team is thoroughly trained on every step of our detailed cleaning plans.We also back all of our work with a 24-hour warranty.These are just a few of the many reasons why customers trust JenCeo Services. </p></div>
                    </div>
                </div>
{/* 
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse6"> Do you have Professionally Workers ? </a>
                        </h4>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse ">
                        <div className="panel-body">
                            < p> JenCeo follows a 3 Step Verification Process for every Employee. </p>
                            <ul>
                                <li> ID we verify the valid of the govt.ID the person carries </li>
                                <li> Court / Criminal Records </li>
                                <li> Address, which reports whether the person stays at the place where he / she claims to be a resident. </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse7"> How can I pay ? </a>
                        </h4>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse ">
                        <div className="panel-body"> <p> We have all forms of digital payment options available. </p> <ul>
                            <li> Cash / Cheque </li>
                            <li> Googlepay </li>
                            <li> Phonepay </li>
                            <li> Paytm </li>
                            <li> Online </li>
                        </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <EnquiryForm />

    </div>
    );
}

export default Faq;
