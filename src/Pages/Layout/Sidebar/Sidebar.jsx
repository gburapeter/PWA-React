import React from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation";

export const Sidebar = () => {
	return (
		<div class="h-screen hidden lg:block shadow-lg relative w-60">
			<div class=" h-full bg-gray-100">
				<div class="flex items-center justify-start pt-6 ml-8">
					<p class="font-bold text-black  text-xl">ITK Space</p>
				</div>
				<SidebarNavigation />
			</div>
		</div>
	);
};
