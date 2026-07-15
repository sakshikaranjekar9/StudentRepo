import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUserPlus,
    FaUsers,
    FaList,
    FaChartBar
} from "react-icons/fa";

function QuickActions() {

    const navigate = useNavigate();

    return (

        <div className="card shadow">

            <div className="card-body">

                <h5 className="mb-3">

                    Quick Actions

                </h5>

                <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => navigate("/add-student")}
                >
                    <FaUserPlus className="me-2"/>
                    Add Student
                </button>

                <button
                    className="btn btn-success w-100 mb-2"
                    onClick={() => navigate("/students")}
                >
                    <FaList className="me-2"/>
                    View Students
                </button>

                <button
                    className="btn btn-warning w-100 mb-2"
                >
                    <FaUsers className="me-2"/>
                    Users
                </button>

                <button
                    className="btn btn-dark w-100"
                >
                    <FaChartBar className="me-2"/>
                    Reports
                </button>

            </div>

        </div>

    );

}

export default QuickActions;