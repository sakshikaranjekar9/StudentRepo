import axios from "axios";
import { getToken } from "./AuthService";
const API_URL = "http://localhost:8083/api/students";

// const importStudents = (data) => {
//     return axios.post(`${API_URL}/import`, data);
// };
// console.log("Excel Data:", data);

// StudentService.importStudents(data)
//     .then(() => {
//         alert("Import successful");
//     })
//     .catch((err) => {
//         console.error(err);
//     });

const getAuthHeader = () => {

    const token = localStorage.getItem("token");

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

};

const StudentService = {

    // Get all students
    getAllStudents() {
        return axios.get(API_URL, getAuthHeader());
    },

    // Get student by ID
    getStudentById(id) {
        return axios.get(`${API_URL}/${id}`, getAuthHeader());
    },

    // Add student
    addStudent(student) {
        return axios.post(API_URL, student, getAuthHeader());
    },

    // Update student
    updateStudent(id, student) {
        return axios.put(`${API_URL}/${id}`, student, getAuthHeader());
    },

    // Delete student
    deleteStudent(id) {
        return axios.delete(`${API_URL}/${id}`, getAuthHeader());
    },

    // Search students
    searchStudents(keyword) {
        return axios.get(
            `${API_URL}/search?keyword=${keyword}`,
            getAuthHeader()
        );
    },

    exportExcel() {
    return axios.get(
        "http://localhost:8083/api/students/export",
        {
            responseType: "blob",
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }
    );
},

importStudents(data) {
    return axios.post(
        `${API_URL}/import`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`
            }
        }
    );
}

};

export default StudentService;