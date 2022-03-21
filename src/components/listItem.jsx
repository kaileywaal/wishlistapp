import React, { Component } from "react";
// import "../style.css";

class ListItem extends React.Component {
  state = {
    editMode: false,
  };

  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div
        key={this.props.item.id}
        className="card"
        onClick={() => this.props.onSelect(this.props.item.id)}
      >
        <h1 className="list-item-name">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </h1>
        <div className="details">
          <h2 className="price">
            $
            <input
              type="number"
              value={this.state.price}
              onChange={this.handleChange}
              name="price"
            />
            {/* {this.state.price.toFixed(2)} */}
          </h2>

          <a
            className="icon-button button-blue"
            href={this.props.item.link}
            target="_blank"
          >
            {" "}
            <i className="fi fi-rr-shop"></i>
          </a>
          <button
            className="icon-button button-red"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            {" "}
            <i className="fi fi-rr-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
