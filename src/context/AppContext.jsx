import React, { createContext, useState } from "react";

// filepath: d:\admin\frontend\src\context\AppContext.jsx

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    return (
        <AppContext.Provider value={{ token, setToken }}>
            {children}
        </AppContext.Provider>
    );
};