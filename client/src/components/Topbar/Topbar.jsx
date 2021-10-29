import React, { useState } from 'react';

import Modal from "../SharedComponents/Modal/Modal";
import './topbar.scss';

import { ReactComponent as Logo } from '../../assets/libro-logo.svg';
import Login from '../Login/Login';

const Topbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="topbar">
        <Logo className="topbar-logo" />
        <div className="topbar-btns">
          <button
            onClick={() => setShow(true)} 
            className="topbar-btns--loginbtn"
          >
            Login
          </button>
          <div className="topbar-btns--avatar"></div>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        <Login />
      </Modal>
    </>
  )
}

export default Topbar;
