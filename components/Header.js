import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {

    const email = localStorage.getItem("email");

    return (

        <div className="bg-white shadow-sm p-3">

            <div className="d-flex justify-content-between align-items-center">

                <div>

                    <h4>

                        Home

                    </h4>

                </div>

                <div>

                    <FaBell
                        size={22}
                        className="me-4"
                    />

                    <FaUserCircle
                        size={28}
                    />

                    <span className="ms-2">

                        {email}

                    </span>

                </div>

            </div>

        </div>

    );

}

export default Header;