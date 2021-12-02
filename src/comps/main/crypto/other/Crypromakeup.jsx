import millify from 'millify'
import React from 'react'
import '../../home/home.css'
function Homemarkup({ data }){
    const { name, rank, iconUrl, websiteUrl, price, marketCap, change} = data
    return (
        <div className='Home__markup'>
            <a href={websiteUrl} className="markup__wrapper">
                <div className="upper">
                    <h2>{rank} {name}</h2>
                    <img src={iconUrl} alt="bitmap_image" />
                </div>
                <div className="lists">
                    <div className='list_wrapper'><p>Price</p>:<span>{millify(price)}</span></div>
                    <div className='list_wrapper'><p>Market cap</p>:<span>{millify(marketCap)}</span></div>
                    <div className='list_wrapper'><p>Daily Change</p>:<span>{millify(change)}</span></div>
                </div>
            </a>
        </div>
    )
}

export default Homemarkup
