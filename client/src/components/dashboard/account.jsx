import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Account() {
    let user = useSelector((state) => state.user.user);
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex items-center gap-3 w-full justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none">
                        <span className="username">
                            {user ? user.name : ""}
                        </span>
                        <AiOutlineDown />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                >
                                    Account settings
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm"
                                >
                                    Logout
                                </a>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default Account;
