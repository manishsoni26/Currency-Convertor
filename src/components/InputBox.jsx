import React,{useId} from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency='usd',
    amountDisable=false,
    currencyDisable=false,
    className=""
    })
    {
    const amountInputId=useId()//generate unique random output for assingning uniqueId
    return (
        <div className={`bg-white p-3 rounded-lg text-md flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-slate-400 mb-2 p-1.5 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className=" w-full rounded-lg p-1.5 bg-transparent focus:outline-none "
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    min="0"
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex-row text-right ">
                <p className="text-black/40 mb-4 w-full p-1">Currency Type</p>
                <select 
                    className=" rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default InputBox