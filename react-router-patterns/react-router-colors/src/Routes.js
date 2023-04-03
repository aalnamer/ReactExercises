import React, { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Color from "./Color";
import ColorsHome from "./ColorsHome";
import Home from "./Home";
import NewColorForm from "./NewColorForm";

function Routes({ addedColors }) {
  const listOfColors = ["Blue", "Red", "Green", "Purple"];

  const [colors, setColors] = useState(listOfColors);

  function handleAdd(newColor) {
    console.log(newColor);
    setColors((colors) => [...colors, newColor]);
  }
  console.log(colors, "COLORSSS");

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/colors">
        <ColorsHome colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm addColor={handleAdd} />
      </Route>

      <Route exact path="/colors/:color">
        <Color colors={listOfColors} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;

// Need help with keeping the value between renders for the array.

// Routes not working, forced to use refreshes
