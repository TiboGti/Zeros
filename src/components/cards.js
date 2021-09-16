import React from 'react'
import { CardData } from '../api/CardData'
import './style/card.css'
import Card from './Card'



const cards = () => {
    return (
        <div className="card__container--slide">
            {
                CardData.map(CardDatab => (
                    <div className="card__map" key={CardDatab.id}>
            <Card title={CardDatab.title} image={CardDatab.img} text1={CardDatab.text1} text2={CardDatab.text2} btntype={CardDatab.btn_type} btncontent={CardDatab.btn_content} />
            </div>
                ))
            } 
        </div>
    )
}

export default cards;
