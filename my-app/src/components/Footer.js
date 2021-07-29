import React from 'react';
import './Footer.css';
import SocialSites from './SocialSites';

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                    <a className='conf-inf' href='https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C'>
                        Политика конфиденциальности
                    </a>
                    <a className='data-proc' href='https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5'>Соглашение на обработку персональных данных</a>
                <SocialSites position={"footer"}></SocialSites>
            </div>
        </footer>
    )
}
