const Finances = () => {
  return (
    <div className="w-full min-h-[100px] bg-white rounded-md flex flex-col">
      <div className="flex pt-4 ml-5">
        <span className="w-[500px]">Descrição</span>
        <span className="w-[400px]">Valor</span>
        <span className="w-[200px]">Tipo</span>
      </div>
      <hr className="w-full border-slate-300 " />
      <div className="ml-5 flex ">
        <span className="w-[500px]">Restaurante</span>
        <span className="w-[400px]">20000</span>
        <div className="w-[200px]">
          <span>Tipo</span>
          <span>oioio</span>
        </div>
      </div>
    </div>
  );
};

export default Finances;
