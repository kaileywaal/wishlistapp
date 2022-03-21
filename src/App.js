import React, { Component } from 'react';
import './style.css';
import List from './components/list.jsx';
import DeleteConfirmation from './components/deleteConfirmation';

class App extends React.Component {
  state = {
    deletePopupVisible: false,
    deleteItemname: "",
    deleteItemId: 0,
    activeItemId: 0,
    items: [
      {
        id: 1,
        name: "Iqunix Wireless Mechanical Keyboard",
        price: 245,
        link: "https://iqunix.store/products/f97-hitchhiker",
      },
      {
        id: 2,
        name: "Beast Blender",
        price: 155,
        link: "https://thebeast.com/products/b10-health-blender?variant=38188041339071",
      },
      {
        id: 3,
        name: "Groundies White Tennis Shoes",
        price: 126.48,
        link: "https://www.groundies.com/women-oxid/sneaker/groundies-melbourne-women-white.html",
      },
    ],
  };

  handleDelete = (itemId) => {
    // prepares item for deletion if confirmed
    let deleteItemname = this.state.items.filter(item => item.id == itemId)[0].name;
    this.setState({deleteItemname, deleteItemId: itemId});
    // confirms with user that they want to delete item
    this.confirmDelete(itemId);
  };

  confirmDelete = () => {
    this.setState({deletePopupVisible: true});
  }

  handleClosePopup = () => {
    this.setState({deletePopupVisible: false, editPopupVisible: false})
  }

  handleConfirmDelete = () => {
    const items = this.state.items.filter((item) => item.id != this.state.deleteItemId);
    this.setState({ items: items });
    this.setState({deletePopupVisible: false});
  }

  handleSelect = (itemId) => {
    this.setState({activeItemId: itemId});
  }

  handleAddItem = () => {
    const items = this.state.items
    items.push({id: 4, name: "", price: 0, link: ""});
    this.setState({items: this.state.items});
  }

  render() {
    return (
      <div>
      <List items={this.state.items} onDelete={this.handleDelete} onEdit={this.handleEdit} onSelect={this.handleSelect}/>
      <button onClick={this.handleAddItem}>Add item</button>
      {this.state.deletePopupVisible ? <DeleteConfirmation onConfirm={this.handleConfirmDelete} onCancel={this.handleClosePopup} deleteItemname={this.state.deleteItemname} items={this.state.items}/> : null}
    </div>
  );
  } 
}

export default App;
