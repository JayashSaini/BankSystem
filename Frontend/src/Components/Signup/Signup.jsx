import React from "react";
import { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import InputBox from "../index.js";
import { useContext } from "react";
import UserContext from "../../context/UserContextMaker";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);
  const [cityid, setCityid] = useState(0);

  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [username, setUsername] = useState("");
	const [pin, setPin] = useState("");
	const [accountType, setAccountType] = useState("current");
	const [balance, setBalance] = useState("");
	const [mob, setMob] = useState("");
	const [address, setAddress] = useState("");
	const [occupation, setOccupation] = useState("");
	const [country, setCounty] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
  const {
    updateusername,
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

  const navigate = useNavigate();

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  const accTypeChecker = (e) => {
     setAccountType(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");

      return; // Prevent navigation if validation fails
    } else if (pin.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();

      return; // Prevent navigation if validation fails
    } else if (country.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();
      return; // Prevent navigation if validation fails
    } else if (mob.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();

      return; // Prevent navigation if validation fails
    } else if (address.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();

      return; // Prevent navigation if validation fails
    } else if (occupation.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();

      return; // Prevent navigation if validation fails
    } else if (city.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();

      e.preventDefault();
      return; // Prevent navigation if validation fails
    } else if (state.trim() === "") {
      // Display an error message or handle the validation failure
      e.preventDefault();
      console.log("Input field is empty");
      return; // Prevent navigation if validation fails
    } else if (balance.trim() === "") {
      // Display an error message or handle the validation failure
      console.log("Input field is empty");
      e.preventDefault();
      return; // Prevent navigation if validation fails
    }
    else if (pin.length !== 4 || isNaN(pin)) {
      console.log("Pin must be a 4-digit number.");
      e.preventDefault();

      return;
    } else {
     
      console.log(accountNumber)
      const updateFile = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/updateFile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
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
              occupation,
            }),
          });

          if (response.ok) {
            console.log("File updated successfully");
            updateusername(username)
            updateaddress(address)
            updatepin(pin)
            updatebalance(balance)
            updateoccupation(occupation) 
            updatemob(mob);
            updateaccountType(accountType);
            updatecity(city);
            updatestate(state);
            updatecountry(country);
            updateaccountNumber(accountNumber);
          } else {
            console.error("Failed to update file");
          }
        } catch (error) {
          console.error("Error updating file:", error);
        }
      };
      updateFile();
      navigate("/signup/user");
    }
  }; 
  useEffect(() => {
    const min = 1000000000;
    const max = 9999999999;
    setAccountNumber(
      Math.floor(Math.floor(Math.random() * (max - min + 1)) + min),
    );
  }, [])
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 ">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4 text-gray-700 font-bold">
          Create Your Account
        </h2>
        <form
          className="flex flex-wrap justify-between"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:w-1/2 mb-4 pr-2">
            <InputBox
              label="User Name"
              type="text"
              value={username}
              onchange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Name"
            />
            <InputBox
              label="Pin"
              type="password"
              value={pin}
              onchange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
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
                    checked={accountType == "current"}
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
                    checked={accountType == "savings"}
                  />
              </div>
            </div>
            <InputBox
              label="Balance"
              type="number"
              value={balance}
              onchange={(e) => setBalance(e.target.value)}
              placeholder="Enter your balance"
            />
            <InputBox
              label="Mob. No"
              type="number"
              value={mob}
              onchange={(e) => setMob(e.target.value)}
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="w-full md:w-1/2 mb-4 pl-2">
            <div className="mb-4 flex">
              <div>
                <h6 className="block text-sm font-medium text-gray-700">
                  Country
                </h6>
                <select
                  className="mt-1 block w-full rounded  text-sm font-normal text-gray-500 border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200 appearance-none bg-transparent pr-8"
                  onChange={(e) => {
                    const selectedCountry = countriesList[e.target.value];
                    setCountryid(selectedCountry.id);
                    setCounty(selectedCountry.name);
                    GetState(selectedCountry.id).then((result) => {
                      setStateList(result);
                    });
                  }}
                  value={countryid}
                  required
                >
                  {countriesList.map((country, index) => (
                    <option
                      key={country.id}
                      value={index}
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>

                <h6 className="block text-sm font-medium text-gray-700 mt-2">
                  State
                </h6>
                <select
                  className="mt-1 block w-full rounded  text-sm font-normal text-gray-500 border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200 appearance-none bg-transparent pr-8"
                  onChange={(e) => {
                    const selectedStateId = e.target.value; // Get the selected state ID

                    const selectedState = stateList.find((elem) => {
                      return elem.id == selectedStateId;
                    });

                    if (selectedState !== undefined) {
                      // Check if selectedState is defined
                      setStateid(selectedState.id); // Set the state ID
                      setState(selectedState.name);
                      GetCity(countryid, selectedState.id).then((result) => {
                        setCityList(result); // Update cityList with cities of the selected state
                      });
                    }
                  }}
                  required
                  value={stateid}
                >
                  {stateList.map((state) => (
                    <option
                      key={state.id}
                      value={state.id}
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
                <h6 className="block text-sm font-medium text-gray-700 mt-2">
                  City
                </h6>
                <select
                  className="mt-1 block w-full rounded  text-sm font-normal text-gray-500 border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200 appearance-none bg-transparent pr-8"
                  onChange={(e) => {
                    const selectedcity = cityList.find(
                      (elem) => elem.id == e.target.value,
                    );
                    setCityid(selectedcity.id);
                    setCity(selectedcity.name);
                  }}
                  value={cityid}
                  required
                >
                  {cityList.map((city) => (
                    <option
                      key={city.id}
                      value={city.id}
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="2"
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <InputBox
              label="Occupation"
              type="text"
              value={occupation}
              onchange={(e) => setOccupation(e.target.value)}
              placeholder="Enter Your   Occupation "
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
            activeclassname="bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
