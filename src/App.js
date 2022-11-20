import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Courses } from "./Pages/Courses/Courses";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Posts } from "./Pages/Posts/Posts";
function App() {
	return (
		<div className="App">
			<div>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/courses" element={<Courses />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
