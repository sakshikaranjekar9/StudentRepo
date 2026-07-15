import React, { useEffect, useState } from "react";
import DashboardService from "../services/DashboardService";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import DashboardCard from "../components/DashboardCard";
import StudentGrowthChart from "../components/StudentGrowthChart";
import RecentStudents from "../components/RecentStudents";
import QuickActions from "../components/QuickActions";

import {
    FaUserGraduate,
    FaUsers,
    FaBook,
    FaClipboardList
} from "react-icons/fa";

function Dashboard() {

    const [dashboard, setDashboard] = useState({
        totalStudents: 0,
        totalUsers: 0,
        totalCourses: 0,
        newAdmissions: 0
    });

    useEffect(() => {

        DashboardService.getDashboard()
            .then((response) => {
                setDashboard(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (

        <div className="d-flex">

            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}

            <div className="flex-grow-1">

                {/* Header */}

                <Header />

                <div className="container-fluid p-4">

                    <h2 className="mb-4">
                        Welcome to Student Management System 
                    </h2>

                    {/* Dashboard Cards */}

                    <div className="row g-4">

                        <DashboardCard
                            title="Students"
                            value={dashboard.totalStudents}
                            icon={<FaUserGraduate />}
                            color="bg-primary"
                        />

                        <DashboardCard
                            title="Users"
                            value={dashboard.totalUsers}
                            icon={<FaUsers />}
                            color="bg-success"
                        />

                        <DashboardCard
                            title="Courses"
                            value={dashboard.totalCourses}
                            icon={<FaBook />}
                            color="bg-warning"
                        />

                        <DashboardCard
                            title="Admissions"
                            value={dashboard.newAdmissions}
                            icon={<FaClipboardList />}
                            color="bg-danger"
                        />

                    </div>

                    {/* Chart + Right Panel */}

                    <div className="row mt-4">

                        <div className="col-lg-8">

                            <StudentGrowthChart />

                            <div className="mt-4">

                                <RecentStudents />

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <QuickActions />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;