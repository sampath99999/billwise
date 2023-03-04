import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaArrowDown, FaGg, FaPlus } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Account from "./account";

function Header(props) {
    const user = useSelector((state) => state.user.user);
    return (
        <div className="bg-indigo-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
                <button className="text-xl">
                    <HiMenuAlt1
                        onClick={() =>
                            props.setMobileMenuOpen(!props.mobileMenuOpen)
                        }
                    />
                </button>
                <Link
                    to=""
                    className="-m-1.5 p-1.5 text-xl ml-3 transition-ease"
                >
                    <FaGg className="text-white text-2xl" />
                </Link>
            </div>
            <div className="right">
                <Account />
            </div>
        </div>
    );
}

export default Header;
