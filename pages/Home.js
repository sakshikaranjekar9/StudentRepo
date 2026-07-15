import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container">

                    <Link className="navbar-brand fw-bold" to="/">
                        🎓 Student Management System
                    </Link>

                    <div>
                        <Link
                            to="/login"
                            className="btn btn-outline-light me-2">

                            Login

                        </Link>

                        <Link
                            to="/register"
                            className="btn btn-success">

                            Register

                        </Link>

                    </div>

                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">

                <div className="container">

                    <h1>
                        Student Management System
                    </h1>

                    <p>
                        Manage students quickly and securely with an easy-to-use dashboard.
                        Add, edit, search, update, delete, import and export student
                        records with JWT authentication.
                    </p>

                    <Link
                        to="/login"
                        className="btn btn-primary btn-lg mt-3">

                        Get Started

                    </Link>

                </div>

            </section>

            {/* Features */}
            <section className="container py-5">

                <h2 className="text-center mb-5">
                    Features
                </h2>

                <div className="row g-4">

                    <div className="col-md-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>👨‍🎓</h3>

                                <h4>Student Management</h4>

                                <p>
                                    Add, edit, update and delete student
                                    information instantly.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>🔒</h3>

                                <h4>Secure Login</h4>

                                <p>
                                    JWT Authentication protects your
                                    application and user data.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>📊</h3>

                                <h4>Dashboard</h4>

                                <p>
                                    View student statistics and manage
                                    records from one place.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Choose */}
            <section className="bg-light py-5">

                <div className="container">

                    <h2 className="text-center mb-4">
                        Why Choose Our System?
                    </h2>

                    <div className="row">

                        <div className="col-md-6">

                            <ul className="list-group">

                                <li className="list-group-item">
                                    ✔ Secure JWT Authentication
                                </li>

                                <li className="list-group-item">
                                    ✔ Student CRUD Operations
                                </li>

                                <li className="list-group-item">
                                    ✔ Search Students
                                </li>

                                <li className="list-group-item">
                                    ✔ Import Excel Data
                                </li>

                                <li className="list-group-item">
                                    ✔ Export Excel Data
                                </li>

                                <li className="list-group-item">
                                    ✔ Responsive Design
                                </li>

                            </ul>

                        </div>

                        <div className="col-md-6">

                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
                                alt="Students"
                                className="img-fluid rounded shadow"
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center p-4">

                <h5>Student Management System</h5>

                <p>
                    Built with React • Spring Boot • MySQL • JWT
                </p>

                <small>
                    © 2026 All Rights Reserved
                </small>

            </footer>

        </>
    );
}

export default Home;