import React from 'react';
import "./SocialSites.css";
import { ReactComponent as YoutubeSvg } from './img/icons/iconYouTube.svg';
import { ReactComponent as FBSvg } from './img/icons/iconFB.svg';
import { ReactComponent as TwitterSvg } from './img/icons/iconTwitter.svg';
import { ReactComponent as InstagramSvg } from "./img/icons/instagram.svg"

export default function SocialSites(props) {
    let myClass;

    if (props.position == "header") {

        myClass = 'icons_item-white'
    } else if (props.position == "footer") {

        myClass = 'icons_item-gray'
    }
    let icons = [
        'https://www.youtube.com/user/OreliReshka',
        'https://www.facebook.com/OrelReshka',
        ' twitter',
        'https://www.instagram.com/orelireshka_official/']


    return (
        <>
            <div className='social-sites'>
                {props.position == "header" && <div className='social-sites_title'>Подписывайтесь в соцсетях</div>}
                <div className='icons-container'>
                    <a href={icons[0]}>< YoutubeSvg className={myClass}  /></a>
                    <a href={icons[1]}>< FBSvg className={myClass}  /></a>
                    <a><TwitterSvg className={myClass} onClick={() => { alert('Sorry, I have no' + icons[2]) }}  /></a>
                    <a href={icons[3]}><InstagramSvg className={myClass}  /></a>
                </div>
            </div>

        </>
    )
}
