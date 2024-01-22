import {useState, useEffect} from 'react';

function App() {
const [currencyOptions, setCurrencyOptions] = useState([])

useEffect(() => {
  fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_zdok13Vm6bcqOwsrbPV1DUqMRcycFLaXtFuyWqEw")
  .then(res => res.json())
  .then(data => {
          const keys = Object.keys(data.data)
          const values = Object.values(data.data)
          for(let value of values){
            console.log(value.value,)
          }
  })
          
}, [])

  return (
    <div className="App">
      <h1 className="">Convert any currency</h1>
      <div>
        <input type="number" />
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
      <div>
        <input type="number" />
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    </div>
  );
}

export default App;
