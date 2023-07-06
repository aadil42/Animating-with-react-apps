import React from 'react';
import Transition from "react-transition-group/Transition";
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const animationTimeOut = {
    enter: 400,
    exit: 1000
}
const Modal = (props) =>  {
      return (
        // <Transition
        // in={props.isOpen}
        // timeout={animationTimeOut}
        // mountOnEnter
        // unmountOnExit
        // onEnter={() => {console.log('on Enter')}}
        // onEntering={() => {console.log('on Entering')}}
        // onEntered={() => {console.log('on Entered')}}
        // onExit={() => {console.log('on Exit')}}
        // onExiting={() => {console.log('on Exiting')}}
        // onExited={() => {console.log('on Exited')}}

        // >
        //     {(state) => {
        //         const cssClasses = [
        //         "Modal",
        //         state === 'entering' ? 'ModalOpen' 
        //         : state === 'exiting' ? 'ModalClosed' : null
        //         ];
        //         return(
        //         <div className={cssClasses.join(' ')}>
        //         <h1>A Modal</h1>
        //         <button className="Button" onClick={props.closed}>Dismiss</button>
        //         </div>
        //         );
        // }}
        // </Transition>

      <CSSTransition 
      mountOnEnter 
      unmountOnExit 
      in={props.isOpen} 
      timeout={animationTimeOut}
      classNames='fade-slide'>
        <div className="Modal">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      </CSSTransition>
      );
}

export default Modal;