import React from "react";
import {render} from "react-dom";
import Index from "./Examples/Index";
import {withStyles} from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: theme
    .mixins
    .gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3
    })
});

const examples = [
  {
    name: "HOC",
    to: "/hoc"
  }, {
    name: "Prop-Types",
    to: "/proptype"
  }, {
    name: "BrowserRoute",
    to: "/browser-routing"
  }, {
    name: "Redux",
    to: "/redux"
  }, {
    name: "Forms",
    to: "/forms"
  }, {
    name: "Redux Form",
    to: "/redux-form"
  }, {
    name: "React-Redux Form",
    to: "/react-redux-form"
  }, {
    name: "Multi-Language",
    to: "multi-language"
  }, {
    name: "Styling",
    to: "styling"
  }
];

const ExampleList = props => (
  <div>
    <h2>Examples</h2>
    <Divider/>
    <Index examples={props.examples}/>
  </div>
);

const App = () => (
  <div>
    <Grid container spacing={16}>
      <Grid item sm={2} xs={12}>
        <ExampleList examples={examples}/>
      </Grid>
      <Grid item sm={10} xs={12}>
        <Routes/>
      </Grid>
    </Grid>
  </div>
);

render(
  <BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById("root"));
