import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const { deleteTransactions } = useContext(GlobalContext);
  const { text, amount, id } = transaction;
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text} <span>{amount}</span>
      <button className="delete-btn" onClick={()=>deleteTransactions(id)}>
        x
      </button>
    </li>
  );
}
