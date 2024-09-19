import style from "./Graphics.module.css";
import {Link} from "react-router-dom";

 const Graphics = ({data, onShowWidePictures, onShowNormalPictures, onShowAllPictures}) => {
        return (

            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Графика</h1>
                </div>
                <div className={`${style.wrapper} animate__animated animate__fadeIn`}>

                    <div className={style.filters}>
                        <h3 className={style.filtersCaption}>Фильтр ориентации изображений</h3>
                        <div className={style.filtersGroup}>

                            <button onClick={onShowAllPictures}>all</button>

                            <button onClick={onShowWidePictures} title={"Горизонтальные"}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="40" height="40">
                                        <path style={{fill:"var(--text-color)"}} d="M2.5 7.5h35v25h-35z"/>
                                        <path d="M14.15 10c2.37 0 4.3 1.93 4.3 4.3s-1.93 4.3-4.3 4.3-4.3-1.93-4.3-4.3 1.93-4.3 4.3-4.3zm4.18 10.8 3.09 5.5 6.08-7.9 15 19.5H27.92l1.35 2.4H7.4l10.93-19.5z" style={{fill:"var(--prymari)"}}/>
                                    <path style={{fill:"none"}} d="M2.5 7.5h35v25h-35z"/>
                                </svg>
                            </button>
                            
                            <button onClick={onShowNormalPictures} title={"Квадратные"}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="40" height="40" >
                                    <path d="M5 5h30v30H5V5z"/>
                                    <path style={{fill:"var(--text-color)"}} d="M5 5h30v30H5z"/>
                                        <g style={{clipPath:"url(#a)"}}>
                                            <path d="m26.7 16.2 15 19.5H27.12l1.35 2.4H6.6l10.93-19.5 3.09 5.5 6.08-7.9zM13.35 7.8c2.37 0 4.3 1.93 4.3 4.3s-1.93 4.3-4.3 4.3-4.3-1.93-4.3-4.3 1.93-4.3 4.3-4.3z" style={{fill:"var(--prymari)"}}/>
                                        </g>
                                    <path style={{fill:"none"}} d="M5 5h30v30H5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <ul className={style.list}>

                        {
                            data.map(({thumb, title, key, thumbWidth, thumbHeight}) =>
                                <li key={key}>

                                <Link
                                        key={key}
                                        to={`/${key}`}
                                        className={`${style.link}`}>
                                        <img src={thumb} alt="" width={thumbWidth} height={thumbHeight}/>
                                        <span>{title}</span>
                                    </Link>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        )
 }

export default Graphics;