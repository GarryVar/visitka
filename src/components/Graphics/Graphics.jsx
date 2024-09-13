import { Component } from "react";
import style from "./Graphics.module.css";
import { Link } from "react-router-dom";


    // {
    //     image: pic6,
    //     width: '180',
    //     height: '180',
    //     title: 'Shankey vitage logo',
    //     path: '/shankey'
    // },
    // {
    //     image: pic7,
    //     width: '180',
    //     height: '180',
    //     title: 'ufo',
    //     path: '/ufo'
    // },
    // {
    //     image: pic8,
    //     width: '180',
    //     height: '180',
    //     title: 'Red Eyes Totem logo',
    //     path: '/red'
    // },

    // {
    //     image: pic9,
    //     width: '180',
    //     height: '180',
    //     title: 'Misteriosa Island cover of music album',
    //     path: '/misteriosa'
    // },
// ]


export default class Graphics extends Component {

    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__lightSpeedInRight">Графика</h1>
                </div>
                <p className="subtitle">Мои идеи реализованые в работах с 2d графикой и дизайном</p>
                <div className={style.wrapper}>
                    <div className={style.grid}>
                        {
                            this.props.data.map((i) => 
                                <Link 
                                    to={`/$${i.key}`} 
                                    className={`${style.gridItem} animate__animated animate__fadeInUp`}>
                                    {i.title}
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}