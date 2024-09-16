import { Component } from "react";
import style from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";

export default class Header extends Component {
  
  render () {
    return (
      <header className={style.header}>
      <div className={style.headerLayout}>
          <div className={style.headerTopBar}>
            <Link to="/">
              <span className={style.logo}>Визиткa</span>
              {/* <img src="../../public/images/visitka-logo.svg" alt="My avatar sorry..."  width="100" height="100"/> */}
            </Link>
          </div>
            <Navigation  
              menuVisible={this.props.menuVisible} />

          <button
            onClick={this.props.onShowNavMenu}
            className={style.headerBnBurger}

            type="button">
              <span></span>
              <span></span>
              <span></span>
          </button>
      </div>
  </header>

    )
  }
}