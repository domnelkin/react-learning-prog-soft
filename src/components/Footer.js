import React from 'react';
import './Footer.css';
import SocialIcon from './SocialIcon';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="top-part">
                <div className="info-block">
                    <h3>Our contacts:</h3>
                    <p className="main-text">Address: Lviv, Washington str, 137
                    <br/>Lvivstar: 665(4295)881-91-27
                    <br/>Death: 33(5583)395-99-35
                    Vogonfone: 95(2449)213-33-07</p>
                    <p className="second-text">BestBuy Company</p>
                </div>
                <div className="logo-block">
                    <div className="logo-wrapper">
                        <img src="logo200.png" alt="logo"></img>
                    </div>
                </div>
                <div className="social-block">
                    <SocialIcon
                        link="https://facebook.com"
                        img="images/footer-1.png"
                    />
                    <SocialIcon
                        link="https://facebook.com"
                        img="images/footer-2.png"
                    />
                    <SocialIcon
                        link="https://facebook.com"
                        img="images/footer-3.png"
                    />
                    <SocialIcon
                        link="https://facebook.com"
                        img="images/footer-4.png"
                    />
                </div>
            </div>
            <div className="middle-part">
                <hr className="separator-line" />
            </div>
            <div className="bottom-part">
                <div>
                    <p>Copyright © 2021 BestBuy Inc.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;