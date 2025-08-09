import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const Finance = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("income"); // income or expense
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    if (!amount || !date) return alert("Please enter amount and date");

    const newEntry = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      date,
    };

    setEntries([...entries, newEntry]);
    setAmount("");
    setDate("");
  };
  const chartData = entries.reduce((acc, curr) => {
    let day = acc.find((item) => item.date === curr.date);
    if (!day) {
      day = { date: curr.date, income: 0, expense: 0 };
      acc.push(day);
    }
    if (curr.type === "income") day.income += curr.amount;
    else day.expense += curr.amount;
    return acc;
  }, []);

  // Sort chart data by date ascending
  chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Finance Tracker</h2>

      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
      </div>

      <button onClick={addEntry}>Add Entry</button>

      <h3>Entries:</h3>
      <ul>
        {entries.map(({ id, type, amount, date }) => (
          <li key={id}>
            {date} - {type.toUpperCase()}: {amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Chart:</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4caf50"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="expense" stroke="#f44336" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Finance;
