import { Component } from "react";
import style from "./Graphics.module.css";
import pic1 from "../../img/graphics/hockey_club.webp";
import pic2 from "../../img/graphics/martian_chronicles.jpg";
import pic3 from "../../img/graphics/saturn_records.jpg";
import pic4 from "../../img/graphics/pie_cosmo_cacke.webp";
import pic5 from "../../img/graphics/wash_your_car.webp";
import pic6 from "../../img/graphics/shankey_vintage.jpg";
import pic7 from "../../img/graphics/ufo.webp";
import pic8 from "../../img/graphics/red_eyes_totem.webp";

const graphicsItemsData = [
    {
        image: pic1,
        width: '180',
        height: '180',
        
    },
    {
        image: pic2,
        width: '180',
        height: '180',
        
    },
    {
        image: pic3,
        width: '180',
        height: '180',
        
    },
    {
        image: pic4,
        width: '180',
        height: '180',
        
    },
    {
        image: pic5,
        width: '180',
        height: '180',
        
    },
    {
        image: pic6,
        width: '180',
        height: '180',
        
    },
    {
        image: pic7,
        width: '180',
        height: '180',
        
    },
    {
        image: pic8,
        width: '180',
        height: '180',
        
    },
]


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
                    {
                        graphicsItemsData.map(({image, width, height}) => 
                            <div className={`${ style.gridItem} animate__animated animate__fadeInUp`}>
                                <img src={image} alt={'rt'} width={width} height={height} />
                            </div>)
                    }
                </div>
            </div>
        )
    }
}