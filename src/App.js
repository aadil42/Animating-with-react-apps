import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  
  state = {
    isModleOpen: false
  }

  closeModel = () => {
    this.setState({isModleOpen:  false});
  }

  openModel = () => {
    this.setState({isModleOpen:  true});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal isOpen={this.state.isModleOpen} closed={this.closeModel} />
        <Backdrop isOpen={this.state.isModleOpen} />
        <button onClick={this.openModel} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
