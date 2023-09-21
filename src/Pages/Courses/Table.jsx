import React, { useState } from "react";

export const Table = ({ courses }) => {
	const [show, setShow] = useState(null);
	return (
		<>
			<div className="w-full sm:px-6">
				<div className="px-2 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
					<div className="sm:flex items-center justify-between">
						<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 hover:text-blue-500">
							Courses
						</p>
					</div>
				</div>
				<div className="bg-white shadow  overflow-y-auto">
					<table className="w-full whitespace-nowrap border">
						<thead className="">
							<tr className="h-16 w-full text-sm leading-none text-gray-800 bg-blue-300">
								<th class="font-bold text-left px-4 py-2">Name</th>
								<th class="font-bold text-left px-4 py-2">Code</th>
								<th className="font-bold text-center px-4 py-2">
									Credit
								</th>
								<th className="font-bold text-center px-4 py-2">
									Language
								</th>
								<th className="font-bold text-center px-4 py-2">
									Courses
								</th>
								<th className="font-bold text-center px-4 py-2">
									Semester
								</th>
								<th className="font-bold text-center px-4 py-2">
									Professor
								</th>
							</tr>
						</thead>
						<tbody className="w-full">
							{courses.map((item, index) => {
								return (
									<tr key={index} className="cursor-pointer h-20 text-sm text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
										<td className="font-normal w-80 text-left px-4 py-2">
											<p className="font-medium w-80 overflow-hidden">
												{item.name}
											</p>
										</td>
										<td className="font-normal text-left px-4 py-2">
											<p className="text-sm font-medium leading-none text-gray-800">
												{item.code}
											</p>
										</td>
										<td className="font-normal text-center px-4 py-2">
											<p className="font-medium">{item.credit}</p>
										</td>
										<td className="font-normal text-center px-4 py-2">
											<p className="font-medium">{item.language}</p>
										</td>
										<td className="font-normal text-center px-4 py-2">
											<p className="font-medium">
												{item.classes1}/{item.classes2}/
												{item.classes3}
											</p>
										</td>
										<td className="font-normal text-center px-4 py-2">
											{item.semester}
										</td>
										<td className="font-normal text-center px-4 py-2">
											{item.teacher}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};
