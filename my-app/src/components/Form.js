import React from 'react'
import {useState,useEffect} from "react"
import "./Form.css"

export default function Form() {
    const numbPatt = /^[+380]?\d{10,12}/g;
    const namePatt = /[а-яА-Яa-zA-Z]{3,10}/g
    const [nameError, setNameError] = useState('Проверьте имя');
    const [numberError, setNumberError] = useState('Проверьте номер телефона, он должен быть в формате +380ХХХХХХХХХ');
    const [userName, setName] = useState('');
    const [userNumber, setNumber] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [numberDirty, setNumberDirty] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(nameError || numberError){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    }, [nameError,numberError])
    const inputHandler = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
            if (namePatt.test(e.target.value)) {
                setNameError('');
            }
            else {
                setNameError('Проверьте имя');
            }
        } else if (e.target.name == 'number') {
            setNumber(e.target.value);
            if (numbPatt.test(e.target.value)) {
                setNumberError('');
            } else {
                setNumberError('Проверьте номер телефона, он должен быть в формате +380ХХХХХХХХХ');
            }

        }

    }

    
    const blurHandler = (e) => {
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
        <form className='user-field' >
                {(nameDirty && nameError) && <div className={'error'}>{nameError}</div>}
                <input name={'name'} value={userName} className={'user-name btn-clear-grey'} placeholder={"Ваше имя"} type={'text'}  required onInput={ e => blurHandler(e)}  onChange={ e => inputHandler(e)}/>
                {(numberDirty && numberError) && <div className={'error'}>{numberError}</div>}
                <input value={userNumber} name={'number'} className={'user-number btn-clear-grey'} placeholder={'+ 380 (___) __-__-___'} type={'text'}  onInput={ e => blurHandler(e)}  onChange={ e => inputHandler(e)} required />

                <button type='submit' disabled={formValid == false} className='left-application' >Отправить заявку</button>
                </form>
        
    )
}
