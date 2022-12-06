import React, { useEffect, useState } from "react";
import { askPermission } from "../../permissionStatus";
import { subscribeUser } from "../../serviceWorkerRegistration";
import { Layout } from "../Layout/Layout";

export const Dashboard = () => {
	const [data, setData] = useState(null);
	const API = "/test";

	// const fetchPost = () => {
	// 	fetch("/notification", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			title: "Notified by Precision Ordance",
	// 			description: "someone buy a product",
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setData(res);
	// 			console.log(res);
	// 		});
	// };

	const fetchPost = () => {
		fetch("http://localhost:5000/test", {
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				console.log(res);
			});
	};
	useEffect(() => {
		fetchPost();

		return () => {
			setData([]);
		};
	}, []);

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
