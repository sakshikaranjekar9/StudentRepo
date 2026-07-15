import React, { useState, token} from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import{rememberMe, setRememberMe} from "react";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await AuthService.login({
                email,
                password
            });

            console.log(response.data);

            const token = response.data.token;
            
            if (rememberMe) {
    localStorage.setItem("token", token)
} else {
    sessionStorage.setItem("token", token)
}

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Credentials");

            console.log(error);

        }

    };

    return (

        <div style={{ width: "350px", margin: "100px auto" }}>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember Me
                </label>

                <br/><br/>

                <button type="submit">
                    Login
                </button>

            </form>
            <br />

            <Link to="/register">
                Create Account
            </Link>

        </div>

    );
}

export default Login;