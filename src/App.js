import React, { Component } from 'react'

// Routes
import {Switch, Route, BrowserRouter} from 'react-router-dom'

// css
import './App.css'

// components
import NavBar from './components/NavBar/index'
import Home from './pages/Home'
import Expense from './pages/Expense'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/expense'>
                        <Expense />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
