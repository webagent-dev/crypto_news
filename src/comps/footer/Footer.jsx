import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
           <h3>Copyright {new Date().getFullYear()}</h3>
           <h3>Crypto-news</h3>
           <span>all right reserved </span>
        </div>
    )
}

export default Footer
