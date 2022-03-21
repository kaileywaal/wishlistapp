import React, { Component } from "react";
import ListItem from "./listItem.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onEdit={this.props.onEdit}
            onSelect={this.props.onSelect}
          />
        ))}
      </div>
    );
  }
}

export default List;
