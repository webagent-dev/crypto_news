
import React from 'react'
import moment from 'moment'
import '../../news/news.css'
const demoImage = 'https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'
function Newmarkup({data}) {
    return (
        <a href={data?.url} target='_blank' className='new__markup__container'>
            <div className="new__markup__wrapper">
                <div className="new__markup__head">
                    <h2>{data?.name}</h2>
                    </div>
                <div className="news__makeup__image">
                    <img src={data?.image?.thumbnail?.contentUrl || demoImage} alt="news__markup_pic" />
                </div>
            </div>
            <p>{data?.description > 100 ? `${data?.description.substring(0, 100)}...` : data?.description}</p>
            <div className="news__markup__footer">
                <div className="news__makeup__footer__wrapper">
                    <img src={data?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <h3>{data?.provider[0]?.name}</h3>
                </div>
                <div className="timestamp">{moment(data?.datePublished).startOf('ss').fromNow()}</div>
            </div>
        </a>
    )
}

export default Newmarkup
