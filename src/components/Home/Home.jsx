import { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="title">
                <h1 className="animate__animated animate__lightSpeedInRight">Главная</h1>
            </div>
        )
    }
}