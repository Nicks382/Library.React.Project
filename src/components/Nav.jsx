import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";
const Nav = ({ numberOfItems }) => {
  function OpenMenu() {
    document.body.ClassList += " menu--open";
  }
  function CloseMenu() {
    document.body.ClassList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__link">
            <Link to="/books">Books</Link>
          </li>
          <button className="btn__menu" onClick={OpenMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link--cart">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {
              numberOfItems > 0 && (
                <span className="cart__length">{numberOfItems}</span>
              )
            }
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__close" onClick={CloseMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menus__links">
            <li className="menu__link">
              <Link to="">Home</Link>
            </li>
            <li className="menu__link">
              <Link to="">Books</Link>
            </li>
            <li className="menu__link">
              <Link to="">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
