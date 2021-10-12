import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {expenseSearch} from '../../redux/actions/expensesAction'

import './search.css'

const Search = () => {
    const {query} = useSelector(state => state.expens)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const {value} = e.target
        dispatch(expenseSearch(value))
    }

    return (
        <div className='search-div'>
            <div className='search-bar'>
                <i className="fi fi-rr-search"></i>
                <input type='text' value={query} onChange={handleChange}  placeholder='Search Here...!' />
            </div>
        </div>
    )
}

export default Search;
