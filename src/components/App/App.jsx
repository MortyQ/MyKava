import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../main_space/Main/Main'
import { Route, BrowserRouter } from 'react-router-dom'

const App =()=> {


    return (
        <BrowserRouter>
            <Header />
            <Main />

        </BrowserRouter>
    )
}


export default App;