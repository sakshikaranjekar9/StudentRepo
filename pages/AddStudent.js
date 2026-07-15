import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentService from "../services/StudentService";
import { toast } from "react-toastify";

function AddStudent() {

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        course: "",
        phone: "",
        city: ""
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const saveStudent = (e) => {
        e.preventDefault();

        StudentService.addStudent(student)
            .then(() => {
                toast.success("Student Added Successfully!");
                navigate("/students");
            })
            .catch((error) => {
    console.error(error);

    if (error.response) {
        alert("Error: " + error.response.status + "\n" + JSON.stringify(error.response.data));
    } else {
        alert(error.message);
    }
});
    };

    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <div className="card shadow">
                    <div className="card-header">
                        <h3>Add Student</h3>
                    </div>

                    <div className="card-body">

                        <form onSubmit={saveStudent}>

                            <div className="mb-3">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={student.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={student.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Course</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={student.course}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={student.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                              <label>City</label>
                                <textarea
                                    className="form-control"
                                    name="city"
                                    value={student.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success">
                                Save Student
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AddStudent;