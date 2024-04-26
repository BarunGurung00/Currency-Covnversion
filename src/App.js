import CurrencyConverter from "./Components/CurrencyConverter";

function App() {
  return (
    <div className="App flex justify-center items-center min-h-screen bg-slate-100">
      <CurrencyConverter />
    </div>
  );
}

export default App;


// https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD
// https://api.frankfurter.app/currencies