import { Component } from "react";
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


const menuItemsData = [
    {
        textContent: 'c:' + '\\' + 'Главная',
        link: '/'
    },

    {
        textContent: 'D:' + '\\' + 'Разработка',
        link: '/dev'
    },

    {
        textContent: 'e:' +  '\\' + 'Музыка',
        link: '/music'
    },

    {
        textContent: 'f:' + '\\' + 'Графика',
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