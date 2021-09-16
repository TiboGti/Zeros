import React from 'react'

import './styles/home.css'
import Navbar from '../components/Navbar'
import Cards from '../components/cards';
import Cardspop from '../components/cardspop';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import CardspopActive from '../components/CardspopActive';


function Home() {
    return (
        <div className="home">
            <header>
                <Navbar/>
            </header>
            <main>
                <div className="main__container">
                    <section className="main__hero">
                    </section>
                    <section className="main__card">
                        <h2 className="main__sec--title">
                            ¿Qué ofrecemos en ZerosPoker.com? 
                        </h2>
                        <Cards/>
                    </section>
                    <section className="main__cardpop--mobile">
                        <h2 className="main__sec--title">
                            ¿Qué dicen otros profesionales?
                        </h2>
                        <Cardspop/>
                    </section>
                    <section className="main__cardpop--desktop">
                        <h2 className="main__sec--title">
                            ¿Qué dicen otros profesionales?
                        </h2>
                        <CardspopActive/>
                        
                    </section>
                    <section className="main__banner">
                        <Banner/>
                    </section>
                </div>
            </main>
                <Footer/>

            
        </div>
    )
}

export default Home;
