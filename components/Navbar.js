import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const handleSearch = (e) => {

    if (e.key === "Enter") {

        window.location.href = "/students?search=" + keyword;

    }

};
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    Student Management
                </Link>

                <div className="d-flex align-items-center">

    <div className="input-group me-4" style={{ width: "350px" }}>

        <span className="input-group-text">

            <FaSearch/>

        </span>

        <input

            type="text"

            className="form-control"

            placeholder="Search Student..."

            value={keyword}

            onChange={(e)=>setKeyword(e.target.value)}

            onKeyDown={handleSearch}

        />

    </div>

</div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/students">
                                Students
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-student">
                                Add Student
                            </Link>
                        </li>

                        <li className="nav-item">
                            <button
                                className="btn btn-danger ms-3"
                                onClick={logout}>
                                Logout
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;