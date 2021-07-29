import React from 'react'
import Arrow from "./img/icons/Arrow 2.png";
import Arrow2 from './img/icons/Arrow 1.png'
import Foto1 from "./img/4.png";
import Foto2 from "./img/5.png";
import './BigTourCard.css';
import ButtonClear from './ButtonClear'

export default function BigTourCard(props) {
    const class1 = {
        container: 'excourse-card-text',
        title: 'excourse-title title',
        subtitle: "excourse-subtitle subtitle",
        backgroundImage: Foto1
    }
    const class2 = {
        container: 'review-card-text',
        title: 'review-title title',
        subtitle: "review-subtitle subtitle",
        backgroundImage: Foto2
    }
    let myClass;
    let myProps;
    if (props.object.card[0] == '20-22') {
        myClass = class1;
        myProps = {
            name:'Смотреть Все',
            link:'https://orelireshka.tv/countries',
        }
    } else {
        myClass = class2;
        myProps = {
            name:'Читать отзывы',
            link:'https://otzovik.com/reviews/tv-peredacha_orel_ili_reshka/',
        }
    }

    function changeColor(e){
        const card = e.target.closest('.tourCards-container');
        card.style.color = "#F2CE72";
        const arrowContainer = e.target.closest('.arrow-container');
        const myArrow = arrowContainer.lastChild;
        const myTimer = setTimeout( (()=>myArrow.setAttribute("src",Arrow2)),100)
    }

    function removeColor(e){
        const card = e.target.closest('.tourCards-container');
        card.style.color = "white";
        const arrowContainer = e.target.closest('.arrow-container');
        const myArrow = arrowContainer.lastChild;
        const myTimer = setTimeout( (()=>myArrow.setAttribute("src",Arrow)),100)
    }

    return (
        <div className='big-tour-card'  >
            <div className='tourCards-container' style={{ backgroundImage: `url(${myClass.backgroundImage})` }} >
                <div className='card-header'>
                    <div className='card-header-item'>{props.object.card[0]}</div>
                    <div className='card-header-item'>{props.object.card[1]}</div>
                </div>
                {props.object.card[0] == '20-22' &&<a name='application'></a>}
                <div className={`card-content ${props.object.card[3]}-container`}>
                    <div className={`content-item ${props.object.card[3]}-item`}>
                       {props.object.card[2]}
                    </div>
                    <a href={myProps.link} className='arrow-container' onMouseOver={changeColor} onMouseOut={removeColor}><img src={Arrow} className='arrow' ></img></a>
                </div>


            </div>
            <div className={myClass.container}>
                <div className={myClass.title}>{props.object.text[0]}</div>
                <div className={myClass.subtitle}>{props.object.text[1]}</div>
                <ButtonClear name={myProps.name} link={myProps.link}></ButtonClear>
            </div>
        </div>

    )
}
