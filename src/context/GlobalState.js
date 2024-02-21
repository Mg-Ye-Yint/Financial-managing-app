import React, {createContext, useReducer} from "react"
import AppRender from "./AppRender.js";

const initialState = {
    transactions: [
        ]
  }


  
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppRender, initialState);

    function deleteTransaction(id) {
       dispatch ({
        type: 'DELETE_TRANSACTION',
        payload: id
       });
    }

    function addTransaction(transactions) {
        dispatch ({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }

    return(
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
        </GlobalContext.Provider>
    )


}