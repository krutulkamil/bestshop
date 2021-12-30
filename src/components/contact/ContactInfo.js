import React from 'react';

import mail from "../../assets/Mail Icon.svg";
import phone from "../../assets/Phone Icon.svg";

const ContactInfo = () => {
    return (
        <div className="contact__info">
            <h2 className="contact__title">Any questions?</h2>
            <p className="contact__text">Leave your email address or call us!</p>
            <div className="contact__details">
                <a href="mailto:info@bestshop.xyz" className="contact__way">
                    <img src={mail} alt="mail" />
                    info@bestshop.xyz
                </a>
                <a href="tel:123456789" className="contact__way">
                    <img src={phone} alt="phone" />
                    123 456 789
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;