import Hockey from "../components/Hockey/Hockey";
import Cacke from "../components/Cacke/Cacke";
import WashCar from "../components/WashCar/WashCar";


const date = new Date(2024, 8, 10, 5, 8);

export const pictures = [
  {
      image: '../../images/hockey_club.webp',
      width: '180',
      height: '180',
      title: 'Hockey club logo',
      component: <Hockey />,
      showBig: false,
      path: '/hockey',
      key: date.getDate()
  },
  {
      image: '../../images/pie_cosmo_cacke.webp',
      width: '180',
      height: '180',
      title: 'Cosmo cacke logo',
      component: <Cacke />,
      showBig: false,
      path: '/cacke',
      key: date.getDate()
  },
  {
      image: "../../images/wash_your_car.webp",
      width: '180',
      height: '180',
      component: <WashCar />,
      showBig: false,
      title: 'Wash your car logo',
      path: '/wash',
      key: date.getDate()
  },
];

console.log(pictures)