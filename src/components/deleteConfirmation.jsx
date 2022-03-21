import React, { Component } from "react";
import "../style.css";

class DeleteConfirmation extends React.Component {
  render() {
    return (
      <div className="popup" onClick={this.props.onCancel}>
        <div className="popup-content">
          <i className="fi fi-rr-cross close" onClick={this.props.onCancel}></i>
          <h1>Are you sure?</h1>
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
              className="button button-red"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteConfirmation;
