import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import Card from './Card'

import {loadExpense} from '../../redux/actions/expensesAction'

import './expenseList.css'

const ExpenseList = () => {
    const dispatch = useDispatch()
    const {expensList, query, searchList} = useSelector(state => state.expens)

    useEffect(()=>{
        dispatch(loadExpense())
    },[dispatch,query])

    return (
        <div>
            {
                searchList.length? (
                    searchList.map(item => 
                        <div key={item.id}>
                            <Card key={item.id} item={item} />
                        </div>
                    )
                ): expensList.length? (
                    expensList.map(item => 
                        <div key={item.id}>
                            <Card key={item.id} item={item} />
                        </div>
                    )
                ):(
                    <div className='empty-expens-list'> 
                        <img src={require('../../assets/images/empty.png').default} alt='empty' />
                        <label>Uh Oh! Your expense list is empty </label>
                    </div>
                )
            }
            
            
        </div>
    )
}

export default ExpenseList

// {
//     !query && expensList.length? (
//         expensList.map(item => 
//             <div key={item.id}>
//                 <Card key={item.id} item={item} />
//             </div>
//         )
//     ):(
//         <div className='empty-expens-list'> 
//             <img src={require('../../assets/images/empty.png').default} alt='empty' />
//             <label>Uh Oh! Your expense list is empty </label>
//         </div>
//     )
// }