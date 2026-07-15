import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import DashboardService from "../services/DashboardService";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function StudentGrowthChart() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Student Admissions",
                data: [],
                borderColor: "#0d6efd",
                backgroundColor: "rgba(13,110,253,0.2)",
                fill: true,
                tension: 0.4
            }
        ]
    });

    useEffect(() => {

        DashboardService.getGrowthChart()
            .then((response) => {

                const labels = response.data.map(item => item.month);
                const values = response.data.map(item => item.total);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: "Student Admissions",
                            data: values,
                            borderColor: "#0d6efd",
                            backgroundColor: "rgba(13,110,253,0.2)",
                            fill: true,
                            tension: 0.4
                        }
                    ]
                });

            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <div className="card shadow p-3">
            <h5>Student Growth</h5>
            <Line data={chartData} />
        </div>
    );
}

export default StudentGrowthChart;