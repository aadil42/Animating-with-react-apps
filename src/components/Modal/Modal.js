import React from 'react';
import Transition from "react-transition-group/Transition";
import './Modal.css';

const animationTimeOut = {
    enter: 400,
    exit: 1000
}
const Modal = (props) =>  {
      return (
        <Transition
        in={props.isOpen}
        timeout={animationTimeOut}
        mountOnEnter
        unmountOnExit
        >
            {(state) => {
                const cssClasses = [
                "Modal",
                state === 'entering' ? 'ModalOpen' 
                : state === 'exiting' ? 'ModalClosed' : null
                ];
                return(
                <div className={cssClasses.join(' ')}>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
                );
        }}
        </Transition>
      );
}

export default Modal;