const InputMoney = () => {
  return (
    <div className="w-full h-28 bg-white rounded-md">
      <div className="flex items-center">
        <div className="flex flex-col">
          <label>Descrição</label>
          <input className="border" />
        </div>
        <div className="flex flex-col">
          <label>Valor</label>
          <input className="border" />
        </div>
        <div className="flex">
          <input type="radio" className="border" />
          <label>Entrada</label>
        </div>
        <div className="flex">
          <input type="radio" className="border" />
          <label>Saída</label>
        </div>
        <button>Adicionar</button>
      </div>
    </div>
  );
};

export default InputMoney;
