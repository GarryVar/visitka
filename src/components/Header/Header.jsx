import { Component } from "react";
import style from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
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
            menuItemsData={this.props.menuItemsData}
            hideNavMenu={this.props.hideNavMenu}
            menuVisible={this.props.menuVisible}
          />

          <button
            onClick={this.props.onShowNavMenu}
            className={style.headerBnBurger}
            type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="25"
              height="25">
              {this.props.menuVisible ? (
                <path d="M3.07.5 12 9.43 20.93.5l3.57 3.57L15.57 13l8.93 8.93-3.57 3.57L12 16.57 3.07 25.5-.5 21.93 8.43 13-.5 4.07z" />
              ) : (
                <path d="M0 9.46h25v5.68H0V9.46zm0 9.86h25V25H0v-5.68zM0 0h25v5.68H0V0z" />
              )}
            </svg>
          </button>
        </div>
      </header>
    );
  }
}
