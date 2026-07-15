import React from "react";

function DashboardCard({ title, value, icon, color }) {

    return (

        <div className="col-md-3">

            <div className={`card ${color} text-white shadow h-100`}>

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-uppercase">
                                {title}
                            </h6>

                            <h2 className="fw-bold">
                                {value}
                            </h2>

                        </div>

                        <div
                            style={{
                                fontSize: "50px",
                                opacity: 0.8
                            }}
                        >
                            {icon}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DashboardCard;