import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import * as XLSX from "xlsx";
import StudentService from "../services/StudentService";

//export students to excel
const exportStudents = () => {

    StudentService.exportExcel()
        .then((response) => {

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;
            link.download = "students.xlsx";

            document.body.appendChild(link);

            link.click();

            link.remove();
        });
};

// {/* <button
//     className="btn btn-success me-2"
//     onClick={exportStudents}
// >
//     Export Excel
// </button> */}

function StudentList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    // Load students
    const loadStudents = useCallback(() => {
        setLoading(true);

        const params = new URLSearchParams(location.search);
        const keyword = params.get("search");

        const request = keyword
            ? StudentService.searchStudents(keyword)
            : StudentService.getAllStudents();

        request
            .then((response) => {
                 console.log(response.data);
                 setStudents(response.data);
            })
            .catch((error) => {
                console.error("Error loading students:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [location.search]);

    useEffect(() => {
        loadStudents();
    }, [loadStudents]);

    const deleteStudent = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            StudentService.deleteStudent(id)
                .then(() => {
                    loadStudents();
                })
                .catch((error) => {
                    console.error("Delete failed:", error);
                });
        }
    };
    
    const handleImport = (event) => {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {

        const workbook = XLSX.read(e.target.result, {
            type: "binary",
        });

        const sheet =
            workbook.Sheets[workbook.SheetNames[0]];

        const excelData = XLSX.utils.sheet_to_json(sheet);

console.log("Excel Data:", excelData);

const students = excelData.map(row => ({
    firstName: row["First Name"],
    lastName: row["Last Name"],
    email: row["Email"],
    course: row["Course"],
    phone: row["Phone"],
    city: row["City"]
}));

console.log("First Excel Row:", excelData[0]);
console.log("First Student:", students[0]);

StudentService.importStudents(students)
    .then(() => {
        alert("Students imported successfully!");
        loadStudents();
    })
    .catch((error) => {
        console.error(error);
    });
    };

    reader.readAsBinaryString(file);
};

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Student List</h2>

                    <Link
                        to="/add-student"
                        className="btn btn-success"
                    >
                        Add Student
                    </Link>
                </div>

                {/* <button
                className="btn btn-primary"
                onClick={exportStudents}
                >
                    Export Excel
                </button> */}

    <input
        type="file"
        accept=".xlsx"
        onChange={handleImport}
        className="form-control"
        align="right"
        style={{ width: "250px" }}
    />

                <table className="table table-bordered table-hover shadow">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.course}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.city}</td>

                                    <td>
                                        <Link
                                            to={`/edit-student/${student.id}`}
                                            className="btn btn-primary btn-sm me-2"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteStudent(student.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">
                                    No students found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button
    className="btn btn-success me-2"
    onClick={exportStudents}
>
    Export Excel
</button>
            </div>

        </>
    );
}

export default StudentList;