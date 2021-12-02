import React from 'react'
import './error.css'

function Errors() {
    return (
        <div className='errorContainer'>
            <div className="errorWrapper">
                <img src="" alt="error-gif" />
                <p>something went wrong please try again later</p>
                <button>refresh</button>
            </div>
        </div>
    )
}

export default Errors
