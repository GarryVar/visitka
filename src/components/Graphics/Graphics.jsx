import { Component } from "react";

export default class Graphics extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="title">
                <h1 className="animate__animated animate__lightSpeedInRight">Графика</h1>
            </div>
        )
    }
}