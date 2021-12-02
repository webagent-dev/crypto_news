import React from 'react'
import './App.css'
import Container from './comps/Container'
import Sidebars from './comps/sidebars/Sidebars'

function App() {
    return (
        <div className="appContainer">
        <Sidebars />
         <Container /> 
        </div>
    )
}

export default App
