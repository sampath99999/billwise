import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";
import getBaseUrl from "./url";

const authInstance = axios.create({
    baseURL: getBaseUrl(), // Replace with your API base URL
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
            redirect("/");
            toast.error("Login again!");
        }
        return Promise.reject(error);
    }
);

export default authInstance;
