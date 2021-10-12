import React from 'react'
import './card.css'
import moment from 'moment'
// import { useHistory } from 'react-router'

import { useDispatch } from 'react-redux'
import {deleteExpense, loadExpense} from '../../redux/actions/expensesAction'



const Card = ({item}) => {
    const {amount, catergory, createdAt, title, id} = item
    const category = JSON.parse(catergory)
    const time = moment(createdAt).fromNow()
    const dispatch = useDispatch()
    // const history = useHistory()

    // const handleEdit = (id) => {
    //     console.log('handleEdit id', id)
    //     // dispatch(editExpense(id))
    //     // history.push('/expense')
    // }

    const handleDelete = (id) => {
        dispatch(deleteExpense(id))
        dispatch(loadExpense())
    }
    return (
        <div className='card-div' style={{borderRight: `6px solid ${category.color}`}}>
            <div className='card-content'>
                <div className='card-image'>
                    <img src={category.icon.default} alt={category.key} />
                </div>
                <div className='card-title'>
                    <h3 className='card-label'>{title}</h3>    
                    <h6 >{time}</h6>
                </div>
            </div>
            <div className='card-opration'>
                <label className='card-label'>₹ {amount}</label>
                {
                    // <button className='btn-edit' onClick={() => handleEdit(id)}><i className="fi fi-rr-edit"></i></button>
                }
                <button className='btn-delete' onClick={() => handleDelete(id)}><i className="fi fi-rr-trash"></i></button>
            </div>
        </div>
    )
}

export default Card
