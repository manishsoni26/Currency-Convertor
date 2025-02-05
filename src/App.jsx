import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { ArrowDownUp } from 'lucide-react';

function App() {
  const [amount,setAmount]=useState(0)
  const [from ,setFrom]=useState("usd")
  const [to ,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const [isSwapping,setIsSwapping]=useState(false)

  const options=currencyInfo ? Object.keys(currencyInfo):[]
  const swap=()=>{
    setIsSwapping(true)
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  useEffect(()=>{
    if ( currencyInfo && currencyInfo[to]) {
      if(!isSwapping)
      setConvertedAmount((amount * currencyInfo[to]).toFixed(3));
    else
      setIsSwapping(false)
    }
    
  },[amount,from,to,currencyInfo,isSwapping])

  // const convert=()=>setConvertedAmount(Math.round(amount*currencyInfo[to]))
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center  lg:bg-cover bg-no-repeat "
        style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_1280.jpg)`
        }}
    >
        <div className="w-full">
            <div className="text-5xl font-extrabold   mb-3 flex justify-center flex-col lg:flex-row items-center">
            <h1 className="text-red-500">CURRENCY </h1>
            <h1 className="text-slate-300">CONVERTOR</h1>

            </div>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className="font-bold text-xl text-center text-slate-300 lg:text-slate-600 shadow-text-shadow mb-3">Converting {from.toUpperCase()} To {to.toUpperCase()}</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                            border-2 border-white rounded-md bg-red-500 text-white px-2 py-0.5 w-10 h-7"
                            onClick={swap}
                            >
                            <ArrowDownUp className="h-4"/>
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                             label="To"
                             amount={convertedAmount}
                             currencyOptions={options}
                             onCurrencyChange={(currency)=>setTo(currency)}
                             selectCurrency={to}
                             amountDisable
                            
                        />
                    </div>
                    {/* <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert  {from.toUpperCase()} to {to.toUpperCase()}
                    </button> */}
                </form>
            </div>
        </div>
    </div>
)
}

export default App
