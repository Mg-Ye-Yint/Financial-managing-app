import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function AddNewTransaction() {
   
    const [ text, setText ] = useState("");
    const [amount, setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext);

   const onSubmit = e => {
      e.preventDefault();

       const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
       }

       addTransaction(newTransaction)
   }

    return (
        <div>
          <h3>Add new transaction</h3>
       <form onSubmit={onSubmit}>
         <div className="form-control">
           <label for="text">Text</label>
           <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
         </div>
         <div className="form-control">
           <label for="amount"
             >{amount}<br />
             (negative - expense, positive - income)</label
           >
           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
         </div>
         <button>Add transaction</button>
       </form>
        </div>
     )
}
    
