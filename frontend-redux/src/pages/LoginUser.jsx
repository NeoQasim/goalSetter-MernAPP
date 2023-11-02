/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

const LoginUser = () => {
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formdata;
    const handleChanege = (e) => {
        setformdata((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
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
