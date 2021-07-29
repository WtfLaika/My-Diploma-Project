import React from 'react'
import "./ButtonVideo.css"
import Youtube from "react-youtube"
import { useState } from 'react'
import {ReactComponent as IconPlay} from "./img/icons/iconPlay.svg"


export default function ButtonVideo() {
    
    const [isStarted, setStart] = useState(false)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
        position: 'absolute',
    };
    function onReady(e) {
        e.target.pauseVideo();
    }
    function handlerVideo() {
        setStart(true);
    }
    function hideVideo(e){
        setStart(false);
    }
    let myDiv = (<div className='container-video'>
        <input type='button' className='exit' onClick={hideVideo} value='X' />
        <Youtube className='myVideo' opts={opts} videoId="-KriXl4fcRI" onReady={onReady}></Youtube>
    </div>)

    return (
        <div className='btn_container' >
            {isStarted &&  myDiv }
            <IconPlay className='video-button'  onClick={handlerVideo}></IconPlay>
            <div className='btn_text'>
                Посмотрите видео-отсчет
                2020-2021
            </div>
        </div>

    )
}