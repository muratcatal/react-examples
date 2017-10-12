import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";

import PropType from "./Examples/PropType";
import BrowserRouting from "./Examples/BrowserRouting";
import Redux from './Examples/redux/index'
import MyForm from './Examples/myform';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={()=><h1>Welcome to React Examples!</h1>} />
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
    <Route path="/redux" render={()=> <Redux />} />
    <Route path="/forms" render={()=> <MyForm />} />
    <Route render={() => <h1>Not implemented!</h1>} />
  </Switch>
);

export default Routes;
