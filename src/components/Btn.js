import React from 'react'
import './style/btn.css'

export const Btn = (props) => {
    const type = `btn btn--${props.type}`;
    const content = props.content;
    return (
        <button className={type}>
        {content}
        </button>
    )
}


export default Btn;