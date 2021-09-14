import React from 'react'
import Btn  from './Btn'
import Cards from './cards'

export const stylelist = () => {
    return (
        <div>
            <section className="list">
                <Cards/>
            </section>
            <section className="list">
            <Btn type="primary" content="Registrate"/>
            <Btn type="secundary" content="Curso Gratis"/>
            <Btn type="card" content="Visualizador"/>
            <Btn type="big" content="Curso Gratis"/>
            </section>
        </div>
    )
}

export default stylelist;