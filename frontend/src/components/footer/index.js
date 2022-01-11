import React from 'react';

import {animateScroll} from 'react-scroll';
import twitter from '../../assets/Twitter.svg';
import facebook from '../../assets/Facebook.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    let scroll = animateScroll;

    const handleTopScroll = () => {
        scroll.scrollToTop({duration: 2000, delay: 100, smooth: 'easeInOutQuart'});
    };

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__left">
                    <a className="footer__logo" onClick={handleTopScroll}>BestShop</a>
                    <small className="footer__copyright">© {currentYear} BestShop LTD, All Rights Reserved</small>
                </div>
                <div className="footer__right">
                    <a href="https://twitter.com/" target="_blank" className="footer__social-media">
                        <img src={twitter} alt="BestShop Twitter" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className="footer__social-media">
                        <img src={facebook} alt="BestShop Facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;