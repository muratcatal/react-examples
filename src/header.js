import React, { Component } from "react";
import Divider from "material-ui/Divider";

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <Divider />
      </div>
    );
  }
}

export default Header;
