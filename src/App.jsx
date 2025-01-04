import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import "./App.css";
import Card from "./components/Card";

import Finances from "./components/finances";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AddFinance from "./components/AddFinance";

function App() {
  const [finances, setFinances] = useState(
    JSON.parse(localStorage.getItem("@transactions")) || []
  );
  useEffect(() => {
    localStorage.setItem("@transactions", JSON.stringify(finances));
  }, [finances]);
  const [earnings, setEarnings] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const amountIncome = finances
      .filter((item) => {
        return item.earningsOrExpenses === "earnings";
      })
      .map((transaction) => transaction.value);
    const newAmountIcome = amountIncome
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);
    setEarnings(newAmountIcome);

    const AmountExpenses = finances
      .filter((item) => {
        return item.earningsOrExpenses === "expenses";
      })
      .map((expenses) => expenses.value);
    const newAmountExpenses = AmountExpenses.reduce(
      (acc, cur) => acc + cur,
      0
    ).toFixed(2);
    setExpenses(newAmountExpenses);

    const newTotal = newAmountIcome - newAmountExpenses;
    setTotal(newTotal);
  }, [finances]);

  function onAddFinances(description, value, earningsOrExpenses) {
    const newFinances = {
      id: v4(),
      description: description,
      value: value,
      earningsOrExpenses: earningsOrExpenses,
    };

    setFinances([...finances, newFinances]);
  }

  function onDeleteFinance(financeId) {
    const newFinance = finances.filter((item) => {
      return financeId != item.id;
    });
    setFinances(newFinance);
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-[200px] bg-emerald-500 flex justify-center -mb-9 ">
        <h1 className="text-white font-extrabold font-mono py-14 text-3xl ">
          Controle Financeiro
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[900px] h-screen">
          <div className="flex gap-10">
            <Card
              type="Entradas"
              icon={<TrendingUp color="green" />}
              amount={earnings}
            />
            <Card
              type="Saídas"
              icon={<TrendingDown color="red" />}
              amount={expenses}
            />
            <Card type="Total" icon={<Wallet />} amount={total} />
          </div>
          <br></br>
          <AddFinance onAddFinances={onAddFinances} />
          <br></br>
          <Finances finances={finances} onDeleteFinance={onDeleteFinance} />
        </div>
      </div>
    </div>
  );
}

export default App;
