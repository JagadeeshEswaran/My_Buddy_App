import React, { useContext } from "react";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import "./style.scss";
import { DarkModeContext } from "./context/darkModeContext.js";
import { AuthContext } from "./context/authContext.js";

const App = () => {
	const { currentUser } = useContext(AuthContext);

	const { darkMode } = useContext(DarkModeContext);

	// console.log(darkMode);

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<div style={{ display: "flex" }}>
					<LeftBar />
					<div style={{ flex: 6.5 }}>
						<Outlet />
					</div>
					<RightBar />
				</div>
			</div>
		);
	};

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to={"/login"} />;
		}

		return children;
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/profile/:id",
					element: <Profile />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
