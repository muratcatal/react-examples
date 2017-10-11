import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";

import PropType from "./Examples/PropType";
import BrowserRouting from "./Examples/BrowserRouting";

const Routes = () => (
  <Switch>
    <Route
      path="/proptype"
      render={() => (
        <div>
          <Header title="Prop-Type" />
          <PropType
            buttonName="Click me"
            onButtonClick={() => {
              alert("I'm clicked!");
            }}
            buttonDisabled={false}
          />
        </div>
      )}
    />
    <Route
      path="/browser-routing"
      render={() => (
        <div>
          <Header title="Browser Routing" />
          <BrowserRouting />
        </div>
      )}
    />
    <Route render={() => <h1>Not implemented!</h1>} />
  </Switch>
);

export default Routes;
