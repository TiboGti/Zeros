import React from 'react'
import './style/pop.css'
import plus from '../assets/ico/mas.png'

const cardpop = (props) => {
    const popimg = props.image;
    const titlepop = props.title;
    const subtitlepop = props.subtitle;
    const textfooter = props.textfooter;

    return (
        <div className="cardpop">
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
            <div className="cardpop__body">
                
            </div>
            <div className="cardpop__footer">
                <p>
                    "{textfooter}"
                </p>
            </div>
                <button>
                    <img src={plus} alt="" />
                </button>
        </div>
    )
}

export default cardpop;
