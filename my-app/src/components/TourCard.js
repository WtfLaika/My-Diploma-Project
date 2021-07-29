import React from 'react'
import "./TourCard.css"
import firstFoto from "./img/1.png"
import secondFoto from "./img/2.png"
import thirdFoto from "./img/3.png"
import arrow from "./img/icons/Arrow 2.png";
import arrow2 from "./img/icons/Arrow 1.png";

let myCards = [
    ['02', `Экскурсия "Вечерний Киев"`, firstFoto],
    ['03', `Экскурсия по пейзажных местах`, secondFoto],
    ['04', `Экскурсия “История Киева”`, thirdFoto]
]

export default function TourCard() {


    function changeColor(e) {
        let card = e.target.closest('.card');
        card.style.color = "#F2CE72";
        let cardTitle = e.target.closest('.card-title');
        cardTitle.style.color = "#F2CE72";
        let myArrow = cardTitle.lastChild;
        let myTimer = setTimeout( ( ()=> myArrow.setAttribute('src', `${arrow2}`)), 100);
       
    }

    function removeColor(e) {
        let card = e.target.closest('.card');
        card.style.color = "white";
        let cardTitle = e.target.closest('.card-title');
        cardTitle.style.color = "white";
        let myArrow = cardTitle.lastChild;
        let myTimer = setTimeout( ( ()=> myArrow.setAttribute('src', `${arrow}`)), 100);

    }
    let cards = myCards.map((item, index) => {
        return (<div className="card"  key={index} style={{ backgroundImage: `url(${item[2]})`, color: "white" }}>
            <div className='card-order'>{item[0]}</div>
            <a className='card-title' onMouseOver={changeColor} onMouseOut={removeColor} href="https://orelireshka.tv/countries"><span>{item[1]} </span><img className='myArrow' src={arrow}></img></a>
        </div>)
    })
    return (
        <div className='card-container'>
            {cards}
        </div>
    )
}
