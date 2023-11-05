/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authslice";
import Spinner from "../Components/Spinner";

const RegisterUser = () => {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { name, email, password, password2 } = formdata;
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
            navigate("/");
        }
        if (message === "User already exists.") {
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
        if (!name || !email || !password) {
            return toast.error("ss");
        }
        if (password !== password2) {
            toast.error("passwords doesnot match");
        } else {
            const userData = {
                name,
                email,
                password,
            };
            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create your account </p>
            </section>

            <section className="form">
                <form
                    action=""
                    onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="enter your name"
                            onChange={handleChanege}
                        />
                    </div>
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
                        <input
                            className="form-control"
                            type="password"
                            name="password2"
                            id="password2"
                            value={password2}
                            placeholder="enter your password2"
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

export default RegisterUser;
