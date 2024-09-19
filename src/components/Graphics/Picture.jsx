import { Component } from "react";
import style from "../PictureDetail/PictureDetail.module.css";


export default class Picture extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.details.like
    };
}

  render() {
      return (  
        
        <figure className={style.container}>
                <img 
                  className={style.picture} 
                  src={this.props.details.image}
                  width={this.props.details.width}
                  height={this.props.details.height}
                  alt={this.props.details.title}
                /> 


                {/* <div className={style.controls}>
                  <button 
                    onClick={this.onClickLike}
                    className={style.likeBtn}>
                     L
                  </button>
                  <span className={style.likeCount}>{this.state.likes}</span>
                  <button className={style.likeBtn}>D</button>
                  <button className={style.likeBtn}>S</button>
                </div> */}


          <figcaption className={style.desc}>{this.props.details.desc}</figcaption>
        </figure>
      )
    }
  }