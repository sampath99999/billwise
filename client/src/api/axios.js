import axios from "axios";
import { redirect } from "react-router-dom";
import toast from "react-hot-toast";
import getBaseUrl from "./url";

const instance = axios.create({
    baseURL: getBaseUrl(), // Replace with your API base URL
});

export default instance;
