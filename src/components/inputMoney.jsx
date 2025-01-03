const InputMoney = () => {
  return (
    <div className="w-full h-28 bg-white rounded-md flex items-center justify-around gap-20 p-2">
      <div className="flex flex-col">
        <label>Descrição</label>
        <input className="border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label>Valor</label>
        <input className="border rounded-md caret-slate-300" />
      </div>
      <div className="flex gap-3">
        <input id="entrada" name="type" type="radio" value="entrada" />
        <label>Entrada</label>
        <input id="saida" name="type" type="radio" value="saida" />
        <label>Saída</label>
      </div>

      <button className="bg-emerald-500 text-white w-28 h-10 rounded-md">
        Adicionar
      </button>
    </div>
  );
};

export default InputMoney;
