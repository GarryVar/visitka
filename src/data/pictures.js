import Hockey from "../components/Hockey/Hockey";
import Cake from "../components/Cake/Cacke";
import WashCar from "../components/WashCar/WashCar";
import RedEyes from "../components/RedEyes/RedEyes";
import { v4 as uuidv4 } from 'uuid';

let n = Number(uuidv4().replace(/[^\d]/g, ''));

export const pictures = [
    {
      image: '../../images/hockey_club.webp',
      width: '180',
      height: '180',
      title: 'Hockey club logo',
      subtitle: 'Логотип вымышленной хоккейной команды Hockey Club Wigwams',
      desc: 'Все элементы логотипа отрисованы с нуля. Красивый и выдержаный дизайн логотипа вполне соответствует своему хокейному характеры. Да и просто помоему он красивый получился :)',
      component: <Hockey />,
      showBig: false,
      path: 'hockey',
      key: 1001
    },
    {
      image: '../../images/pie_cosmo_cake.webp',
      width: '180',
      height: '180',
      title: 'Cosmo cake',
      subtitle: 'Это баннер, логотип для автомоки',
      desc: '',
      component: <Cake />,
      showBig: false,
      path: 'cake',
      key: 2001
    },
    {
      image: "../../images/wash_your_car.webp",
      width: '180',
      height: '180',
      component: <WashCar />,
      showBig: false,
      title: "Wash your car",
      subtitle: "Это баннер, логотип для автомоки",
      desc: 'Этот баннер так и наравит отвести свою малютку на мойку. Он весь в пене и чистой воде, ваша машина будет вам благодарна если вы отвезёте ее на Wash Your Car',
      path: 'wash',
      key: 3001
    },
    {
        image: "../../images/red_eyes_totem.webp",
        width: "180",
        height: "180",
        component: <RedEyes />,
        showBig: false,
        title: "Red Eyes Totem logo",
        subtitle: "Красноглазый тотем логотип.",
        desc: "Red Eyes Totem мой музыкаьлный проект, в стиле шаманского эмбиента и трайбла с психоделическим звучанием, невероятно гипнотический и атмосферный звук переносит вас в состояния щаманского транса. Всего написано три трека",
        path: "red",
        key: 4004
    },
];

    // {
    //     image: pic7,
    //     width: '180',
    //     height: '180',
    //     title: 'ufo',
    //     path: '/ufo'
    // },
    //

    // {
    //     image: pic9,
    //     width: '180',
    //     height: '180',
    //     title: 'Misteriosa Island cover of music album',
    //     path: '/misteriosa'
    // },

