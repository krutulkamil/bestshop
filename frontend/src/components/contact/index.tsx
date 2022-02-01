// react
import React, { FunctionComponent } from 'react';
// components
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact: FunctionComponent = (): JSX.Element=> {
    return (
        <section className="contact container" id="contact">
            <ContactInfo />
            <ContactForm />
        </section>
    )
};

export default Contact;