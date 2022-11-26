import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
	return (
		<>
			<main className="bg-gray-100  h-screen overflow-hidden relative">
				<div className="flex items-start justify-between">
					<Sidebar />
					<div className="flex flex-col w-full md:space-y-4">
						<Navbar />

						{/* content  */}
						<div className="overflow-auto h-screen pt-20 pb-24 px-4 md:px-6">
							{children}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
