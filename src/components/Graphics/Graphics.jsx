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
                    <div className={style.grid}>
                        {
                            props.data.map((i) =>
                                <Link
                                    key={i.key}
                                    to={`/${i.key}`}
                                    className={`${style.gridItem} animate__animated animate__fadeInUp`}>
                                    {i.title}
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        )
    }

export default Graphics;