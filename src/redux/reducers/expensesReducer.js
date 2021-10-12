import {EXPENSE_ADDED, EXPENSE_LOADED, EXPENSE_DELETED, SEARCH_EXPENSE, EXPENSE_SEARCHED} from '../actionTypes'

const initialState = {
    expensList: [],
    query: '',
    searchList: []
}

export const expensesReducer = (state = initialState , action) => {
    switch (action.type) {
        case EXPENSE_ADDED:
            return {
                ...state,
                expensList: [...state.expensList, action.payload]
            }
        case EXPENSE_LOADED:
            return {
                ...state,
                expensList: action.payload
            }
        case EXPENSE_DELETED:
            return {
                ...state,
                expensList: action.payload
            }
        case SEARCH_EXPENSE:
            return {
                ...state,
                query: action.payload
            }
        case EXPENSE_SEARCHED:
            if (state.query === '') {
                return {
                    ...state,
                    searchList: []  
                }
            } else{
                return {
                    ...state,
                    searchList: action.payload
                }
            }
        default:
            return state
    }
}