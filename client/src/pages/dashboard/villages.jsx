import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/dashboard/breadCrumb";
import { BiPlus } from "react-icons/bi";
import { Dialog } from "@headlessui/react";
import NewVillageModal from "../../components/dashboard/villages/newVillageModal";
function Villages() {
    let [isAddModalOpen, setIsAddModalOpen] = useState(false);

    function closeModal() {
        setIsAddModalOpen(false);
    }
    function openModal() {
        setIsAddModalOpen(true);
    }
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
            <div className="flex items-center justify-between mb-2">
                <h1 className="font-semibold text-2xl mt-3">Villages</h1>
                <button
                    className="bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    onClick={openModal}
                >
                    <BiPlus />
                    New Village
                </button>
            </div>
            <hr />

            <p className="text-sm text-gray-500 mt-1 w-3/4 text-justify">
                In the Assets section of our dashboard, you can manage your
                cable network's critical components. This includes managing
                users, villages, streets, and service packages. With our asset
                management tools, you can optimize network performance, improve
                customer satisfaction, and streamline operations.
            </p>

            {/* Modal */}
            <NewVillageModal
                isOpen={isAddModalOpen}
                closeModal={closeModal}
                openModal={openModal}
            ></NewVillageModal>
        </div>
    );
}

export default Villages;
