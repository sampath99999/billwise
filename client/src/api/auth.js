import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import instance from "./axios";
import { login as loginAction, setUser } from "../features/user/userSlice";
import authInstance from "./axios_authed";

export let login = async function (username, password) {
    if (!username) {
        toast.error("Please enter a username");
        return false;
    }
    if (!password) {
        toast.error("Please enter a password");
        return false;
    }
    try {
        let response = await instance.post("users/login", {
            username,
            password,
        });
        localStorage.setItem("token", response.data.token);
        return true;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response.data.message);
            return false;
        }
        toast.error("Something went wrong");
        console.log(error);
        return false;
    }
};

export let verify = async function () {
    let dispatch = useDispatch();
    let token = localStorage.getItem("token");
    if (token) {
        try {
            let response = await authInstance.get("users/verify");
            dispatch(loginAction());
            dispatch(setUser(response.data));
        } catch (e) {
            if (e instanceof AxiosError) {
                toast.error("Error from Server");
                return false;
            }
            toast.error("Something went wrong");
            console.log(e);
            return false;
        }
    }
};
