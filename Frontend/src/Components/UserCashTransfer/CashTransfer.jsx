import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContextMaker';
const CashTransfer = () => {
    const [ raccountNumber ,setRaccountNumber]= useState('');
    const [amount,setAmount] = useState("");
    const navigate = useNavigate();
    const {updatebalance,accountNumber,balance} = useContext(UserContext);
    const [transitionstatus,setTransitionStatus] = useState('failed');
    const transactionhandler = async (e)=>{
          e.preventDefault();

          try{
            const response = await fetch(`http://localhost:5000/api/cashtransition/transfer/${raccountNumber}`)
            console.log(response)
            console.log(raccountNumber)
            if(response.ok){
              const receiverbalance = await response.json()
              let  rbalance = parseInt(await receiverbalance.balance)
              const RemainingAmount = balance - amount;
              console.log(RemainingAmount)
              if(RemainingAmount > 0){
                  updatebalance((prev)=>prev-amount);
                  rbalance = parseInt(rbalance) + parseInt(amount);
                  const response2 = await fetch('http://localhost:5000/api/cashtransition',{
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    RemainingAmount,
                    accountNumber,
                  }),
                })
                if(!response2.ok){
                  navigate(location.pathname+'/'+transitionstatus)
                  return response2.text().then(errorMsg => {
                    throw new Error(errorMsg); // Throw an error with the error message from the server
                  });
                }
                else{
                  console.log(rbalance)
                  console.log(raccountNumber)
                      const response3 = await fetch('http://localhost:5000/api/cashtransition',{
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          rbalance,
                          raccountNumber,
                        }),
                      })
                      if(!response3.ok){
                        navigate(location.pathname+'/'+transitionstatus)
                        return response3.text().then(errorMsg => {
                          throw new Error(errorMsg); // Throw an error with the error message from the server
                        });
                      }
                      else{
                        await setTransitionStatus('successful');
                        navigate(location.pathname+'/successful')
                      }
                }
              }
              else{
                throw new Error("You can't send Extra money");
              }
            }
            else{
              return response.text().then(errorMsg => {
                throw new Error(errorMsg); // Throw an error with the error message from the server
              });
            }
          }
          catch(error){
            console.log("Error Found"+error)
          }
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-5">
        <div className="w-80 bg-gray-100 p-4 rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-gray-700 text-left capitalize">Cash Transfer</h1>
        <form 
          onSubmit={transactionhandler}>
        <label htmlFor="Amount" className="block mt-1 text-sm font-medium text-gray-700 text-left">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="mt-1 block p-1 w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your amount"
          value={amount}
          onChange={(e)=> setAmount(e.target.value)}
        />
        <label htmlFor="pin" className="block mt-1 text-sm font-medium text-gray-700 text-left">
          Receiver Account Number
        </label>
        <input
          type="number"
          id="amount"
          className="mt-1 block p-1 w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter Receiver Account Number"
          value={raccountNumber}
          onChange={(e)=> setRaccountNumber(e.target.value)}
        />
        
         <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Transaction
          </button>
          </form>
        </div>
    </div>
  )
}

export default CashTransfer