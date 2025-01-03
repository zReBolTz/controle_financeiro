import { useState } from "react";

const InputMoney = (props) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [earningsOrExpenses, setEarningsOrExpenses] = useState("");
  return (
    <div className="w-full h-28 bg-white rounded-md flex items-center justify-around gap-20 p-2">
      <div className="flex flex-col">
        <label>Descrição</label>
        <input
          className="border rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label>Valor</label>
        <input
          className="border rounded-md caret-slate-300"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex gap-3">
        <input
          id="entrada"
          name="type"
          type="radio"
          value="earnings"
          checked={earningsOrExpenses === "earnings"}
          onChange={(e) => setEarningsOrExpenses(e.target.value)}
        />
        <label>Entrada</label>
        <input
          id="saida"
          name="type"
          type="radio"
          value="expenses"
          checked={earningsOrExpenses === "expenses"}
          onChange={(e) => setEarningsOrExpenses(e.target.value)}
        />
        <label>Saída</label>
      </div>

      <button
        className="bg-emerald-500 text-white w-28 h-10 rounded-md"
        onClick={() =>
          props.onAddFinances(description, value, earningsOrExpenses)
        }
      >
        Adicionar
      </button>
    </div>
  );
};

export default InputMoney;
