import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";

function VendingMachine() {
  return (
    <div className="vending">
      <BrowserRouter>
        <Route exact path="/">
          <h1>Choose A Snack!</h1>
          <h3>
            <NavBar />
          </h3>
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
