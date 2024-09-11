import { Component } from "react";

export default class Music extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="title">
                <h1 className="animate__animated animate__lightSpeedInRight">Музыка</h1>
            </div>
        )
    }
}