import React,{ useState } from 'react'
import './home.css'
import Little from './other/little'
import Newshomemakeup from './other/Newshomemakeup' 
import Homemarkup from './other/Homemarkup'
import '../news/news.css'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { useGetMarketQuery } from '../../../services/cryptoApis'
import { useGetBingNewsQuery  } from '../../../services/newApis'
import Errors from '../../error/Errors'

function Home() {
    const count =  10
    const { isFetching, data, isError } = useGetMarketQuery(count)
    const { data:bingNews } = useGetBingNewsQuery({cat: 'Cryptocurrency', count: 10})
    const getStats = data?.data?.stats
    const [justTen, setJustTen] = useState(data?.data?.coins)
    const [news, setNews] = useState(bingNews?.value)
    if(isError) return <Errors />
    if(!bingNews?.value) return 'loading...'
    console.log(justTen)
    return (
        <div className='homeContainer'> 
        <h2>Global Crypto Stats</h2>
            <div className="stats_wrapper">
             <div className="stats_one">
             <Little value={getStats?.total} text='Total Cryptocurrencies'/>  
             <Little value={millify(getStats?.totalExchanges)} text='Total Exchanges'/>  
             <Little value={millify(getStats?.totalMarketCap)} text='Total Market Cap'/>  
             </div>
             <div className="stats_two">
             <Little value={millify(getStats?.total24hVolume)} text='Total 24th Volume'/>  
             <Little value={millify(getStats?.totalMarkets)} text='Total Markets'/>  
             {/* <Little value={getStats.} text=''/>   */}
             </div>
             </div>
        <div className="home_header">
        <h2>Top 10 Cryptos In The World</h2>
            <h4><Link to='/crytocurrecy'>Show More</Link></h4>
        </div>
        <div className="homemakeup_wrapper">
                {
                    justTen?.map((doc) =>  <Homemarkup key={doc.uuid} data={doc}/>)
                }
            </div>

            <div className="home_header">
        <h2>Latest Crypto News</h2>
        <h4><Link to='/news'>Show More</Link></h4>
        </div>
            <div className="news_wrapper">
                {
                    news?.map((doc, index) => <Newshomemakeup key={index} data={doc}/>)
                }
            </div>
        
        </div>
    )
}

export default Home
