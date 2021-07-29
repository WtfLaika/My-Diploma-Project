import { number } from 'prop-types';
import React from 'react'
import { useState } from 'react';
import './ButtonClear.css';

function ButtonClear(props) {
    const numbPatt = /^[+380]?\d{10,12}/g;
    const namePatt = /[а-яА-Яa-zA-Z]{3,10}/g
    const class1 = {
        class: 'btn-clear-blue',
    }
    const class2 = {
        class: 'btn-clear-grey'
    }
    let myClass;
    if (props.consultat) {
        myClass = class2;
    } else {
        myClass = class1
    }
    const [nameError, setNameError] = useState('Проверьте имя');
    const [numberError, setNumberError] = useState('Проверьте номер телефона, он должен быть в формате +380ХХХХХХХХХ');
    const [userName,setName] = useState('');
    const [userNumber,setNumber] = useState('');
    const [nameDirty,setNameDirty] = useState(false);
    const [numberDirty,setNumberDirty] = useState(false);

    const inputHandler = (e) =>{
        if(e.target.name == 'name'){
            setName(e.target.value)
            if(namePatt.test(e.target.value)){
                setNameError('');
            }
            else{
                setNameError('Проверьте имя');
            }
        }else if(e.target.name == 'number'){
            setNumber(e.target.value);
            if(numbPatt.test(e.target.value)){
                setNumberError('');
            }else{
                setNumberError('Проверьте номер телефона, он должен быть в формате +380ХХХХХХХХХ');
            }
            
        }

    }
    const blurHandler = (e) =>{
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;

            case "number":
                setNumberDirty(true);
                break;
        }
    }

    return (
        <>

           
            {!props.consultat && <a href={props.link} className='big-card-link'><button className={myClass.class} >
                {props.name}
            </button></a>}
        </>
    )
}

export default ButtonClear
