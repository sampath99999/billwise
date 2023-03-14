import React, { createRef, useState } from "react";
import BreadCrumb from "../../components/dashboard/breadCrumb";
import { BiPlus } from "react-icons/bi";
import NewVillage from "../../components/dashboard/villages/newVillageModal";
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
	let tableBody = createRef();
	let handleNewVillage = function () {
		tableBody.current.appendChild(<NewVillage />);
	};
	return (
		<div>
			<BreadCrumb items={breadCrumb} />
			<div className="flex items-center justify-between mb-2">
				<h1 className="font-semibold text-2xl mt-3">Villages</h1>
				<button
					onClick={handleNewVillage}
					className="bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
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

			<table className="table table-auto w-full max-w-3xl mt-5 text-sm text-left text-gray-500 dark:text-gray-500">
				<thead className="text-xs text-gray-800 uppercase bg-gray-100">
					<tr>
						<th className="font-medium w-1/6 p-2">S.No</th>
						<th className="font-medium w-4/6 p-2">Name</th>
						<th className="font-medium w-1/6 p-2">Action</th>
					</tr>
				</thead>
				<tbody ref={tableBody}></tbody>
			</table>
		</div>
	);
}

export default Villages;
