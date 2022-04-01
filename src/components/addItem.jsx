import React, { Component } from "react";

class AddItem extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup-content">
          <i className="fi fi-rr-cross close" onClick={this.props.onClose}></i>
          <h1>Add Item</h1>
          <p>
            Do you really want to delete the {this.props.deleteItemTitle} from
            your list? This action cannot be undone.
          </p>
          <div className="options">
            <button onClick={this.props.onCancel} className="button">
              Cancel
            </button>
            <button
              onClick={this.props.onConfirm}
              className="button button-green"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;
