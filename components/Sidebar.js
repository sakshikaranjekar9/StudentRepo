import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
    FaHome,
    FaUserGraduate,
    FaUserPlus,
    FaUsers,
    FaChartBar,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            icon: <FaHome />,
            path: "/dashboard"
        },
        {
            name: "Students",
            icon: <FaUserGraduate />,
            path: "/students"
        },
        {
            name: "Add Student",
            icon: <FaUserPlus />,
            path: "/add-student"
        },
        {
            name: "Users",
            icon: <FaUsers />,
            path: "/users"
        },
        {
            name: "Reports",
            icon: <FaChartBar />,
            path: "/reports"
        },
        {
            name: "Settings",
            icon: <FaCog />,
            path: "/settings"
        }
    ];

    return (

        <div
            className="bg-dark text-white vh-100 p-3"
            style={{ width: "250px" }}
        >

            <h3 className="text-center mb-4">
                SMS
            </h3>

            {

                menuItems.map((item) => (

                    <Link
                        key={item.path}
                        to={item.path}
                        className={`btn w-100 text-start mb-2 ${
                            location.pathname === item.path
                                ? "btn-primary"
                                : "btn-dark"
                        }`}
                    >

                        {item.icon}

                        <span className="ms-2">

                            {item.name}

                        </span>

                    </Link>

                ))

            }

            <hr />

            <button
                className="btn btn-danger w-100"
                onClick={() => {

                    localStorage.clear();

                    window.location.href="/login";

                }}
            >

                <FaSignOutAlt />

                <span className="ms-2">

                    Logout

                </span>

            </button>

        </div>

    );

}

export default Sidebar;