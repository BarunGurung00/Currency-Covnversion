import React from 'react'
import { CiStar } from "react-icons/ci";

const DropDowns = ({
    currencies,
    title,
    currency,
    setCurrency
}) => {
  return (
    <div className="mb-2 relative">
       <label className="block">{title}</label>
       <select value={currency} onChange={(e)=>{setCurrency(e.target.value)}} className="w-full p-2 bg-gray-200 rounded-sm shadow-sm focus:outline-none hover:ring-2 hover:ring-lime-800">
         {currencies.map((currency)=> {
             return <option key={currency} value={currency}>{currency}</option>}
         )}
       </select>
        <button className="absolute right-6 bottom-3">
            <CiStar></CiStar>
        </button>
    </div>
  )
}

export default DropDowns
