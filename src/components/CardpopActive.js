import React from 'react'
import './style/pop.css'
import plus from '../assets/ico/mas.png'

const CardpopActive = (props) => {
    const popimg = props.image;
    const titlepop = props.title;
    const subtitlepop = props.subtitle;
    const textfooter = props.textfooter;
    const text1 = props.text1;
    const text2 = props.text2;
    

    return (
        <div className="cardpopA">
            <div className="cardpop__header">
                <div className="cardpop__header--img">
                    <img src={popimg} alt="" />
                </div>
                    <div className="cardpop__header--title">
                        <h3>
                            {titlepop}
                        </h3>
                        <p>
                            {subtitlepop}
                        </p>
                    </div>
            </div>
            <div className="cardpopA__body">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            
            <div className="cardpop__footer">
                <p>
                    "{textfooter}"
                </p>
            </div>
                
        </div>
    )
}

export default CardpopActive;
