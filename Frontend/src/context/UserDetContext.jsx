import React, {  useState, useContext } from 'react';
import UserContext from './UserContextMaker';


const UserContextProvider = function( {children} ){

    const [username, setUsername] = useState("");
	const [pin, setPin] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [accountType, setAccountType] = useState("current");
	const [balance, setBalance] = useState(0);
	const [mob, setMob] = useState("");
	const [country, setCountry] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [occupation, setOccupation] = useState("");

  // update Values
	const updateaccountNumber = (value) => {
		setAccountNumber(value);
	};
	const updateusername = (value) => {
		setUsername(value);
	};
	const updateaccountType = (value) => {
		setAccountType(value);
	};
	const updatepin = (value) => {
		setPin(value);
	};
	const updatemob = (value) => {
		setMob(value);
	};
	const updatebalance = (value) => {
		setBalance(value);
	};
	const updatecountry = (value) => {
		setCountry(value);
	};
	const updatestate = (value) => {
		setState(value);
	};
	const updatecity = (value) => {
		setCity(value);
	};
	const updateaddress = (value) => {
		setAddress(value);
	};
	const updateoccupation = (value) => {
		setOccupation(value);
	};
	

    return (
		 <UserContext.Provider 
	value={{updateusername,
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
		 	occupation}}
		>
		 { children }
		</UserContext.Provider>
	  );
}

export default UserContextProvider;