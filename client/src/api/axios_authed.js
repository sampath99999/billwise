import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";

const authInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1/", // Replace with your API base URL
});

// Add request interceptor to attach the token to every request
authInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor to handle errors
authInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // Handle unauthorized error (e.g., redirect to login page)
            localStorage.clear();
            toast.error("Login again!");
            redirect("/login");
        }
        return Promise.reject(error);
    }
);

export default authInstance;
