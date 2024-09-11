import { Component } from "react";
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import musicIcon from '../../img/graphics/icons/icon_music.svg';

const menuItemsData = [
    {
        textContent: 'Главная',
        link: '/',
        icon: musicIcon,
    },

    {
        textContent: 'Разработка',
        link: '/dev',
        icon: '',
    },

    {
        textContent: 'Музыка',
        link: '/music',
        icon: '',
    },

    {
        textContent: 'Графика',
        link: '/graphics',
        icon: '',
    },
];


export default class Navigation extends Component {

    render () {
        return (
            <div className={this.props.menuVisible ? style.nav : style.navHidden}>
                <ul className={style.menu}>
                    {
                        menuItemsData.map(({textContent, link, icon}, indx) =>
                            <li className={style.item} key={indx}>
                                
                                <span className={style.icon}>
                                <svg viewBox="0 0 20 20" width="20" height="20">
                                    {musicIcon}
                                </svg>
                                </span>
                                <NavLink 
                                    to={link} 
                                    className={({isActive}) => `${style.link} ${( isActive ? ' active' : '')}`}>
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