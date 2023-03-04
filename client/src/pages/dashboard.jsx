import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";

function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="flex min-h-screen">
            <div
                className={
                    (mobileMenuOpen ? "" : "hidden ") +
                    "sidebarBg md:hidden bg-black h-full w-full z-10 absolute left-0 top-0 bg-opacity-50 transition-ease"
                }
                onClick={() => setMobileMenuOpen(false)}
            ></div>
            <Sidebar mobileMenuOpen={mobileMenuOpen} />
            <div
                className={
                    (!mobileMenuOpen ? "md:ml-[250px] " : "md:ml-[0px] ") +
                    "content flex-1 transition-ease flex flex-col"
                }
            >
                <Header
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
                <div className="content p-2 h-full bg-white">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
