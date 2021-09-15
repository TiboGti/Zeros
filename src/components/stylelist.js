import React from 'react'
import Banner from './Banner'
import Btn  from './Btn'
import Cards from './cards'
import Cardspop from './cardspop'

export const stylelist = () => {
    return (
        <div>
            
            <section className="list">
                <Cards/>
            </section>
            <section className="list">
                <Cardspop/>
            </section>
            <section className="list listbutton">

            <Btn type="primary" content="Registrate"/>
            <br />
            <Btn type="secundary" content="Curso Gratis"/>
            <br />
            <Btn type="card" content="Visualizador"/>
            <br />
            <Btn type="big" content="Curso Gratis"/>
            </section>
            <section className="list">
                <Banner/>
            </section>
        </div>
    )
}

export default stylelist;