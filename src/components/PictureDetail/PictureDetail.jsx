import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PictureDetail.module.css";

const PictureDetail = ({getDetail}) => {
  const {key} = useParams();

  const details = getDetail(key);
  const { image,width,height,title,subtitle,desc } = details;


  return (
        <div className="content">
          <div className="title">
             <h1 className="animate__animated animate__lightSpeedInRight">{title}</h1>
          </div>
            <div className="subtitle">{subtitle}</div>
            <div className={styles.page}>
                {
                  <div className={styles.container}>
                    <div className="image">

                      <img
                          src={image}
                          alt={title}
                          width={width}
                          height={height}
                      />

                    </div>

                    <p className={styles.desc}>{desc}</p>
                  </div>
                }
            </div>
        </div>
      )
  }
  export default  PictureDetail;