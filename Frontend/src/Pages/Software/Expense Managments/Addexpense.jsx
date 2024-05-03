import React, { useState } from "react";

function AddExpensePage() {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");

  const handleAddExpense = () => {
    console.log("Amount:", amount);
    console.log("Date:", date);
    console.log("Item:", item);
    setAmount("");
    setDate("");
    setItem("");
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <div>
        <label htmlFor="amount">Enter Amount(Rs):</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default AddExpensePage;
