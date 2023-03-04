import React from "react";
import { FaGg, FaSearch } from "react-icons/fa";
import {
    TbFaceIdError,
    TbFileInvoice,
    TbReportSearch,
    TbSettings,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiLogout, HiOutlineUsers } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Sidebar(props) {
    let menuItems = [
        {
            name: "Dashboard",
            icon: <RxDashboard className="text-xl" />,
        },
        {
            name: "Customers",
            icon: <HiOutlineUsers className="text-xl" />,
        },
        {
            name: "Billing",
            icon: <TbFileInvoice className="text-xl" />,
        },
        {
            name: "Assets",
            icon: <AiOutlineUnorderedList className="text-xl" />,
        },
        {
            name: "Reports",
            icon: <TbReportSearch className="text-xl" />,
        },
        {
            name: "Complaints",
            icon: <TbFaceIdError className="text-xl" />,
        },
        {
            name: "Settings",
            icon: <TbSettings className="text-xl" />,
        },
    ];
    return (
        <div
            className={
                (!props.mobileMenuOpen
                    ? "left-[-250px] md:left-0 "
                    : "left-0 md:left-[-250px] ") +
                "w-[250px] absolute h-full transition-ease z-10 bg-white flex flex-col border-r"
            }
        >
            <div className="brand p-3">
                <Link
                    to=""
                    className="-m-1.5 p-1.5 flex items-center justify-center gap-2 text-xl font-semibold text-indigo-700"
                >
                    <FaGg className=" text-2xl" />
                    <span className="">Billwise</span>
                </Link>
            </div>

            {/* Search */}
            <div className="p-3 flex ">
                <form action="#">
                    <div className="flex bg-gray-100 border rounded-md">
                        <input
                            id="search"
                            type="search"
                            placeholder="Search..."
                            name="search"
                            className="block bg-transparent w-full appearance-none p-2 px-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <button className=" text-indigo-700 border-l border-l-gray-300 p-2 rounded-r-md">
                            <FaSearch />
                        </button>
                    </div>
                </form>
            </div>

            {/* Menu */}
            <div className="customerMenu p-3">
                <small className="text-slate-400 leading-6 font-semibold text-xs">
                    MENU
                </small>
                <div className="flex flex-col">
                    {menuItems.map((menuItem, index) => (
                        <a
                            href="#"
                            className="flex items-center gap-3 text-base my-1 text-slate-700 hover:bg-slate-200 py-2 px-1"
                            key={index}
                        >
                            {menuItem.icon}
                            <span>{menuItem.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
