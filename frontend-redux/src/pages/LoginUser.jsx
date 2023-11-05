/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import Spinner from "../Components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, register, reset } from "../features/auth/authslice";

const LoginUser = () => {
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formdata;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate("/dashboard");
        }
        if (message === "please enter all the fields") {
            toast.error(message); // Display the message
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const handleChanege = (e) => {
        setformdata((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };
        if ( !email || !password) {
            return toast.error("ss");
        }
        dispatch(login(userData));
    };
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Sign in
                </h1>
                <p>Log in to Set Your Goals</p>
            </section>
            <section className="form">
                <form
                    action=""
                    onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            placeholder="enter your email"
                            onChange={handleChanege}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="enter your password"
                            onChange={handleChanege}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default LoginUser;
