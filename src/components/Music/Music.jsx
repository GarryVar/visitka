import { Component } from "react";
import style from "./Music.module.css";
import omLotus from "../../sounds/Om(Lotus).mp3";
import Player from "../Player/Player";

export default class Music extends Component {
    render () {
        return (
            <div className={`${style.content} content`}>
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Музыка</h1>
                </div>
                <div className={style.grid}>

                    <Player />
                </div>
            </div>
        )
    }
}