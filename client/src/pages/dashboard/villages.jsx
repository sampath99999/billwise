import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/dashboard/breadCrumb";

function Villages() {
    let breadCrumb = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Assets",
            link: "../assets",
        },
        {
            name: "Villages",
        },
    ];
    return (
        <div>
            <BreadCrumb items={breadCrumb} />
        </div>
    );
}

export default Villages;
