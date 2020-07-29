import React from 'react';
import { purchasedItemsObj } from '../data.js';
import usePersistedState from "../hooks/usePersistedState";


export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
    const [numCookies, setNumCookies] = usePersistedState(Number(localStorage.getItem('num-cookies')) || 1000, 'num-cookies');
    const [purchasedItems, setPurchasedItems] = usePersistedState(JSON.parse(localStorage.getItem('purchased-items')) || purchasedItemsObj, 'purchased-items');
    return <GameContext.Provider value={{numCookies, setNumCookies, purchasedItems, setPurchasedItems}}>{children}</GameContext.Provider>
};