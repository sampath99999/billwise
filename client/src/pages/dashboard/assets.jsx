import React from "react";
import { Link } from "react-router-dom";
import { GiVillage } from "react-icons/gi";

function Assets() {
    return (
        <div className="p-2">
            <nav className="w-full rounded-md ">
                <ol className="list-reset flex font-medium">
                    <li>
                        <Link
                            to="/dashboard"
                            className="text-indigo-700 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                            /
                        </span>
                    </li>
                    <li className="text-neutral-500 dark:text-neutral-400">
                        Assets
                    </li>
                </ol>

                {/* Title */}
                <h1 className="font-semibold text-2xl mt-3">Assets</h1>

                <hr />

                <p className="text-sm text-gray-500 mt-1 w-3/4 text-justify">
                    In the Assets section of our dashboard, you can manage your
                    cable network's critical components. This includes managing
                    users, villages, streets, and service packages. With our
                    asset management tools, you can optimize network
                    performance, improve customer satisfaction, and streamline
                    operations.
                </p>

                <div className="flex mt-3">
                    <div
                        className="flex flex-col p-5 items-center border-2 shadow-lg hover:bg-gray-200"
                        role="button"
                    >
                        <GiVillage className="text-5xl" />
                        <small className="text-xl">Villages</small>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Assets;
