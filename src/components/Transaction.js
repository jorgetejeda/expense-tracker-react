import React from "react";

export default function Transaction({transaction}) {
  const { text, amount, id } = transaction;
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text} <span>{amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
}
