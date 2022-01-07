import React from 'react'
import './error.css'

function Errors() {
    return (
        <div className='errorContainer'>
            <div className="errorWrapper">
                <img src="/Ghost.gif" alt="error-gif"/>
                <p>something went wrong please try again later</p>
                <button onClick={() => window.location.reload(true)}>Refresh</button>
                <button onClick={() => window.close()}>Close</button>
            </div>
        </div>
    )
}

export default Errors
