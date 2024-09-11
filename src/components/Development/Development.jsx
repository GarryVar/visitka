import { Component } from "react";

export default class Development extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__lightSpeedInRight">Разработка</h1>
                </div>
                <p className="subtitle subtitle animate__animated animate__fadeIn">Мои проекты по верстке (HTML, CSS, JS)</p>
            </div>
        )
    }
}