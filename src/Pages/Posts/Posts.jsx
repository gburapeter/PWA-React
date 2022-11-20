import { default as React, useEffect, useState } from "react";
import { Layout } from "../Layout/Layout";

export const Posts = () => {
	const [post, getPost] = useState([]);
	const API = "https://jsonplaceholder.typicode.com/posts";
	const fetchPost = () => {
		fetch(API)
			.then((res) => res.json())
			.then((res) => {
				getPost(res);
			});
	};
	useEffect(() => {
		fetchPost();

		return () => {
			getPost([]);
		};
	}, []);
	return (
		<>
			<Layout>
				<div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
					<h2>React Fetch Data with REST API Example</h2>
					<ul>
						{post.map((item, i) => {
							return <li key={i}>{item.title}</li>;
						})}
					</ul>
				</div>
			</Layout>
		</>
	);
};
