import React from 'react'
import "./Navigation.css"
import myIcon from './img/icons/myIcon.png'
import navBtn from './img/icons/navBtn.png'

let myNav = [['Все туры','#all-tours'], ["Отзывы",'#review'],["Контакты",'https://grc.ua/resume/540ae92aff091da51e0039ed1f656c6a4a6e53']];

export default function Navigation() {
    let myContent = myNav.map( (item,index)=>{
        return <a className='nav_main-item' key={index} href={item[1]}>{item[0]}</a> 
    } )

    return (
        <div className='nav'>
            <img src={myIcon} className='myIcon'/>
            <div className='nav_main'>
                {myContent}
            </div>
            
        </div>
    )
}

