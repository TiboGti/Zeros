import React from 'react'
import './style/banner.css'
import Btn from './Btn';

const Banner = () => {
    return (
        <div className="banner">
            <h2>
                ¿Aún no sabes por donde empezar?
            </h2>
            <h3>
                ¡Revisa nuestro curso de iniciación al poker!
            </h3>
            <Btn type="big" content="Curso Gratis" />
            <Btn type="arrow" content="&#x279C;" />
        </div>
    )
}

export default Banner;
