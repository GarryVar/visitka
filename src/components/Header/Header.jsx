import { Component } from "react";
import style from './Header.module.css';
// import picture from '../../img/ava.jpg';
import Navigation from '../Navigation/Navigation';

export default class Header extends Component {

  render () {
    return (
      <header className={style.header}>
      <div className={style.headerLayout}>
          <div className={style.headerTopBar}>
              <img src="" alt="My avatar sorry..."  width="128" height="128"/>
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