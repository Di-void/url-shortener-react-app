import React, { useState, useEffect, useRef, useContext } from "react";

const AppContext = React.createContext();

// # MAIN COMP..

const AppProvider = ({ children }) => {
	// # STATE VALUES
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// # FUNCTIONS AND SIDE EFFECTS
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	// # RETs
	return (
		<AppContext.Provider
			value={{
				isMenuOpen,
				toggleMenu,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// # CUSTOM HOOK (MUST USE)
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
