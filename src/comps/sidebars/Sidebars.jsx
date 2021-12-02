import React from 'react'
import './sidebar.css'
import { AiFillHome}  from 'react-icons/ai'
import { GiCrownCoin } from 'react-icons/gi' 
 import { BsCurrencyExchange } from 'react-icons/bs'
 import {FaRegNewspaper} from 'react-icons/fa'
import Fade from 'react-reveal'
import { NavLink } from 'react-router-dom'

function Sidebars() {
    return (
        <div className='sidebarContainer'>
            <div className="sidebar__header">
                <div className="logo">
                    <img src="/logo1.png" alt="cryto_pic" />
                </div>
                <div className="head__word">
                    <h1>Cryto_New</h1>
                </div>
            </div>
    <Fade left>
                <div className="tabs">
                <NavLink to='/'
                    style={({isActive}) => {
                        return{
                            backgroundColor: isActive ? 'whitesmoke' : null
                        }
                    }}
                >
                    <div className="sidebar__home">
                        <AiFillHome size='20px' />
                        <h2>Home</h2>
                    </div>
                    </NavLink>
                    <NavLink to='/crytocurrecy'
                         style={({isActive}) => {
                            return{
                                backgroundColor: isActive ? 'whitesmoke' : null,
                                color: isActive ? 'black' : null
                            }
                        }}
                    >
                    <div className="sidebar__home">
                        <GiCrownCoin size='20px' />
                        <h2>Cryptocurrecy</h2>
                    </div>
                    </NavLink>
                    <NavLink to='/exchange'
                         style={({isActive}) => {
                            return{
                                backgroundColor: isActive ? 'whitesmoke' : null,
                                color: isActive ? 'black' : null
                            }
                        }}
                    >
                    <div className="sidebar__home">
                        <BsCurrencyExchange size='20px' />
                        <h2>Exchange</h2>
                    </div>
                    </NavLink>
                    <NavLink to='/news'
                         style={({isActive}) => {
                            return{
                                backgroundColor: isActive ? 'whitesmoke' : null,
                                color: isActive ? 'black' : null
                            }
                        }}
                    >
                    <div className="sidebar__home">
                        <FaRegNewspaper size='20px' />
                        <h2>News</h2>
                    </div>
                    </NavLink>
                </div>
            </Fade>
        </div>
    )
}

export default Sidebars
