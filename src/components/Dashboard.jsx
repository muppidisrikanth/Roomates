const DashBoard = ({ members, expenses }) => {
  const totalMembers = members.length;

  const totalExpense = expenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  const totalTransactions = expenses.length;

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="dashboard">
        <div className="card card-members">
          <h3>👥 Members</h3>
          <p>{totalMembers}</p>
        </div>

        <div className="card card-expense">
          <h3>💸 Total Expense</h3>
          <p>₹{totalExpense}</p>
        </div>

        <div className="card card-transactions">
          <h3>🧾 Transactions</h3>
          <p>{totalTransactions}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
