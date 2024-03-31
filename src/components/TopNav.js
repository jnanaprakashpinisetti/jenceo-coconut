import React from 'react';
import facebook from '../images/icons/social-media/facebook.svg';
import twitter from '../images/icons/social-media/twitter.svg';
import instagram from '../images/icons/social-media/instagram.svg';
import cell from '../images/icons/social-media/cell.svg';
import email from '../images/icons/social-media/email.svg';
import location from '../images/icons/social-media/location.svg';
import youtube from '../images/icons/social-media/youtube.svg';


const TopNav = () => {
    return (
        <div className="topNav">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left">

                    <ul className="socilaMedia">
                            <li><a href="#">follow us: </a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100093798434010" target="_blank" rel="noreferrer" > <img src={facebook} alt="facebook" /></a></li>
                            <li><a href="https://twitter.com/JenCeoHomeCare" target="_blank"   rel="noreferrer"><img src={twitter} alt="twitter" /></a></li>
                            <li><a href="https://www.instagram.com/jenceohomecare/" target="_blank"  rel="noreferrer" ><img src={instagram} alt="instagram" /></a></li>
                            <li><a href="https://www.youtube.com/@JenCeo-hz3gn" target="_blank"  rel="noreferrer" ><img src={youtube} alt="youtube" /></a></li>
                        </ul>

                    </div>
                    <div className="col-md-6 right">
                        <ul>
                            <li><a href="tell:9888559955">
                                <img src={cell} alt="call icon" />
                                9888 559955
                    </a></li>
                            <li><a href="mailto:jenceocustomercare@gmail.com">
                                <img src={email} alt="email icon" />
                                jenceocustomercare@gmail.com
                    </a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default TopNav;
