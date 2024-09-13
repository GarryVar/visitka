import React from "react";

const PictureDetail = (props) => {
  console.log(props);
  return (
        <div className="content">
          <div className="title">
             <h1 className="animate__animated animate__lightSpeedInRight">DETAIL</h1>
          </div>

            <div className="page">
                {
                  props.data.map((i) => {
                    return (
                      <div className="container">
                        <div className="image">
                          <img src={i.image} alt="" width="240" height="240"/>
                        </div>
                        <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, enim?</p>
                      </div>
                    )
                  })
                }
            </div>
        </div>
      )
  }

  export default  PictureDetail;