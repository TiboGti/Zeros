import React from 'react'
import Btn from './Btn';
import './style/card.css'


const Card = (props) => {
    const image = props.image;
    const cardtitle = props.title;
    const text1 = props.text1;
    const text2 = props.text2;
    const btn_type = props.btntype;
    const btn_content = props.btncontent;


    return (
        <div className="card">
            <div className="card--img">
                <img src={image} alt="" />
            </div>
            <div className="card--body">
                <h3 className="card--title">
                    {cardtitle}
                </h3>
                <p className="card--text">
                    {text1}
                </p>
                <p className="card--text">
                    {text2}
                </p>
            </div>
            <div className="card--footer">
            <Btn type={btn_type} content={btn_content} />
            </div>
        </div>
    )
}

export default Card;
