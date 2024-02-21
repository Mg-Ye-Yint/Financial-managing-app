import React from 'react';
import ExpenseTracer from './components/ExpenseTracer';
import Balance from './components/Balance';
import './App.css';
import IncomeAndExpenses from './components/IncomeAndExpenese';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/NewTransaction';
import { GlobalProvider } from './context/GlobalState';

export default function ETracker(){
  return(
    <GlobalProvider>
      <div className="bigcontainer">
      <ExpenseTracer/>
      <div className="container">
      <Balance/>
      <div className = "inc-exp-container">
      <IncomeAndExpenses/>
      </div>
      <TransactionList/>
      <AddNewTransaction/>
      </div>
      </div>
    </GlobalProvider>
  )
}


