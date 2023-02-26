import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1/", // Replace with your API base URL
});

export default instance;
