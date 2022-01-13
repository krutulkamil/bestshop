import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import PasswordStrengthBar from 'react-password-strength-bar';
import Recaptcha from "react-recaptcha";
import axios from "axios";
import {toast} from 'react-toastify';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [passwordStrength, setPasswordStrength] = useState("");
    const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    return (

        <div style={{height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{textAlign: "center"}}>
                    <h1 style={{fontWeight: 'bold', paddingTop: "50px"}}>Let's get started</h1>
                    <p style={{paddingBottom: '40px'}}>
                        Sign up for free. No credit card required.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(async (credentials) => {
                try {
                    const { data } = await axios.post("http://localhost:8000/api/register", credentials);

                    if (data.error) {
                        toast.error(data.error);
                    } else {
                        toast.success(data.message);
                    }

                } catch (error) {
                    toast.error(error.message);
                }
            })} className="login__form">
                <label
                    htmlFor="name"
                    className="login__label">NAME
                    {errors.name?.message &&
                        <span style={{color: 'red'}}> - {errors.name?.message}</span>}
                    {errors.name?.type === "maxLength" &&
                        <span style={{color: 'red'}}> - Max length exceeded </span>}
                    {errors.name?.type === "minLength" &&
                        <span style={{color: 'red'}}> - At least 5 characters needed! </span>}
                </label>
                <input {...register("name",
                    {
                        required: 'This field is required', maxLength: 30, minLength: 5
                    })}
                       type="text" id="name" />
                <label
                    htmlFor="email"
                    className="login__label">E-MAIL
                    {errors.email?.message &&
                        <span style={{color: 'red'}}> - {errors.email?.message}</span>}
                </label>
                <input {...register("email",
                    {
                        required: 'This field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Incorrect e-mail address!"
                        }
                    })}
                       type="email" id="email" />
                <label
                    htmlFor="password-strength"
                    className="login__label">PASSWORD
                    {errors.password?.message &&
                        <span style={{color: 'red'}}> - {errors.password?.message}</span>}
                    {errors.password?.type === "minLength" &&
                        <span style={{color: 'red'}}> - Your password is too short! </span>}
                </label>
                <input
                    type="password"
                    value={passwordStrength}
                    onChange={e => setPasswordStrength(e.target.value)}
                    id="password-strength"/>
                <PasswordStrengthBar password={passwordStrength} minLength="6" className="strength-bar"/>
                <label
                    htmlFor="password"
                    className="login__label">CONFIRM PASSWORD
                    {errors.password?.message &&
                        <span style={{color: 'red'}}> - {errors.password?.message}</span>}
                    {errors.password?.type === "minLength" &&
                        <span style={{color: 'red'}}> - Your password is too short! </span>}
                </label>
                <input {...register("password",
                    {
                        required: 'This field is required', minLength: 6, validate: {
                            passwordEqual: value => (value === passwordStrength) || 'Passwords do not match!'
                    }})}
                       type="password" id="password" />
                <button className="btn btn--form" type="submit">Register</button>
                <Recaptcha
                    sitekey={RECAPTCHA_KEY}
                    render="explicit"
                    hl="pl"
                    size="invisible"
                />
            </form>
        </div>
    );
};

export default Register;
