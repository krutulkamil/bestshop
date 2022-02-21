// react
import React, {FunctionComponent, useContext, useState} from 'react';
// react-router-dom
import {NavigateFunction, useNavigate, Link} from 'react-router-dom';
// react-hook-form
import {useForm} from "react-hook-form";
// react-recaptcha
import Recaptcha from "react-recaptcha";
// react-password-strength-bar
import PasswordStrengthBar from 'react-password-strength-bar';
// react-toastify
import {toast} from 'react-toastify';
// axios
import axios from "axios";
// context
import {UserContext} from "../context";

const Register: FunctionComponent = (): JSX.Element => {
    const [state, setState] = useContext(UserContext);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [passwordStrength, setPasswordStrength] = useState<string>("");
    const RECAPTCHA_KEY: string = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const navigate: NavigateFunction = useNavigate();

    if (state && state.user.name) {
        navigate("/");
    }

    return (
        <div className="auth__container">
            <div className="auth__head">
                <div className="auth__welcome">
                    <h1 className="auth__header">Let's get started</h1>
                    <p className="auth__text">
                        Sign up for free. No credit card required.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(async (credentials) => {
                try {
                    const { data } = await axios.post("/register", credentials);
                    if (data.error) {
                        toast.error(data.error);
                    } else {
                        toast.success(`Welcome ${data.user.name}!`);
                        reset({name: '', email: '', password: ''});
                        setPasswordStrength("");
                        setState(data);
                        localStorage.setItem('auth', JSON.stringify(data));
                        navigate("/");
                    }

                } catch (error) {
                    toast.error(error.message);
                }
            })} className="auth__form">
                <label
                    htmlFor="name"
                    className="auth__label">NAME
                    {errors.name?.message &&
                        <span className="warning"> - {errors.name?.message}</span>}
                    {errors.name?.type === "maxLength" &&
                        <span className="warning"> - Max length exceeded </span>}
                    {errors.name?.type === "minLength" &&
                        <span className="warning"> - At least 5 characters needed! </span>}
                </label>
                <input {...register("name",
                    {
                        required: 'This field is required', maxLength: 30, minLength: 5
                    })}
                       type="text" id="name" />
                <label
                    htmlFor="email"
                    className="auth__label">E-MAIL
                    {errors.email?.message &&
                        <span className="warning"> - {errors.email?.message}</span>}
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
                    className="auth__label">PASSWORD
                    {errors.password?.message &&
                        <span className="warning"> - {errors.password?.message}</span>}
                    {errors.password?.type === "minLength" &&
                        <span className="warning"> - Your password is too short! </span>}
                </label>
                <input
                    type="password"
                    value={passwordStrength}
                    onChange={e => setPasswordStrength(e.target.value)}
                    id="password-strength"/>
                <PasswordStrengthBar password={passwordStrength} minLength={6} className="strength-bar"/>
                <label
                    htmlFor="password"
                    className="auth__label">CONFIRM PASSWORD
                    {errors.password?.message &&
                        <span className="warning"> - {errors.password?.message}</span>}
                    {errors.password?.type === "minLength" &&
                        <span className="warning"> - Your password is too short! </span>}
                </label>
                <input {...register("password",
                    {
                        required: 'This field is required', minLength: 6, validate: {
                            passwordEqual: value => (value === passwordStrength) || 'Passwords do not match!'
                    }})}
                       type="password" id="password" />
                <div className="auth__submit">
                    <Link to="/login" className="auth__redirect">Already have an account? Log in!</Link>
                    <button className="btn btn--form" type="submit">Register</button>
                </div>
                <Recaptcha
                    sitekey={RECAPTCHA_KEY}
                    render="explicit"
                    hl="en"
                    size="invisible"
                />
            </form>
        </div>
    );
};

export default Register;
