import React from 'react'
import Banner from './Banner'
import Btn  from './Btn'
import Cards from './cards'
import Cardspop from './cardspop'
import Navbar from './Navbar'
import Footer from './footer'

export const stylelist = () => {
    return (
        <div>
            <section className="list">
                <Navbar/>
            </section>
            
            <section className="list">
                <Cards/>
            </section>
            <section className="list">
                <Cardspop/>
            </section>
            <section className="list listbutton">

            <Btn type="primary" content="Registrate"/>
            
            <Btn type="secundary" content="Curso Gratis"/>
            
            <Btn type="card" content="Visualizador"/>
            
            <Btn type="big" content="Curso Gratis"/>
            </section>
            <section className="list">
                <Banner/>
            </section>
            <section className="list">
                <Footer/>
            </section>
        </div>
    )
}

export default stylelist;