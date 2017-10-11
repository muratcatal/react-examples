import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class BrowserRouting extends Component {
  render() {
    return (
      <div>
        <Link to="/browser-routing/1">Click</Link>
        <Routes />
      </div>
    );
  }
}

export const Routes = () => (
  <Switch>
    <Route
      path="/browser-routing/1"
      render={() => <div>Browser Routing Test Page</div>}
    />
  </Switch>
);

export default BrowserRouting;
