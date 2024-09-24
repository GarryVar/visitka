import { Component } from "react";
import style from "./Music.module.css";
import Player from "../Player/Player";



export default class Music extends Component {
    render () {
        return (
            <div className={`${style.content} content`}>
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Музыка</h1>
                </div>
                <div className={`${style.grid} animate__animated animate__fadeIn`}>
                    {
                        this.props.tracks.map(track =>
                            <Player track={track} key={track.artistLinkDiscogs.replace(/\D/g, "")}/>)
                    }
                </div>
            </div>
        )
    }
}