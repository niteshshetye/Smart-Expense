import * as actionTypes from '../actionTypes'


// *************************************************
export const addExpense = (data) => {
    const createdAt= Date.now()
    const newData = {...data, createdAt, id: createdAt  }
    return {
        type: actionTypes.ADD_EXPENSE,
        payload: newData
    }
}
export const expenseAdded = (expense) => {
    return {
        type: actionTypes.EXPENSE_ADDED,
        payload: expense
    }
}
// *************************************************
export const loadExpense = () => {
    return {
        type: actionTypes.LOAD_EXPENSE,
    }
}
export const expenseLoaded = (expenses) => {
    return {
        type: actionTypes.EXPENSE_LOADED,
        payload: expenses
    }
}
// *************************************************
export const deleteExpense = (id) => {
    return {
        type: actionTypes.DELETE_EXPENSE,
        payload: id
    }
}
export const expenseDeleted = (id) => {
    return {
        type: actionTypes.EXPENSE_DELETED,
        payload: id
    }
}
// *************************************************
export const expenseSearch = (query) => {
    return {
        type: actionTypes.SEARCH_EXPENSE,
        payload: query
    }
}
export const searchedExpense = (data) => {
    return {
        type: actionTypes.EXPENSE_SEARCHED,
        payload: data
    }
}
// *************************************************
export const expenseUpdate = data => {
    return {
        type: actionTypes.UPDATE_EXPENSE,
        payload: data
    }
}