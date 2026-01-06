import React, { useState } from "react";

const AddExpense = ({ members, expenses, setExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const addExpense = () => {
    if (title === "" || amount === "" || paidBy === "") {
      alert("Please enter expense name, amount and paid by");
      return;
    }

    const newExpense = {
      id: Date.now(), // UNIQUE ID (IMPORTANT)
      title: title,
      amount: Number(amount),
      paidBy: paidBy,
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
    setPaidBy("");
  };

  // 🔴 DELETE FUNCTION
  const deleteExpense = (id) => {
    const ok = window.confirm("Delete this expense?");
    if (ok) {
      const updatedExpenses = expenses.filter((exp) => exp.id !== id);
      setExpenses(updatedExpenses);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense name (Milk, Rent...)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
      >
        <option value="">Paid By</option>
        {members.map((member, index) => (
          <option key={index} value={member}>
            {member}
          </option>
        ))}
      </select>

      <button onClick={addExpense}>Add Expense</button>

      {/* EXPENSE LIST */}
      <ul>
        {expenses.length === 0 && (
          <li style={{ opacity: 0.6 }}>No expenses yet 💸</li>
        )}

        {expenses.map((exp) => (
          <li
            key={exp.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              🧾 {exp.title} – ₹{exp.amount} (paid by {exp.paidBy})
            </span>

            <button
              onClick={() => deleteExpense(exp.id)}
              style={{
                background: "#ff4d4f",
                padding: "4px 10px",
                fontSize: "12px",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddExpense;
