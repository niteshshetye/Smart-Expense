import React from 'react'
import './home.css'


import Topfold from '../../components/Topfold'
import ExpenseList from '../../components/ExpenseList'
const Home = () => {

    return (
        <div className='main-container'>
            <Topfold />
            <ExpenseList />
        </div>
    )
}


export default Home
