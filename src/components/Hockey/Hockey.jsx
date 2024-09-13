import React, { Component } from "react";
export default class Hockey extends Component {

  render () {
    return (
        <div className="content">
          {console.log(this)}
          <div className="title">
             <h1 className="animate__animated animate__lightSpeedInRight">Hockey</h1>
          </div>
            <div className="page">
              <img src={'./images/hockey_club.webp'} alt="" width="240" height="240"/>
            </div>
        </div>
      )
  }
}
