import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  useEffect(()=>{},[text, amount]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransactions } = useContext(GlobalContext);
  //FIXME: Clear inputs after submit 🔥
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransactions = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount, //Change string to number 😜
    };

    //Pass transaction into our addtrasaction inside context
    //getting error cuz we need to change amount to number type 🤦🏼‍♂️
    addTransactions(newTransactions);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            defaultValue={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
