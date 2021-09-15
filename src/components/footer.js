import React from 'react'
import './style/footer.css'
import twitch from '../assets/ico/twitch.svg'
import instagram from '../assets/ico/instagram.svg'
import twitter from '../assets/ico/twitter.svg'
import youtube from '../assets/ico/youtube.svg'

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__icons">
                    <img src={twitch} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <div className="footer__info">
                    <p>Términos</p>
                    <p>Privacidad</p>
                    <p>Política de cookies</p>
                    <p>Jugar Bien</p>
                    <p>soporte@zerospoker.com</p>
                </div>
                <div className="footer__descrip">
                    <p>Zeros Videos Limited -#2512 Langham Place 
                    Office Tower, 8 Argyle Street, Mongkok, 
                    Kowloon (Hong Kong)</p>
                </div>
            </div>
        </footer>
    )
}

export default footer;
