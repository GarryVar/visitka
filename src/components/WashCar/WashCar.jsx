import React, { Component } from "react";

export default class WashCar extends Component {
  render () {
    return (
        <div className="content">
            <div className="title">
               <h1 className="animate__animated animate__lightSpeedInRight">Wash Your Car</h1>
            </div>
            <p className="subtitle">Рекламный баннер для сервиса автомоек</p>
            
            <div className="page">
              <img src={"./images/wash_your_car.webp"} alt="" width="240" height="240"/>
            </div>
        </div>
      )
  }
}
