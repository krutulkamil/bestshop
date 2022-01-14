import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import Recaptcha from "react-recaptcha";
import {toast} from 'react-toastify'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../context";

const Login = () => {
    const [state, setState] = useContext(UserContext);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const navigate = useNavigate();

    if (state && state.user.name) {
        navigate("/");
    }

    return (
        <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <div style={{textAlign: "center"}}>
                    <h1 style={{fontWeight: 'bold', paddingTop: "50px"}}>Login</h1>
                    <p style={{paddingBottom: '40px'}}>
                        Access your subscription. Anytime. Anywhere.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit(async (credentials) => {
                try {
                    const { data } = await axios.post("/login", credentials);
                    if (data.error) {
                        toast.error(data.error)
                    } else {
                        reset({ email: '', password: '' });
                        setState(data);
                        localStorage.setItem('auth', JSON.stringify(data));
                        navigate("/");
                    }

                } catch (error) {
                    toast.error(error.message)
                }
            })} className="login__form">
                <label
                    htmlFor="email"
                    className="login__label">E-MAIL
                    {errors.email?.message && <span style={{color: 'red'}}> - {errors.email?.message}</span>}
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
                    htmlFor="password"
                    className="login__label">PASSWORD
                    {errors.password?.message &&
                        <span style={{color: 'red'}}> - {errors.password?.message}</span>}
                    {errors.password?.type === "minLength" &&
                        <span style={{color: 'red'}}> - Your password is too short! </span>}
                </label>
                <input {...register("password",
                    {
                        required: 'This field is required', minLength: 6
                    })}
                       type="password" id="password" />
                <button className="btn btn--form" type="submit">Login</button>
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