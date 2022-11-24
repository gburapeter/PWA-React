import React, { useState } from "react";
import SidebarNavigation from "./Sidebar/SidebarNavigation";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	return (
		<header class="w-full h-16 z-40 flex items-center justify-between">
			<div class="block lg:hidden pl-6 pt-6">
				<div
					id="menu"
					className="text-gray-800"
					onClick={() => setShow(!show)}
				>
					{show ? (
						""
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=""
							width={24}
							height={24}
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1={4} y1={6} x2={20} y2={6} />
							<line x1={4} y1={12} x2={20} y2={12} />
							<line x1={4} y1={18} x2={20} y2={18} />
						</svg>
					)}
				</div>
				{show && (
					<div
						className={
							show
								? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
								: "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
						}
					>
						<div
							className="bg-gray-800 opacity-50 w-full h-full"
							onClick={() => setShow(!show)}
						/>
						<div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
							<div className="px-6 h-full">
								<div className="flex flex-col justify-between h-full w-full">
									<div>
										<div className="mt-6 flex w-full items-center justify-between">
											<div className="flex items-center justify-between w-full">
												<div
													id="cross"
													className="text-gray-800"
													onClick={() => setShow(!show)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="icon icon-tabler icon-tabler-x"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="currentColor"
														fill="none"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path
															stroke="none"
															d="M0 0h24v24H0z"
														/>
														<line x1={18} y1={6} x2={6} y2={18} />
														<line x1={6} y1={6} x2={18} y2={18} />
													</svg>
												</div>
											</div>
										</div>
										<SidebarNavigation />
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div class="relative z-20 flex flex-col justify-end h-full px-10 md:w-full">
				<div class="relative p-1 flex items-center w-full space-x-4 justify-end">
					<button class="flex p-2 items-center rounded-full text-gray-400 hover:text-blue-700 bg-white shadow text-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};
