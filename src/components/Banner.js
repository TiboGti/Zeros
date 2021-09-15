import React from 'react'
import './style/banner.css'
import Btn from './Btn';

const Banner = () => {
    return (
        <div className="banner">
            <h1>
            ¿Aún no sabes por donde empezar?
            </h1>
            <h2>
            ¡Revisa nuestro curso de iniciación al poker!
            </h2>
            <Btn type="big" content="Curso Gratis" />
        </div>
    )
}

export default Banner;
