/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const RegisterUser = () => {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { name, email, password, password2 } = formdata;
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
                            type="password2"
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
