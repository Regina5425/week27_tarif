import "./App.css";
// import Form from "./Form";
import FormikForm from "./FormikForm";
import TarifCard from "./tarifCard";
import tarifs from "./tarifs";

function App() {
  return (
    <>
      <div className='app'>
        {tarifs.map((tarif) => (
          <TarifCard
            key={tarif.price}
            price={tarif.price}
            traffic={tarif.traffic}
          />
        ))}
      </div>
			<div style={{marginTop: '20px', marginBottom: '20px'}}>
				<FormikForm/>
			</div>
    </>
  );
}

export default App;
