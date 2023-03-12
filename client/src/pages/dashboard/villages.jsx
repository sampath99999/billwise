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
            <h1 className="font-semibold text-2xl mt-3">Villages</h1>
            <hr />

            <p className="text-sm text-gray-500 mt-1 w-3/4 text-justify">
                In the Assets section of our dashboard, you can manage your
                cable network's critical components. This includes managing
                users, villages, streets, and service packages. With our asset
                management tools, you can optimize network performance, improve
                customer satisfaction, and streamline operations.
            </p>
        </div>
    );
}

export default Villages;
