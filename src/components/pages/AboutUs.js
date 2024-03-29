import React from 'react';

import aboutUs from '../../images/img/about-us-2.jpg';

const AboutUs = () => {
    return (
        <div className="about-us mt-80">
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="section-heading"><span className="green"> About </span><span className="yellow">Us</span></h2>
                            <h5>Our mission is to empower our customers to lead joyous and fulfilling lives, fully fostering independence. We are dedicated to supporting you on your journey to happiness and autonomy.</h5>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Our Story</h2>
                        <p>Our story began with a simple idea - helping others. As humans, we are bound to help others and are always seeking 'JenCeo's High'. The warm glow of pro sociality certainly drives us in helping a fellow human being. So, in 2022, when the world was at the highest gear and people were time constrained, we launched JenCeo as a platform to seek and provide help.</p>
                        <p>We saw people, especially in urban India struggling to complete tasks, look after their loved ones. JenCeo was designed in such a way that anyone could request help on our platform to be taken up by our verified community members.</p>
                        <p>Our team understood this problem quite well as we had senior parents who lived alone far away from us. We knew the issues seniors faced everyday and it motivated us immensely to use Helpee as a platform to provide on-demand help for our loved ones.</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={aboutUs} alt="ourstory" />
                    </div>
                </div>

            </div>
            <hr/>
            
            <div className="container">
            <h2>Guaranteed Comfort</h2>
            <ul>
                <li>We serve our customers with utmost dignity and try our best to make them feel comfortable and reduce their anxiety.</li>
                <li>We aim to fully understand your precise needs and preferences before our service begins.</li>
                <li>Only when you are happy with the support plan we have agreed together, will we select a care worker to meet you.</li>
                <li> It will be someone with appropriate experience, qualifications and skills, and you will always be able to change your care worker if you wish.</li>
                <li>You'll find that you will soon get to know your career and feel comfortable with them.</li>
                <li>You'll also get to know your local JenCeo Field Care Supervisor, who will make regular visits to your home to check that you are entirely happy with the support you are receiving.</li>
                <li>And you are encouraged to speak to us at any time if you have any concerns about your safety or wellbeing or wish to change the way your support is arranged.</li>
            </ul>
            </div>
        </div>
    );
}

export default AboutUs;
