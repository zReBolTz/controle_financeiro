import { Trash2Icon } from "lucide-react";

const Finances = (props) => {
  return (
    <div className="w-full min-h-[100px] bg-white rounded-md flex flex-col">
      <div className="flex pt-4 ml-5 font-bold">
        <span className="w-[500px]">Descrição</span>
        <span className="w-[400px]">Valor</span>
        <span className="w-[200px]">Tipo</span>
      </div>
      <hr className="w-full border-slate-300 pt-2" />
      <ul>
        {props.finances.map((item) => (
          <li key={item.id} className="ml-5 flex pt-3">
            <span className="w-[500px]">{item.description}</span>
            <span className="w-[400px]">{item.value}</span>
            <div className="w-[200px] flex justify-between">
              <span>{item.earningsOrExpenses}</span>
              <button
                className="mr-8 w-8 text-white bg-emerald-500 rounded-md flex justify-center items-center"
                onClick={() => props.onDeleteFinance(item.id)}
              >
                <Trash2Icon className="w-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Finances;
