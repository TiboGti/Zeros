import React from 'react'
import { PopData } from '../api/PopData';

import CardpopActive from './CardpopActive';

const CardspopActive = () => {
    return ( 
        <div className="container__pop">
            {
                PopData.map(popdatab => (
                    <div className="md" key={popdatab.id} >
                        <CardpopActive image={popdatab.img} title={popdatab.title} subtitle={popdatab.subtitle} textfooter={popdatab.footer} text1={popdatab.text1} text2={popdatab.text2} />
                    </div>

                ))

            }
            
        </div>
    )
}

export default CardspopActive;
