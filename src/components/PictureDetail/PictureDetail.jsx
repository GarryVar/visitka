import React from "react";
import {useParams} from "react-router-dom";

const PictureDetail = (props) => {
    const {key} = useParams();
    const getData = props.getDetail(key);
    const {
        image,
        width,
        height,
        title,
        subtitle,
        desc,
    } = getData;
  return (
        <div className="content">
          <div className="title">
             <h1 className="animate__animated animate__lightSpeedInRight">{title}</h1>
          </div>
            <div className="subtitle">{subtitle}</div>


            <div className="page">
                {
                  <div className="container">
                    <div className="image">

                      <img
                          src={image}
                          alt={title}
                          width={width}
                          height={height}
                      />

                    </div>
                    <p className="desc">{desc}</p>
                  </div>
                }
            </div>
        </div>
      )
  }
  export default  PictureDetail;