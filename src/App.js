import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  
  state = {
    isModleOpen: false,
    isTransition: true
  }

  closeModel = () => {
    this.setState({isModleOpen:  false});
  }

  openModel = () => {
    this.setState({isModleOpen:  true});
  }

  toggleTransition = () => {
    this.setState({isTransition: !this.state.isTransition});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal isOpen={this.state.isModleOpen} closed={this.closeModel} />
        {this.state.isModleOpen && <Backdrop isOpen={this.state.isModleOpen} /> }
        {/* <button onClick={this.toggleTransition} className="Button">Transition</button> */}
        {/* <Transition 

        in={this.state.isTransition} 
        timeout={300}
        mountOnEnter
        unmountOnExit
        >
          {(state) => { // state will be either exiting, exited, entering and entered.
            return (
              <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'red',
                transition: 'opaticy 1s ease-out',
                margin: 'auto',
                opacity: state === 'exiting' ? 0 : 1
              }}
              >
                {state}
              </div>
            );
          }}
        </Transition> */}
        <button onClick={this.openModel} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
