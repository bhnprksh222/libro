
import React, { useEffect, useRef } from "react";

import Button from "./Button/Button";
import { ReactComponent as CloseBtn } from '../../../assets/close-btn.svg';
import classes from "./modal.module.scss";

const Modal = ({ 
  children, 
  modalStyle, 
  show, 
  onClose, 
  backdropStyle
}) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(classes.visible);
    } else {
      modalRef.current.classList.remove(classes.visible);
    }
  }, [show]);

  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={classes.modal}>
        <Button
          onClick={onClose}
          className={classes.modalCloseBtn}
        >
          <CloseBtn className={classes.modalCloseBtnLogo} />
        </Button>
        <div style={modalStyle} className={classes.modalWrap}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
