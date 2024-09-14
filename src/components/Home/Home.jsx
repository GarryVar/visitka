import { Component } from "react";

export default class Home extends Component {
    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__lightSpeedInRight">Главная</h1>
                </div>
                <p className="subtitle">Привет! меня зовут Игорь я изучаю фронтенд, <br /> пишу музыку и увлекаюсь графикой.</p>
            </div>    
        )
    }
}