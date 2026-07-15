import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import ProtectedRoute from "./components/ProtectedRoute";
import AddStudent from "./pages/AddStudent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} /> */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
 
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentList />
            </ProtectedRoute>
          }
        />

     <Route
    path="/add-student"
    element={
        <ProtectedRoute>
            <AddStudent />
        </ProtectedRoute>
    }
    />
    
    {/* <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} /> */}

  </Routes>

      <ToastContainer
    position="top-right"
    autoClose={3000}
    />

    </BrowserRouter>

  );
}

export default App;
