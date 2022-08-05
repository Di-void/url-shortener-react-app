import React, { useState, useEffect, useRef, useContext } from "react";

const AppContext = React.createContext();

// # MAIN COMP..

const AppProvider = ({ children }) => {
	// # STATE VALUES
	// # FUNCTIONS AND SIDE EFFECTS
	// # RETs
	return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

// # CUSTOM HOOK (MUST USE)
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
