import React, {useState, useEffect } from 'react'
import './news.css'
import {useGetBingNewsQuery } from '../../../services/newApis'
import { useGetMarketQuery } from '../../../services/cryptoApis'
import Error from '../../error/Errors'
import moment from 'moment'
const demoImage = 'https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

function News() {
    const [coin, setCoin ] = useState('Cryptocurrency')
    const { data:bingNews, isError } = useGetBingNewsQuery({cat: `${coin}`, count: 100})
    const { data } = useGetMarketQuery(100)
    if(isError) return <Error />
    if(!bingNews?.value) return 'Loading...'
    // const filterOption = (input, element) => element.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    return (
        <div className='newContainer'>
            <div className="form__container">
                <select value={coin} onChange={(e) => setCoin(e.target.value)}>
                    <option value="Cryptocurrency" >Cryptocurrency</option>
                        {
                            data?.data?.coins.map((doc, i) => <option value={doc.name}>{doc.name}</option>)
                        }
                </select>

            </div>
            <div className="news_wrapper">
           {
               bingNews?.value.map((data, index) => 
               (
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

        ))
           }
            </div>
        </div>
    )
}

export default News
