import { Component } from "react";
import style from "./Home.module.css";

export default class Home extends Component {
    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Главная</h1>
                </div>
                {/* <p className="subtitle">Привет! меня зовут Игорь я изучаю фронтенд, <br /> пишу музыку и увлекаюсь графикой.</p> */}
                <div className={style.content}>
                    <h2 className={style.title}>Что это  <span className="animate__animated animate__rubberBand"></span>   ?</h2>
                    <p className={style.text}>Это моя визитка здесь можно ознакомится с моими навыками веб - разработки, увлечениями, интересами. Здесь я попытаюь собрать всё чем увлекаюсь в одном месте. Это стандартное реакт приложение, в стадии разработки и дополнения. Оно будет дорабатываться по мере изучения этого фреймворка…</p>
                </div>
            </div>    
        )
    }
}