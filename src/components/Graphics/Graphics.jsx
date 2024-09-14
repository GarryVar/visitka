import style from "./Graphics.module.css";
import {Link} from "react-router-dom";

 const Graphics = (props) => {
        return (

            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__lightSpeedInRight">Графика</h1>
                </div>
                <p className="subtitle">Мои идеи реализованые в работах с 2d графикой и дизайном</p>
                <div className={style.wrapper}>
                    <ul className={style.list}>
                        {
                            props.data.map(({title, key}) =>
                                <li>
                                    <Link
                                        key={key}
                                        to={`/${key}`}
                                        className={`${style.link} animate__animated animate__fadeInUp`}>
                                        {title}
                                    </Link>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }

export default Graphics;