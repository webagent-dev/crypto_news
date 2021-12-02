import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'



ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root'))