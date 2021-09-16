import React from 'react'
import './style/list.css'
import Banner from './Banner'
import Btn  from './Btn'
import Cards from './cards'
import Cardspop from './cardspop'
import Navbar from './Navbar'
import Footer from './footer'
import CardspopActive from './CardspopActive'

export const stylelist = () => {
    return (
        <div className="list__container">
            <div className="title">
                <h1>Components</h1>
            </div>
            <section className="list">
                <Navbar/>
                <h2 className="component__name"> -Navbar</h2>
            </section>
            
            <section className="list">
                <Cards/>
                <h2 className="component__name"> -Card</h2>
            </section>
            <section className="list">
                <Cardspop/>
                <h2 className="component__name"> -Card Pop mobile</h2>
            </section>
            <section className="list">
                <CardspopActive/>
                <h2 className="component__name"> -Card Pop Desktop</h2>
            </section>
            <section className="list listbutton">

            <Btn type="primary" content="Registrate"/>
            
            <Btn type="secundary" content="Curso Gratis"/>
            
            <Btn type="card" content="Visualizador"/>
            
            <Btn type="big" content="Curso Gratis"/>

            <Btn type="arrow" content="&#x279C;"/>
            <h2 className="component__name"> -Botones</h2>
            </section>
            <section className="list">
                <Banner/>
                <h2 className="component__name"> -Banner</h2>
            </section>
            <section className="list">
                <Footer/>
                <h2 className="component__name"> -Footer</h2>
            </section>
        </div>
    )
}

export default stylelist;