import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { useContext,useState } from 'react';
import UserContext from '../../context/UserContextMaker';
const Deposit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [deposit, setDeposit] = useState(0);
    const {balance, updatebalance, accountNumber} = useContext(UserContext);
   
    const transactionhandler = async (e)=>{
        e.preventDefault();
        try{
          
          const RemainingAmount = parseInt(balance) + parseInt(deposit);
          console.log(RemainingAmount)
          if(RemainingAmount < 0){
            throw new Error("Transition Failed : You can't withdraw extra money")
          }
          else{
            updatebalance(RemainingAmount);
            const response = await fetch('http://localhost:5000/api/cashtransition',{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                RemainingAmount,
                accountNumber,
              }),
            })
            if(!response.ok){
              navigate(location.pathname+'/failed')
              return response.text().then(errorMsg => {
                throw new Error(errorMsg); // Throw an error with the error message from the server
              });
            }
            else{
              navigate(location.pathname+'/successful')
            }
          }
        }catch (error) {
          console.error("Error :", error);
        }
  
      }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-5">
    <div className="w-80 bg-gray-100 p-4 rounded-lg">
    <h1 className="text-xl font-bold mb-4 text-gray-700 text-left capitalize">Deposit</h1>
    <form
    onSubmit={transactionhandler}>
    <label htmlFor="pin" className="block mt-1 text-sm font-medium text-gray-700 text-left">
      Amount
    </label>
    <input
      type="number"
      id="amount"
      className="mt-1 block p-1 w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
      placeholder="Enter your amount"
      value={deposit}
      onChange={(e)=> setDeposit(e.target.value)}
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

export default Deposit