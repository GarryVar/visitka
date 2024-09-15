import { Component } from "react";
import styles from "../PictureDetail/PictureDetail.module.css";

export default class Picture extends Component  {
  render() {
      return (
        
        <div className={styles.container}>
                <img 
                  onClick={this.props.onPicAnimate}
                  className={`${styles.picture} ${!this.props.picAnimate ? 'animate__animated animate__flip' :''}` 
                  }
                  src={this.props.details.image}
                  width={this.props.details.width}
                  height={this.props.details.height}
                  alt={this.props.details.title}
                /> 
          <p className={styles.desc}>{this.props.details.desc}</p>
        </div>
      )
    }
  }