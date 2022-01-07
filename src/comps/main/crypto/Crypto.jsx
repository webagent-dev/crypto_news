import React, { useState, useEffect } from 'react'
import "./crypto.css"
import Cryptomakeup from './other/Crypromakeup'
import { useGetMarketQuery } from '../../../services/cryptoApis'
import { FaSearch } from 'react-icons/fa'
import Errors from '../../error/Errors'
import Loader from '../../loader/Loader'

function Crypto() {
    const count = 100
    const { isLoading, data:listCrypto, isError } = useGetMarketQuery(count)
    const [list, setList] = useState([])
    const [input, setInput] = useState('')
    useEffect(() =>{
        const filterData = listCrypto?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(input.toLocaleLowerCase()))
        setList(filterData)
    },[input, list])
    if(isError) return <Errors />
        if(isLoading) return <Loader />
    return (
        <div className='cryptoContainer'>
            <form className='formContainer'>
                    <input type="search" placeholder='search your favourte cion' onChange={(e) => setInput(e.target.value)}/>
            </form>
            <div className="homemakeup_wrapper">
                {
                list?.map((doc) => <Cryptomakeup key={doc.uuid} data={doc}/>)
                 }
            </div>
        </div>
    )
}

export default Crypto
