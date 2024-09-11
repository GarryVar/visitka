import { Component } from "react";
import style from "./Graphics.module.css";
import pic1 from "../../img/graphics/hockey_club.jpg";
import pic2 from "../../img/graphics/martian_chronicles.jpg";
import pic3 from "../../img/graphics/saturn_records.jpg";
import pic4 from "../../img/graphics/pie_cosmo_cacke.jpg";
import pic5 from "../../img/graphics/wash_your_car.jpg";
import pic6 from "../../img/graphics/shankey_vintage.jpg";
import pic7 from "../../img/graphics/ufo.jpg";
import pic8 from "../../img/graphics/red_eyes_totem.jpg";


export default class Graphics extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__lightSpeedInRight">Графика</h1>
                </div>
                <p className="subtitle animate__animated animate__fadeIn">Мои идеи реализованые в работах с 2d графикой и дизайном</p>
                <div className={style.grid}>
                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic1} alt="" width="180" height="180" />
                    </div>
                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic2} alt="" width="180" height="180" />
                    </div>

                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                    <   img src={pic3} alt="" idth="180" height="180" />
                    </div>

                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic4} alt="" idth="180" height="180" />
                    </div>

                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic5} alt="" idth="180" height="180" />
                    </div>

                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic6} alt="" idth="180" height="180" />
                    </div>

                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic7} alt="" idth="180" height="180" />
                    </div>
                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src={pic8} alt="" idth="180" height="180" />   
                    </div>
                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}