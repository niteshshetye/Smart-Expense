import React from 'react'

import Topfold from '../../components/Topfold'
import FormExpense from '../../components/FormExpense'

import './expense.css'
const Expense = () => {
    return (
        <div className='expense-div'>
            <Topfold />
            <div className='expense-form'>
                <FormExpense /> 
            </div>
        </div>
    )
}

export default Expense;
