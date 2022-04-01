import React, { Component } from 'react';
import './style.css';
import List from './components/list.jsx';
import DeleteConfirmation from './components/deleteConfirmation';
import AddItem from './components/addItem';
import Signup from './components/signup';
import { AuthProvider } from './contexts/authContext';
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom"; 
import Dashboard from './components/dashboard';
import Login from './components/login';
import UpdateProfile from './components/updateProfile';
import PrivateRoute from './components/privateRoute';
import ForgotPassword from './components/forgotPassword';

class App extends React.Component {
  state = {
    deletePopupVisible: false,
    deleteItemname: "",
    deleteItemId: 0,
    activeItemId: 0,
    addItemPopupVisible: false,
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
    this.setState({deletePopupVisible: false, addItemPopupVisible: false})
  }

  handleConfirmDelete = () => {
    const items = this.state.items.filter((item) => item.id != this.state.deleteItemId);
    this.setState({ items: items });
    this.setState({deletePopupVisible: false});
  }

  handleSelect = (itemId) => {
    this.setState({activeItemId: itemId});
  }

  addItem = () => {
    this.setState({addItemPopupVisible: true})
    // const items = this.state.items
    // items.push({id: 4, name: "", price: 0, link: ""});
    // this.setState({items: this.state.items});
  }

  handleAddItem = (item) => {

  }

  render() {
    return (
      
        <Router>
          <AuthProvider>   
            <Routes>
                <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/update-profile" element={<UpdateProfile/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
              </Routes>  
           </AuthProvider>
           </Router>

      
    //   <div>
    //     <div className="actions">
    //     <button className="add-button button button-green" onClick={this.addItem}>
    //     <span className="add-item"><i className="fi fi-sr-plus"></i>Add item</span>
    //       </button>
    //       </div>
    //       {this.state.addItemPopupVisible ? <AddItem onClose={this.handleClosePopup}/> : null}
    //   <List items={this.state.items} onDelete={this.handleDelete} onEdit={this.handleEdit} onSelect={this.handleSelect}/>
    //   {this.state.deletePopupVisible ? <DeleteConfirmation onConfirm={this.handleConfirmDelete} onCancel={this.handleClosePopup} deleteItemname={this.state.deleteItemname} items={this.state.items}/> : null}
    // </div>
  );
  } 
}

export default App;
