import React from "react";
import { Switch, Route } from "react-router-dom";
import PropType from "./Examples/PropType";

const Routes = () => (
  <Switch>
    <Route
      path="/proptype"
      render={() => (
        <PropType
          buttonName="Click me"
          onButtonClick={() => {
            alert("I'm clicked!");
          }}
          buttonDisabled={false}
        />
      )}
    />
  </Switch>
);

export default Routes;
