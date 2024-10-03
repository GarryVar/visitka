import React, { useRef, useState } from "react";
import style from "../Player/Player.module.css";
import { Link } from "react-router-dom";



export default function Player(props) {

    const {
        track, 
        artist, 
        trackTitle, 
        cover, 
        durationMin, 
        durationSec, 
        artistLinkDiscogs, 
        released,
    } = props.track;


    const audioPlayer = useRef();

    const [triger, setTriger] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [durationMinutes, setDurationMinutes] = useState(durationMin);
    const [durationSeconds, setDurationSeconds] = useState(durationSec);

    const playPause = () => {   
        setTriger(!triger);
        !triger ? audioPlayer.current.play() : audioPlayer.current.pause();
    };

    const pauseIcon = <path d="M6.17 29.48l21.85 -11.43c1.26,-0.66 1.98,-1.77 1.98,-3.05 0,-1.28 -0.72,-2.39 -1.98,-3.05l-21.85 -11.43c-1.29,-0.68 -2.79,-0.69 -4.1,-0.04 -1.32,0.64 -2.07,1.77 -2.07,3.09l0 22.86c0,1.32 0.75,2.45 2.07,3.09 1.31,0.65 2.81,0.64 4.1,-0.04z"/>;
    const playIcon = <path d="M1.2 0h7.6c.66 0 1.2.54 1.2 1.2v27.6c0 .66-.54 1.2-1.2 1.2H1.2A1.2 1.2 0 0 1 0 28.8V1.2C0 .54.54 0 1.2 0zM21 0h8a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"/>;

    const stop = () => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
        setTriger(false);
    };

    const setSpeed = (speed) => {
        audioPlayer.current.playbackRate = speed;
    };

    const onPlaying = () => {
        let duration = audioPlayer.current.duration;

        setCurrentTime(audioPlayer.current.currentTime);
        setSeekValue(Math.floor((audioPlayer.current.currentTime / audioPlayer.current.duration) * 100));
        
        setMinutes(Math.floor(audioPlayer.current.currentTime / 60));
        setSeconds(Math.floor(audioPlayer.current.currentTime % 60));

        setDurationMinutes(Math.floor(duration - audioPlayer.current.currentTime) / 60);
        setDurationSeconds(Math.floor(duration - currentTime) % 60);
    };


    return (
        <div className={ released ? (style.wrapper, style.wrapperReleased) : style.wrapperUnreleased }>
           
            <div className={style.cover}>
                <img src={ cover } alt="logo" width="180" height="180"  />
            </div>

            <div className={style.player}>
                <div className={style.trackTitle}>
                    <span className={style.artist}>
                        <Link 
                            to={ artistLinkDiscogs } 
                            target="_blank">{ artist }
                        </Link>
                    </span>
                    <span>{ trackTitle }</span>
                </div>
                <div className={style.trackControls}>
                    <audio
                        src={ track }
                        ref={ audioPlayer }
                        onTimeUpdate={ onPlaying }>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>

                    <div className={style.playerControls}>
                    <span className={style.playerTimer}>
                        {
                            `${
            
                                Math.floor(minutes) < 10 ? 
                                '0' +  Math.floor(minutes) :
                                 Math.floor(minutes) 
                            }
                            : ${
                                Math.floor(seconds) < 10 ? 
                                '0' + Math.floor(seconds) :
                                Math.floor(seconds)
                            }`
                        }
                    </span>

                    <div className={style.playerControlButton}>
                        <button className={style.controlButton} onClick={ playPause }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">
                                { ! triger  ? pauseIcon :  playIcon }
                            </svg>
                        </button>

                        <button className={style.controlButton} onClick={ stop }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20">
                                <rect width="30" height="30" rx="5" ry="5"/>
                            </svg>
                        </button>
                    </div>
                    <span className={style.playerTimer}>
                        {
                            `-${
                                Math.floor(durationMinutes) < 10 ? 
                                '0' + Math.floor(durationMinutes): 
                                Math.floor(durationMinutes)} 
                                : 
                                ${durationSeconds < 10 ? '0' + durationSeconds: durationSeconds}
                            `
                        }
                    </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={Math.floor(seekValue)}
                        onChange={(e) => {
                        
                            const seekto = audioPlayer.current.duration * (+e.target.value / 100);
                            audioPlayer.current.currentTime = seekto;
                            setSeekValue(e.target.value);
                              
                        }}
                    />
                </div>
            </div>
        </div>
    );
}