const Balance = ({ members, expenses }) => {
  const balances = {};

  members.forEach((m) => {
    balances[m] = 0;
  });

  expenses.forEach((exp) => {
    const share = exp.amount / members.length;

    members.forEach((m) => {
      if (m === exp.paidBy) {
        balances[m] += exp.amount - share;
      } else {
        balances[m] -= share;
      }
    });
  });

  const debtors = [];
  const creditors = [];

  Object.keys(balances).forEach((person) => {
    if (balances[person] < 0) {
      debtors.push({ name: person, amount: -balances[person] });
    } else if (balances[person] > 0) {
      creditors.push({ name: person, amount: balances[person] });
    }
  });

  const settlements = [];

  let i = 0,
    j = 0;

  while (i < debtors.length && j < creditors.length) {
    const pay = Math.min(debtors[i].amount, creditors[j].amount);

    settlements.push(
      `${debtors[i].name} should pay ₹${pay} to ${creditors[j].name}`
    );

    debtors[i].amount -= pay;
    creditors[j].amount -= pay;

    if (debtors[i].amount === 0) i++;
    if (creditors[j].amount === 0) j++;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Balance Summary</h2>

      <ul>
        {Object.keys(balances).map((person) => {
          const value = balances[person];
          return (
            <li
              key={person}
              className={value >= 0 ? "balance-positive" : "balance-negative"}
            >
              {person} : ₹{value}
            </li>
          );
        })}
      </ul>

      <h3>Who Pays Whom</h3>

      <ul>
        {settlements.length === 0 ? (
          <li className="settlement">All settled 🎉</li>
        ) : (
          settlements.map((s, index) => (
            <li key={index} className="settlement">
              {s}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Balance;
