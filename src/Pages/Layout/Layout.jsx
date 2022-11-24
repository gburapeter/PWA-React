import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children }) => {
	return (
		<>
			<main class="bg-gray-100  h-screen overflow-hidden relative">
				<div class="flex items-start justify-between">
					<Sidebar />
					<div class="flex flex-col w-full md:space-y-4">
						<Navbar />

						{/* content  */}
						<div class="overflow-auto h-screen pt-20 pb-24 px-4 md:px-6">
							{children}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
