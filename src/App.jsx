import { useState, useEffect } from "react";
import AddExpense from "./components/addExpensive";
import Balance from "./components/Balance";
import AddMember from "./components/addMember";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem("members");
    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const clearAllData = () => {
    if (window.confirm("Clear all members and expenses?")) {
      setMembers([]);
      setExpenses([]);
      localStorage.removeItem("members");
      localStorage.removeItem("expenses");
    }
  };

  const clearMonthlyExpenses = () => {
    if (window.confirm("Clear only this month's expenses?")) {
      setExpenses([]);
      localStorage.removeItem("expenses");
    }
  };

  return (
    <div className="app-container">
      <h1>Room Expense Split App</h1>

      <div className="box">
        <AddMember members={members} setMembers={setMembers} />

        <AddExpense
          members={members}
          expenses={expenses}
          setExpenses={setExpenses}
        />

        <Dashboard members={members} expenses={expenses} />

        <Balance members={members} expenses={expenses} />

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button onClick={clearMonthlyExpenses}>
            📅 Clear Monthly Expenses
          </button>

          <button onClick={clearAllData}>
            🧹 Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
