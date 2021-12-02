import React from 'react'

function little({text, value}) {
    return (
        <div className='little__container'>
            <p>{text}</p>
            <h2>{value}</h2>
        </div>
    )
}

export default little
