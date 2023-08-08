import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = () => {
		//To Do
		setCurrentUser({
			id: 1,
			name: "Jaggy Zeus",
			profilePic:
				"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg",
		});
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
