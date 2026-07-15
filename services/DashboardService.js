import axios from "axios";

const API_URL = "http://localhost:8083/api/dashboard";

const getDashboard = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};

const getGrowthChart = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL + "/growth", {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

};

const getRecentStudents = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL + "/recent", {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

};

export default {

    getDashboard,
    getGrowthChart,
    getRecentStudents

};

// export default DashboadService;