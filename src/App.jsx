import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import "./App.css";
import Card from "./components/Card";
import InputMoney from "./components/inputMoney";
import Finances from "./components/finances";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [finances, setFinances] = useState([]);

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
    <div className="w-screen h-screen">
      <div className="w-full h-[200px] bg-emerald-500 flex justify-center -mb-9 ">
        <h1 className="text-white font-extrabold font-mono py-14 text-3xl ">
          Controle Financeiro
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[900px] h-screen">
          <div className="flex gap-10">
            <Card type="Entradas" icon={<TrendingUp color="green" />} />
            <Card type="Saídas" icon={<TrendingDown color="red" />} />
            <Card type="Total" icon={<Wallet />} />
          </div>
          <br></br>
          <InputMoney onAddFinances={onAddFinances} />
          <br></br>
          <Finances finances={finances} onDeleteFinance={onDeleteFinance} />
        </div>
      </div>
    </div>
  );
}

export default App;
