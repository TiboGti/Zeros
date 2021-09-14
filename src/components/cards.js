import React from 'react'
import { CardData } from '../api/CardData'
import Card from './Card'



const cards = () => {
    return (
        <div className="container__map">
            {
                CardData.map(CardDatab => (
                    <div className="col-md-4" key={CardDatab.id}>
            <Card title={CardDatab.title} image={CardDatab.img} text1={CardDatab.text1} text2={CardDatab.text2} btntype={CardDatab.btntype} btncontent={CardDatab.btncontent} />
            </div>

                ))

            } 
        </div>
    )
}

export default cards;
