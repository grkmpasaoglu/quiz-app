// src/contexts/UserNameContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const UserNameContext = createContext();

// Create a Provider component
export const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState('');

    return (
        <UserNameContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserNameContext.Provider>
    );
};

// Create a custom hook to use the UserNameContext
export const useUserName = () => useContext(UserNameContext);
