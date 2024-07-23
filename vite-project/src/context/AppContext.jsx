import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// Add prop validation for 'children'

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const [selectedGenres, setSelectedGenres] = useState(
		JSON.parse(localStorage.getItem("selectedGenres")) || []
	);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	useEffect(() => {
		localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
	}, [selectedGenres]);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				selectedGenres,
				setSelectedGenres,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
