import React from "react";
import ReactDom from "react-dom";
// import Cart from "../../Cart/Cart";
import classes from "./Modal.module.css";

//  import Card from  '../Card/Card';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClickForHide} >  </div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal-overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop onClickForHide={props.onClickForHide} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
