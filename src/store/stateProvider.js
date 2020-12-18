import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// wrap enitre app with store
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// to access any data from the store,
export const useStateValue = () => useContext(StateContext);