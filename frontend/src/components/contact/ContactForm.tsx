// react
import React, {FunctionComponent} from 'react';
// react-hook-form
import {useForm} from "react-hook-form";
// react-recaptcha
import Recaptcha from 'react-recaptcha';

const ContactForm: FunctionComponent = (): JSX.Element => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const RECAPTCHA_KEY: string = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    return (
        <form onSubmit={handleSubmit(data => {
            console.log(data);
            reset({name: '', email: ''});
        })} className="contact__form">
            <label htmlFor="name" className="contact__label">NAME {errors.name?.message && <span style={{color: 'red'}}> - {errors.name?.message}</span>}</label>
            <input {...register("name",
                {
                    required: 'This field is required',
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Only one word can be entered!'
                    }
                })}
                   type="text" id="name" />

            <label htmlFor="email" className="contact__label">E-MAIL {errors.email?.message && <span style={{color: 'red'}}> - {errors.email?.message}</span>}</label>
            <input {...register("email",
                {
                    required: 'This field is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Incorrect e-mail address!"
                    }
                })}
                   type="email" id="email" />
            <label className="checkbox" htmlFor="terms">

                <input {...register("terms",
                    {
                        required: 'Accepting terms and conditions is required',
                        value: true
                    })}
                       type="checkbox" id="terms" />
                <span/>
                I hereby give consent for my personal data included in my application to be processed
                for the purposes of the recruitment process under the European Parliament’s and Council
                of the European Union Regulation on the Protection of Natural Persons as of 27 April
                2016, with regard to the processing of personal data and on the free movement of such
                data, and repealing Directive 95/46/EC (Data Protection Directive)
            </label>
            {errors.terms?.message && <p className="contact__label" style={{color: 'red', textAlign: 'right', marginTop: '10px'}}>{errors.terms?.message}</p>}
            <button className="btn btn--form" type="submit">Send</button>

            <Recaptcha
                sitekey={RECAPTCHA_KEY}
                render="explicit"
                hl="en"
                size="invisible"
            />
        </form>
    )
};

export default ContactForm;