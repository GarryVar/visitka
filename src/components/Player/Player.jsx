import React, { useRef, useState } from "react";
import omLotus from "../../sounds/Om(Lotus).mp3";
import style from "../Music/Music.module.css";

export default function App() {
    const audioPlayer = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);


    const play = () => {
        audioPlayer.current.play();
    };

    const pause = () => {
        audioPlayer.current.pause();
    };

    const stop = () => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
    };

    const setSpeed = (speed) => {
        audioPlayer.current.playbackRate = speed;
    };

    const onPlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        setSeekValue(
            (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
        );
    };

    return (
        <div className={style.wrapper}>

            <div className={style.cover}>
                <img src="" alt=""/>
            </div>


            <div className={style.player}>
                <h3 className={style.trackTitle}>Om (Lotus)</h3>
                <div className={style.track}>
                    <audio
                        src={omLotus}
                        ref={audioPlayer}
                        onTimeUpdate={onPlaying}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>

                    {/*<p>{currentTime}</p>*/}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={seekValue}
                        onChange={(e) => {
                            const seekto = audioPlayer.current.duration * (+e.target.value / 100);
                            audioPlayer.current.currentTime = seekto;
                            setSeekValue(e.target.value);
                        }}
                    />

                    {/* Player*/}
                    <div className={style.playerControls}>
                        <button className={style.controlButton} onClick={play}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">
                                <path
                                    d="m9.54 5.38 13.95 7.27C24.45 13.15 25 14 25 15s-.55 1.85-1.51 2.35L9.54 24.62c-.96.51-2.07.51-3.03.01S5 23.27 5 22.27V7.73c0-1 .55-1.86 1.51-2.36.96-.5 2.07-.5 3.03.01z"/>
                            </svg>
                        </button>
                        <button className={style.controlButton} onClick={pause}>||</button>
                        <button className={style.controlButton} onClick={stop}>stop</button>
                    </div>

                </div>
            </div>
        </div>
    );
}