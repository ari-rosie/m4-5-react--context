import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import { items, purchasedItemsObj } from '../data.js';
import usePersistedState from "../hooks/usePersistedState";

export const NumCookiesContext = React.createContext(null);


function App(props) {
  const [numCookies, setNumCookies] = usePersistedState(Number(localStorage.getItem('num-cookies')) || 1000, 'num-cookies');
  const [purchasedItems, setPurchasedItems] = usePersistedState(JSON.parse(localStorage.getItem('purchased-items')) || purchasedItemsObj, 'purchased-items');
  return (
    <NumCookiesContext.Provider value={{numCookies, setNumCookies, purchasedItems, setPurchasedItems}}>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </NumCookiesContext.Provider>
  );
}

export default App;
