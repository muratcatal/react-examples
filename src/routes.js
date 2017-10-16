import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./header";

import PropType from "./Examples/PropType";
import BrowserRouting from "./Examples/BrowserRouting";
import Redux from './Examples/redux/index'
import MyForm from './Examples/myform';
import PropsProxyExample from './Examples/hoc/props_proxy/index'
import IIHOCExample from './Examples/hoc/inheritance_inversion/index'
import SimpleReduxForm from './Examples/redux-form/index'

const Routes = () => (
  <Switch>
    <Route
      key="main"
      path="/"
      exact
      render={() =>< h1 > Welcome to React Examples !</h1>}/>
    <Route
      key="proptype"
      path="/proptype"
      render={() => (
      <div>
        <Header title="Prop-Type"/>
        <PropType
          buttonName="Click me"
          onButtonClick={() => {
          alert("I'm clicked!");
        }}
          buttonDisabled={false}/>
      </div>
    )}/>
    <Route
      key="browser-routing"
      path="/browser-routing"
      render={() => (
      <div>
        <Header title="Browser Routing"/>
        <BrowserRouting/>
      </div>
    )}/>
    <Route key="redux" path="/redux" render={() => <Redux/>}/>
    <Route key="forms" path="/forms" render={() => <MyForm/>}/>
    <Route
      key="hoc-props-proxy"
      path="/hoc-props-proxy"
      render={() => <PropsProxyExample title="Props Proxy HOC"/>}/>
    <Route
      key="hoc-inheritance-inversion"
      path="/hoc-inheritance-inversion"
      render={() => <IIHOCExample/>}/>
    <Route
      key="react-redux-form"
      path="/react-redux-form"
      render={() => <SimpleReduxForm/>}/>
    <Route render={() => <h1>Not implemented!</h1>}/>
  </Switch>
);

export default Routes;
