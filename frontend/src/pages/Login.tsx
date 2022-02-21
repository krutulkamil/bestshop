// react
import React, {FunctionComponent, useContext} from 'react';
// react-router-dom
import {Link, NavigateFunction, useNavigate} from 'react-router-dom';
// react-hook-form
import {useForm} from "react-hook-form";
// react-recaptcha
import Recaptcha from "react-recaptcha";
// react-toastify
import {toast} from 'react-toastify'
// axios
import axios from 'axios';
// context
import {UserContext} from "../context";

const Login: FunctionComponent = (): JSX.Element => {
    const [state, setState] = useContext(UserContext);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const RECAPTCHA_KEY: string = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const navigate: NavigateFunction = useNavigate();

    if (state && state.user.name) {
        navigate("/");
    }

    return (
        <div className="auth__container">
            <div className="auth__head">
                <div className="auth__welcome">
                    <h1 className="auth__header">Login</h1>
                    <p className="auth__text">
                        Access your subscription. Anytime. Anywhere.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(async (credentials) => {
                try {
                    const {data} = await axios.post("/login", credentials);
                    if (data.error) {
                        toast.error(data.error)
                    } else {
                        reset({email: '', password: ''});
                        setState(data);
                        localStorage.setItem('auth', JSON.stringify(data));
                        navigate("/account");
                    }

                } catch (error) {
                    toast.error(error.message)
                }
            })} className="auth__form">
                <label
                    htmlFor="email"
                    className="auth__label">E-MAIL
                    {errors.email?.message && <span className="warning"> - {errors.email?.message}</span>}
                </label>
                <input {...register("email",
                    {
                        required: 'This field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Incorrect e-mail address!"
                        }
                    })}
                       type="email" id="email"/>
                <label
                    htmlFor="password"
                    className="auth__label">PASSWORD
                    {errors.password?.message &&
                        <span className="warning"> - {errors.password?.message}</span>}
                    {errors.password?.type === "minLength" &&
                        <span className="warning"> - Your password is too short! </span>}
                </label>
                <input {...register("password",
                    {
                        required: 'This field is required', minLength: 6
                    })}
                       type="password" id="password"/>
                <div className="auth__submit">
                    <Link to="/register" className="auth__redirect">Don't have an account yet? Sign Up</Link>
                    <button className="btn btn--form" type="submit">Login</button>
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

export default Login;