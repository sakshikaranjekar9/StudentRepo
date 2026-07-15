import axios from "axios";

const API_URL = "http://localhost:8083/auth";

export const getToken = () => {
    return (
        localStorage.getItem("token") ,
        sessionStorage.getItem("token")
    );
};

class AuthService {

    async login(user) {

        const response = await axios.post(`${API_URL}/login`, user);

        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }

        return response;
    }

    logout() {
        localStorage.removeItem("token");
    }

    register(user) {
        return axios.post(`${API_URL}/register`, user);
    }

    getToken() {
        return localStorage.getItem("token");
    }

    isLoggedIn() {
        return !!localStorage.getItem("token");
    }

}

export default new AuthService();