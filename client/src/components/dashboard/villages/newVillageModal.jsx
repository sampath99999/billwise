import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
function NewVillage(props) {
	return (
		<>
			<tr className="">
				<td className="p-2">#</td>
				<td className="p-2">
					<input
						type="text"
						placeholder="Village Name"
						className="relative px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
					/>
				</td>
				<td className="p-2">
					<button className="items-center justify-center rounded-md border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-1">
						Save
					</button>
				</td>
				<td>
					<button>
						<AiOutlineClose />
					</button>
				</td>
			</tr>
		</>
	);
}

export default NewVillage;
