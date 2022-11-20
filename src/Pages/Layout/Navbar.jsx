import React from "react";

export const Navbar = () => {
	return (
		<header class="w-full h-16 z-40 flex items-center justify-between">
			<div class="block lg:hidden ml-6">
				<button class="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
					<svg
						width="20"
						height="20"
						class="text-gray-400"
						fill="currentColor"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
					</svg>
				</button>
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
