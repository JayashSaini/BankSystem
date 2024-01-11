import React, { useState } from 'react';
import InputBox from '../Inputbox';
import { useContext } from "react";
import UserContext from "../../context/UserContextMaker";
import { useNavigate } from "react-router-dom";


    const Signin = () => {
      
      const navigate = useNavigate()
  const [usernamec, setUsername] = useState('')
  const [pinc, setPin] = useState('')
  const [accountTypec, setAccountType] = useState('')
  const [accountNumberc,setAccountNumber] =useState('');

  const {updateusername,
    updateaccountNumber,
    updateaccountType,
        updateaddress,
        updatebalance,
        updatecity,
        updatecountry,
        updatemob,
        updatepin,
        updatestate,
        updateoccupation,
      } = useContext(UserContext);


  const accTypeChecker=(e)=>{
    setAccountType(e.target.value);
  }

  const handlesubmit = async (e)=>{
    e.preventDefault();

    fetch(`http://localhost:5000/api/userData/${pinc}/${accountNumberc}`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("Network error")
      }
      else{
        return res.json()
      }
    })
    .then((res)=>{
      const {
        username,
        pin,
        accountNumber,
        accountType,
        balance,
        mob,
        country,
        state,
        city,
        address,
         occupation} = res;
         updateaccountNumber(accountNumber)
         updateusername(username)
         updatepin(pin)
         updateaccountType(accountType)
         updatebalance(balance)
         updatemob(mob)
         updatecountry(country)
         updatestate(state)
         updatecity(city)
         updateaddress(address)
         updateoccupation(occupation)
         navigate('/signin/user')
    })
    .catch(error => {
      console.error('Fetch Error:', error);
      alert(error)
  })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-80 bg-gray-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 text-left">Sign In</h1>
        <form onSubmit={handlesubmit}>
        <InputBox
              label="User Name"
              type="text"
              value={usernamec}
              onchange={(e)=>setUsername(e.target.value)}
              placeholder="Enter your Name"
            />
            <InputBox
              label="Pin"
              type="password"
              value={pinc}
              onchange={(e)=>setPin(e.target.value)}
              placeholder="Enter PIN"
            />
          <label htmlFor="pin" className="block mt-1 text-sm font-medium text-gray-700 text-left">
          Account Number
        </label>
        <input
          type="number"
          id="Acnumber"
          name="Acnumber"
          className="mt-1 block p-1 w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter PIN"
          value={accountNumberc}
          onChange={(e)=> setAccountNumber(e.target.value)}
        />
        <label className="block text-sm  mt-1 font-medium text-gray-700 text-left">
          Account Type
        </label>

        <div>
                <label className="inline-flex items-center mt-2">
                 
                  <span className="ml-2">Current</span>
                </label>
                <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-500"
                    name="accountType"
                    value="current"
                    onChange={(e) => {
                      accTypeChecker(e);
                    }}
                    checked={accountTypec == "current"}
                  />
                <label className="inline-flex items-center ml-6 mt-2">
                  
                  <span className="ml-2">Savings</span>
                </label>
                <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-500"
                    name="accountType"
                    value="savings"
                    onChange={(e) => {
                      accTypeChecker(e);
                    }}
                    checked={accountTypec == "savings"}
                  />
              </div>

        <div className="mt-4">
          <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signin
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Signin;
