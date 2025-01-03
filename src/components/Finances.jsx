import { Trash2Icon } from "lucide-react";

const Finances = () => {
  return (
    <div className="w-full min-h-[100px] bg-white rounded-md flex flex-col">
      <div className="flex pt-4 ml-5 font-bold">
        <span className="w-[500px]">Descrição</span>
        <span className="w-[400px]">Valor</span>
        <span className="w-[200px]">Tipo</span>
      </div>
      <hr className="w-full border-slate-300 pt-2" />
      <div className="ml-5 flex ">
        <span className="w-[500px]">Restaurante</span>
        <span className="w-[400px]">20000</span>
        <div className="w-[200px] flex justify-between">
          <span>Tipo</span>
          <button className="mr-8 w-8 text-white bg-emerald-500 rounded-md flex justify-center items-center">
            <Trash2Icon className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finances;
