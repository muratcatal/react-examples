import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropType extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <button
          onClick={() => {
            this.props.onButtonClick();
          }}
          disabled={this.props.buttonDisabled}
        >
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

PropType.defaultProps = {
  header: "This is default header"
};

PropType.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string,
  buttonDisabled: (props, propName, componentName) => {
    if (!/^(true|false){1}$/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  }
};
