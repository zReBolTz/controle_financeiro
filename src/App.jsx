import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import "./App.css";
import Card from "./components/Card";
import InputMoney from "./components/inputMoney";
import Finances from "./components/finances";

function App() {
  return (
    <div>
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
          <InputMoney />
          <br></br>
          <Finances />
        </div>
      </div>
    </div>
  );
}

export default App;
