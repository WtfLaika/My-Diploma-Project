import React from 'react';
import './Consulation.css';
import Form from './Form';
function Consultation() {



    return (
        <div className='consultation-container' >
            <div className='consultation-text'>
                <div className='consultation-title title'>
                    Оставьте заявку на бесплатную консультацию
                </div>
                <div className='consultation-subtitle subtitle'>Мы передзвоним вам в ближайшее время</div>
            </div>
        
            <Form></Form>
            
        </div >
    )
}

export default Consultation
