import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogsHome from "./DogsHome";
import Dog from "./Dog";
import Home from "./Home";

import { dogs } from "./DogsHome";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dogs">
        <DogsHome />
      </Route>
      <Route exact path="/dogs/:name">
        <Dog dogs={dogs} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
