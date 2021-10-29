import React from 'react'

import './header.scss';

import { ReactComponent as Logo } from '../../assets/libro-logo.svg';
import book1 from '../../assets/book-1.png';
import book2 from '../../assets/book-2.png';
import book3 from '../../assets/book-3.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-topbar">
        <Logo className="header-topbar--logo" />
        <div className="header-topbar--avatar"></div>
      </div>
      <div className="header-content">
        <div className="header-content--title">
          <p className="header-content--title_1">Find u`r <br/> Best friend</p>
          <p className="header-content--title_2">Sharing is Caring</p>
        </div>
        <div className="header-content--books">
          <img className="header-content--books-1" src={book1} alt="book1" />
          <img className="header-content--books-2" src={book2} alt="book2" />
          <img className="header-content--books-3" src={book3} alt="book3" />
        </div>
      </div>
      <div className="header-shelf">
        <div className="header-shelf--1"></div>
        <div className="header-shelf--2"></div>
      </div>
    </div>
  )
}

export default Header;
