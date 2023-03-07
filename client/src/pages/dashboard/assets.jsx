import React from "react";
import { Link } from "react-router-dom";
import { GiVillage } from "react-icons/gi";
import BreadCrumb from "../../components/dashboard/breadCrumb";

function Assets() {
    let breadCrumb = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Assets",
        },
    ];
    return (
        <div className="">
            <BreadCrumb items={breadCrumb} />

            {/* Title */}
            <h1 className="font-semibold text-2xl mt-3">Assets</h1>

            <hr />

            <p className="text-sm text-gray-500 mt-1 w-3/4 text-justify">
                In the Assets section of our dashboard, you can manage your
                cable network's critical components. This includes managing
                users, villages, streets, and service packages. With our asset
                management tools, you can optimize network performance, improve
                customer satisfaction, and streamline operations.
            </p>

            <div className="flex mt-3">
                <Link
                    className="flex flex-col p-5 items-center border-2 shadow-lg hover:bg-gray-200"
                    role="button"
                    to="../villages"
                >
                    <GiVillage className="text-5xl" />
                    <small className="text-xl">Villages</small>
                </Link>
            </div>
        </div>
    );
}

export default Assets;
