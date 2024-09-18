import style from "./Graphics.module.css";
import {Link} from "react-router-dom";

 const Graphics = ({data}) => {
        return (

            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Графика</h1>
                </div>
                <p className="subtitle">Небольшая коллекция изображений, созданая при помоще Corel Draw Graphic 2019</p>
                <div className={style.wrapper}>
                    <ul className={style.list}>
                        {
                            data.map(({thumb, title, key, thumbWidth, thumbHeight}) =>
                                <li key={key}>
                                   
                                    <Link
                                        key={key}
                                        to={`/${key}`}
                                        className={`${style.link}`}>
                                        <img src={thumb} alt=""  width={thumbWidth} height={thumbHeight}/>
                                        <span>{title}</span> 
                                    </Link>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }

export default Graphics;