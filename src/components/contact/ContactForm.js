import React from 'react';

const ContactForm = () => {
    return (
        <form className="contact__form">
            <label htmlFor="name" className="contact__label">NAME</label>
            <input type="text" id="name" />
            <label htmlFor="email" className="contact__label">E-MAIL</label>
            <input type="email" id="email" />
            <label className="checkbox">
                <input type="checkbox" />
                <span/>
                I hereby give consent for my personal data included in my application to be processed
                for the purposes of the recruitment process under the European Parliament’s and Council
                of the European Union Regulation on the Protection of Natural Persons as of 27 April
                2016, with regard to the processing of personal data and on the free movement of such
                data, and repealing Directive 95/46/EC (Data Protection Directive)
            </label>
            <a href="#" className="btn btn--form" type="submit">Send</a>
        </form>
    )
};

export default ContactForm;