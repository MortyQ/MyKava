import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../main_space/Main/Main'
import { Route, BrowserRouter } from 'react-router-dom'
import CounterPage from '../Counter_page/Counter_page'
import SponsorsPage from '../Sponsors_page/Sponsors_page'

const App =()=> {


    return (
        <BrowserRouter>
            <Header />
            <Main />
            <CounterPage />
            <SponsorsPage />
        </BrowserRouter>
    )
}


export default App;