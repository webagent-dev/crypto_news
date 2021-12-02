import React from 'react'
import '../App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './main/home/Home'
import Cryto from './main/crypto/Crypto'
import Exchange from './main/exchange/Exchange'
import News from './main/news/News'
import Zoom from 'react-reveal'
import Footer from './footer/Footer'


function Container() {
    return (
        <div className='container'>
            <Zoom >
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/crytocurrecy' element={<Cryto />}/>
            <Route path='/exchange' element={<Exchange />}/>
            <Route path='/news' element={<News />}/>
            </Routes>
            </Zoom>
        <Footer />
        </div>
    )
}

export default Container
