import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PictureDetail.module.css";
import Picture from "../Graphics/Picture";

const PictureDetail = (props) => {
  const {key} = useParams();

  const details = props.getDetail(key);
  const { title, subtitle} = details;

  return (  
        <div className="content">

          <div className="title">
             <h1 className="animate__animated animate__headShake">{title}</h1>
          </div>

            <div className="subtitle">{subtitle}</div>

            <div className={styles.page}>
              <Picture
                details={details} 
              />
            </div>
        </div>
      )
  }
  export default  PictureDetail;