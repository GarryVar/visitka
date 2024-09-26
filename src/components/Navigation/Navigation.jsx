import { Component } from "react";
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


export default class Navigation extends Component {
    render () {
        return (
            <div className={this.props.menuVisible ? style.nav : style.navHidden}>
                <ul className={style.menu}>
                    {
                        this.props.menuItemsData.map(({textContent, link, icon}, indx) =>
                            <li className={style.item} key={indx}>
                                <div className={style.icon}>
                                    {icon}
                                </div>
                                <NavLink
                                    title={textContent}
                                    onClick={this.props.hideNavMenu}
                                    to={link}
                                    className={({isActive}) => `${style.link} ${(isActive ? ' active' : '')}`}>

                                    {textContent}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}