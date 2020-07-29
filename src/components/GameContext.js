import React from 'react';
import { items, purchasedItemsObj } from '../data.js';
import usePersistedState from "../hooks/usePersistedState";


export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
    const [numCookies, setNumCookies] = usePersistedState(Number(localStorage.getItem('num-cookies')) || 1000, 'num-cookies');
    const [purchasedItems, setPurchasedItems] = usePersistedState(JSON.parse(localStorage.getItem('purchased-items')) || purchasedItemsObj, 'purchased-items');
    
    const calculateCookiesPerSecond = (purchasedItems) => {
        return Object.keys(purchasedItems).reduce((acc, itemId) => {
        const numOwned = purchasedItems[itemId];
        const item = items.find((item) => item.id === itemId);
        const value = item.value;
    
        return acc + value * numOwned;
    }, 0);
    };
    const cookiesSecond = calculateCookiesPerSecond(purchasedItems);
    
    return <GameContext.Provider value={{numCookies, setNumCookies, purchasedItems, setPurchasedItems, cookiesSecond}}>{children}</GameContext.Provider>
};