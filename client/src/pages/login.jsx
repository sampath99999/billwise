import React, { useState } from "react";
import { RxLockClosed } from "react-icons/rx";
import { FaGg } from "react-icons/fa";
import { login } from "./../api/auth";
import { useDispatch } from "react-redux";
import { login as loginAction } from "./../features/user/userSlice";

function Login() {
    let [formData, setFormData] = useState({
        username: "",
        password: "",
        rememberMe: false,
    });
    const dispatch = useDispatch();
    const handleSubmit = async function (e) {
        e.preventDefault();
        let response = await login(formData.username, formData.password);
        if (response) {
            dispatch(loginAction());
        }
    };
    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <FaGg className="text-blue-600 text-5xl mx-auto" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{" "}
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Get Started here
                            </a>
                        </p>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="font-medium text-gray-600"
                                >
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    // required
                                    value={formData.username}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            username: e.target.value,
                                        });
                                    }}
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 p-2 px-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="font-medium text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    // required
                                    value={formData.password}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        });
                                    }}
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 p-2 px-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            rememberMe: e.target.checked,
                                        });
                                    }}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <RxLockClosed
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
