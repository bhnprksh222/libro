import React from 'react';
import './topbar.scss';

import { ReactComponent as Logo } from '../../assets/libro-logo.svg';

const Topbar = () => {
  return (
    <div className="topbar">
      <Logo className="topbar-logo" />
      <div className="topbar-avatar"></div>
    </div>
  )
}

export default Topbar;
