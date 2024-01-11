import React from 'react';
import { useContext } from 'react'
 import UserContext from '../../context/UserContextMaker';
 import { useNavigate, useLocation } from 'react-router-dom'
const BankSystemUI = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {username,accountNumber} = useContext(UserContext);
  const CashwithdrawHandler = () =>{
   navigate(`${location.pathname}/cashtransition/cashwithdraw`);
  }
  const depositHandler = () =>{
   navigate(`${location.pathname}/cashtransition/deposit`);
  }
  const balanceHandler = () =>{
   navigate(`${location.pathname}/checkbalance`);
  }
  const transferHandler = () =>{
   navigate(`${location.pathname}/transfercash`);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg mt-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {username}</h1>

        <div className="mb-8">
          <p className="text-lg font-semibold mb-2">Account Number: {accountNumber}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <button onClick={CashwithdrawHandler}className=" p-1 w-full  bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Cash Withdraw
            </button>
          </div>
          <div>
            <button 
            onClick={depositHandler}
            className="p-1 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Deposit
            </button>
          </div>
          <div>
            <button 
            onClick={balanceHandler}
            className="p-1 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Check Balance
            </button>
          </div>
          <div>
            <button 
            onClick={transferHandler}
            className="p-1 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankSystemUI;
