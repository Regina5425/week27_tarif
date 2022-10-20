import "./App.css";
import TarifCard from "./tarifCard";
import tarifs from "./tarifs";

function App() {
  return (
    <div className='app'>
      {tarifs.map((tarif) => (
        <TarifCard key={tarif.price} price={tarif.price} traffic={tarif.traffic} />
      ))}
    </div>
  );
}

export default App;
