import React from 'react';

import twitter from '../../assets/Twitter.svg';
import facebook from '../../assets/Facebook.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__left">
                    <a href="#" className="footer__logo">BestShop</a>
                    <small className="footer__copyright">© {currentYear} BestShop LTD, All Rights Reserved</small>
                </div>
                <div className="footer__right">
                    <a href="#" className="footer__social-media">
                        <img src={twitter} alt="BestShop Twitter" />
                    </a>
                    <a href="#" className="footer__social-media">
                        <img src={facebook} alt="BestShop Facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;