import { Component } from "react";
import style from "../PictureDetail/PictureDetail.module.css";


export default class Picture extends Component  {

  constructor(props) {
    super(props);

    // this.onClickLike = this.onClickLike.bind(this);

    this.state = {
      likes: this.props.details.like
    };


}

    // onClickLike () {
    //   this.ff(this)
    //   // this.setState(s => ({likes: this.state.likes}))
    // };


  render() {
      return (  
        
        <div className={style.container}>
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


          <p className={style.desc}>{this.props.details.desc}</p>
        </div>
      )
    }
  }