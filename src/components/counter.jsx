import React, { Component } from "react";

class ListItem extends React.Component {
  state = {
    value: this.props.value,
  };

  constructor(props) {
    super(props);
  }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.children}
        <span className="m-2">{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
