import { default as React, useEffect, useState } from "react";
import { Layout } from "../Layout/Layout";
import { Table } from "./Table";

export const Courses = () => {
	const [courses, setCourses] = useState([]);
	const API = " https://space.itk.ppke.hu/api/subjects?lang=en";
	const fetchPost = () => {
		fetch(API)
			.then((res) => res.json())
			.then((res) => {
				setCourses(res);
			});
	};
	useEffect(() => {
		fetchPost();

		return () => {
			setCourses([]);
		};
	}, []);
	return (
		<>
			<Layout>
				<Table courses={courses} />
			</Layout>
		</>
	);
};
