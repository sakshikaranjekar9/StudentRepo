# 🎓 Student Management System

A full-stack **Student Management System** built with **React.js**, **Spring Boot**, **MySQL**, and **JWT Authentication**. This application enables users to securely manage student records with CRUD operations, search functionality, dashboard analytics, and Excel export.

---

## 📖 Project Overview

The Student Management System is designed to simplify the management of student records through a secure and user-friendly web application.

Users can:

- Register and log in securely
- Manage student records
- Search students
- View dashboard statistics
- Export student data to Excel
- Access protected routes using JWT Authentication

---

## 🚀 Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Remember Me (Local Storage / Session Storage)
- Logout

### Dashboard

- Dashboard Overview
- Total Students Count
- Student Statistics
- Responsive Cards

### Student Management

- Add Student
- Update Student
- Delete Student
- View Student List
- Search Students
- Responsive Table

### Excel Support

- Export Student Data to Excel (.xlsx)

### User Interface

- Responsive Design
- Bootstrap 5
- Clean Navigation
- Loading Spinner
- Confirmation Dialogs

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap 5
- XLSX

### Backend

- Java 17
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

### Database

- MySQL

### Build Tools

- Maven
- npm

---

## 📂 Project Structure

### Frontend

```
student-management-frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
│
├── public/
└── package.json
```

### Backend

```
student-management-backend/
│
├── controller/
├── entity/
├── repository/
├── service/
├── config/
├── dto/
├── security/
└── StudentManagementApplication.java
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

### 2️⃣ Backend Setup

Open the backend project in Eclipse or IntelliJ.

Configure `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update

server.port=8083
```

Run

```
StudentManagementApplication.java
```

---

### 3️⃣ Frontend Setup

```bash
cd student-management-frontend

npm install

npm start
```

Application runs on

```
http://localhost:3000
```

---

## 🔐 Authentication

The application uses **JWT Authentication**.

After successful login:

- JWT Token is generated
- Stored in Local Storage or Session Storage
- Automatically attached to API requests

Protected pages require authentication.

---

## 📡 REST APIs

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

### Students

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/students` | Get All Students |
| GET | `/api/students/{id}` | Get Student by ID |
| POST | `/api/students` | Add Student |
| PUT | `/api/students/{id}` | Update Student |
| DELETE | `/api/students/{id}` | Delete Student |
| GET | `/api/students/search?keyword=` | Search Students |
| GET | `/api/students/export` | Export Excel |

---

## 📸 Screenshots

### Home Page

_Add screenshot here_

---

### Login Page

_Add screenshot here_

---

### Dashboard

_Add screenshot here_

---

### Student List

_Add screenshot here_

---

## 📈 Future Enhancements

- Excel Import
- PDF Export
- Student Profile Image
- Pagination
- Sorting
- Advanced Filters
- Email Notifications
- Role-Based Access Control
- Dark Mode

---

## 🧪 Testing

Backend APIs tested using:

- Postman

Frontend tested using:

- Chrome Browser

---

## 👩‍💻 Author

**Sakshi Karanjekar**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://www.linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.