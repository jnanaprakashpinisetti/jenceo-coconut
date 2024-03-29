import React from 'react';
import expertIcon from '../images/icons/expert-profissional.svg';
import customerIcon from '../images/icons/customer-satisfaction.svg';
import standerdIcon from '../images/icons/highe-standards.svg';
import customerCareIcon from '../images/icons/customer-support.svg';

export default function Choose() {
    return (
        <>
            <section className="choose-wrap">

                <h1 className="section-heading">
                    why Choose  <span className="green">jen</span><span className="yellow">ceo</span>
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={expertIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Premium Quality Coconuts</h4>

                                <p>Our suppliers adhere to stringent quality standards, ensuring that only the finest coconuts are sourced and delivered to our customers.</p>

                                <p>From selecting the best coconuts from reputable farms to meticulous quality control processes, we prioritize excellence at every step.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Reliable Supply Chain</h4>
                                <p>With our coconut suppliers, you can count on a reliable and efficient supply chain. We understand the importance of timely deliveries to keep your operations running smoothly.</p>
                                <p>Our logistics network ensures that your orders are fulfilled promptly and accurately, minimizing disruptions to your business.</p>
                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={standerdIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>Competitive Pricing</h4>
                                <p>We believe that high-quality coconut products should be accessible to businesses of all sizes. Our suppliers offer competitive pricing without compromising on quality. By choosing us, you can enjoy excellent value for your investment.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-wrap">
                                <img src={customerCareIcon} alt="" />
                            </div>
                            <div className="info-wrap">
                                <h4>24 / 7 Customer support</h4>
                                <p>We are available to offer you services with 24/7 support</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
