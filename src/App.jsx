import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <div className="w-full h-[200px] bg-emerald-500 flex justify-center">
        <h1 className="text-white font-extrabold font-mono py-8 text-3xl">
          Controle Financeiro
        </h1>
      </div>
      <Card />
    </div>
  );
}

export default App;
