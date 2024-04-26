import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import CurrencyList from "./DropDowns.js";

export default function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState();

  const [result, setResult] = useState();

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");

  // Fetching currencies from API
  const fetchCurrencies = async () => {
    try {
      const response = await fetch("https://api.frankfurter.app/currencies");
      const data = await response.json();
      //Convert the objects into array of currency codes
      setCurrencies(Object.keys(data));
    } catch (err) {
      console.log(err);
    }
  };

  // Swapping the currencies
  const swapCurrency = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }

  // Main convertor function
  const convertCurrency = async () => {
     if(!amount) return;

     const curr = amount;
     const response = await fetch(`https://api.frankfurter.app/latest?amount=${curr}&from=${fromCurrency}&to=${toCurrency}`);
     const data  = await response.json();

     const result = data.rates[toCurrency];
        setResult(result);
  }

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white my-10 rounded-lg shadow-md">
      <h1 className="text-2xl my-2 text-center">Currency Convertor</h1>

      <div>
        <CurrencyList
          currencies={currencies}
          title={"From:"}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        
        <div className="text-center">
          <button onClick={swapCurrency} className="bg-gray-200 rounded-full p-1 mt-1 hover:bg-gray-300">
            <FaArrowRightArrowLeft />
          </button>
        </div>
        <CurrencyList
          currencies={currencies}
          title={"To:"}
          currency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e)=> {setAmount(e.target.value)}}
          className="p-1 ml-1 border rounded-sm border-gray-200"
        />
      </div>
      <div className="flex justify-end">
        <button onClick={convertCurrency} className="m-1 border border-gray-400 rounded-l p-1 text-white bg-lime-800">
          Convert
        </button>
      </div>
      <div className="text-sm text-lime-800 text-center">{result && <p>The Current rate is {result}</p>}</div>
    </div>
  );
}
