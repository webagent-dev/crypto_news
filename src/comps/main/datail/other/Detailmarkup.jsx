import React from 'react'
import {FaQuestion} from 'react-icons/fa'

function Detailmarkup({icon, text, value}) {
    return (
        <div className='detailmarkup__container'>
            <div className="detailmarkup__wrapper">
                <div className="icon__text">
                <FaQuestion />
                <h4>the texts in</h4>
                </div>
                <h3>34678</h3>
            </div>
        </div>
    )
}

export default Detailmarkup
