import React from 'react';

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section className="contact container" id="contact">
            <ContactInfo />
            <ContactForm />
        </section>
    )
};

export default Contact;