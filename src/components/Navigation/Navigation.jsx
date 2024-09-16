import { Component } from "react";
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


const menuItemsData = [
    {
        textContent:'Главная',
        link: '/'
    },

    {
        textContent:'Разработка',
        link: '/dev'
    },

    {
        textContent:'Музыка',
        link: '/music'
    },

    {
        textContent:'Графика',
        link: '/graphics'
    },
];


export default class Navigation extends Component {
    render () {
        return (
            <div className={this.props.menuVisible ? style.nav : style.navHidden}>
                <ul className={style.menu}>
                    {
                        menuItemsData.map(({textContent, link}, indx) =>
                            <li className={style.item} key={indx}>
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