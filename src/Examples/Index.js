import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  }
});

class Index extends Component {
  render() {
    console.log(this.props);
    const { examples, classes } = this.props;

    return (
      <List className={classes.root}>
        {examples.map(example => (
          <Link to={example.to} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText primary={example.name} />
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    );
  }
}

Index.defaultProps = {
  examples: []
};

Index.propTypes = {
  examples: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
