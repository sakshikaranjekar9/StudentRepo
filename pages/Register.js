import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "ROLE_USER"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await AuthService.register(user);

            alert(response.data);

            navigate("/login");

        } catch (error) {

            alert("Registration Failed");

            console.log(error);

        }

    };

    return (

        <div style={{ width: "350px", margin: "100px auto" }}>

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={user.fullName}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Register
                </button>

            </form>

            <br />

            <Link to="/login">
                Already have an account? Login
            </Link>

        </div>

    );
}

export default Register;