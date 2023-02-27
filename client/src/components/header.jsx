import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { FaGg } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const loggedIn = useSelector((state) => state.user.loggedIn);
    return (
        <div>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6  lg:px-5">
                    <div className="flex lg:flex-1">
                        <Link
                            to=""
                            className="-m-1.5 p-1.5 flex items-center gap-2 text-xl"
                        >
                            <FaGg className="text-blue-600 text-2xl" />
                            <span className="">Billwise</span>
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Menu</span>
                            <HiOutlineMenuAlt3
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    {/* LG Menu */}
                    <div className="hidden lg:flex lg:gap-x-10  border-r-2 mr-5 pr-5">
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-500"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-500"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-500"
                        >
                            Pricing
                        </a>
                    </div>

                    {/* Login and Get Started */}
                    <div className="hidden lg:flex lg:gap-x-5 items-center">
                        {!loggedIn && (
                            <>
                                <Link
                                    to="login"
                                    className="text-sm font-semibold leading-6 text-gray-500"
                                >
                                    Login
                                </Link>
                                <a href="#">
                                    <button className="bg-blue-500 text-white p-2 px-5 rounded-md">
                                        Get Started
                                    </button>
                                </a>
                            </>
                        )}
                        {loggedIn && (
                            <>
                                <Link to="/dashboard">
                                    <button className="bg-blue-500 text-white p-2 px-5 rounded-md">
                                        Dashboard
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu */}
                    <Dialog
                        as="div"
                        className="lg:hidden"
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <div className="fixed inset-0 z-10" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            {/* Title */}
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Billwise</span>
                                    <FaGg className="text-blue-600 text-2xl" />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <HiX
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            {/* Menu */}
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            About Us
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Contact U
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Pricing
                                        </a>
                                    </div>
                                    <div className="py-6 flex items-center gap-3">
                                        <Link
                                            to="/login"
                                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </Link>
                                        <a href="#">
                                            <button className="bg-blue-500 text-white p-2 px-5 rounded-md">
                                                Get Started
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </nav>
            </header>
        </div>
    );
}

export default Header;
