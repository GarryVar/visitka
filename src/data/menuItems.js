import { ReactSVG } from "react-svg";

import iconUser from "../images/icon-user.svg";
import iconDev from "../images/icon-code.svg";
import iconImages from "../images/icon-images.svg";
import iconMusic from "../images/icon-music.svg";


export const menuItemsData = [
    {
        textContent:'Про меня',
        icon: <ReactSVG src={ iconUser } />,
        link: '/'
    },

    {
        textContent:'Разработка',
        icon: <ReactSVG src={ iconDev } />,
        link: '/dev'
    },

    {
        textContent:'Моя Музыка',
        icon: <ReactSVG src={ iconMusic } />,
        link: '/music'
    },

    {
        textContent:'Графика',
        icon: <ReactSVG src={ iconImages } />,
        link: '/graphics'
    },
];