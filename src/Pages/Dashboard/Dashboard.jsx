import React from "react";
import {
	subscribeUser,
	getSubscription,
} from "../../serviceWorkerRegistration";
import { askPermission } from "../../permissionStatus";

import { Layout } from "../Layout/Layout";

export const Dashboard = () => {
	return (
		<Layout>
			<div className="overflow-hidden overflow-x-auto rounded-lg ">
				<div className="text-blue-500 text-3xl">Welcome</div>
				<div className="flex py-8 flex-col">
					<div className="py-4">
						<button
							className="  w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded subscriptionButton"
							onClick={() => subscribeUser()}
						>
							{" "}
							Subscribe user
						</button>
					</div>
					<div>
						<button
							className="  w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded permissionStatus"
							onClick={() => askPermission()}
						>
							{" "}
							Prompt permission
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
};
