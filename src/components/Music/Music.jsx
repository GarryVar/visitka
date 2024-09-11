import { Component } from "react";

export default class Music extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__lightSpeedInRight">Музыка</h1>
                </div>
                <p className="subtitle subtitle animate__animated animate__fadeIn">Здесь представлены мои треки написаные в разные годы в ситле Goa Trance</p>
            </div>
        )
    }
}