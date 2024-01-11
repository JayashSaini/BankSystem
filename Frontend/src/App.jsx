import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Signin from "./Components/SignIn/Signin.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import User from "./Components/User/User.jsx";
import UserContextProvider from "./context/UserDetContext.jsx";
import UserFunctionality from "./Components/UserFunctionality/UserFunctionality.jsx";
import Checkbalance from "./Components/UserCheckBalance/Checkbalance.jsx";
import CashTransfer from "./Components/UserCashTransfer/CashTransfer.jsx";
import TrasactionComplete from "./Components/TrasactionComplete/TrasactionComplete.jsx";
import Error from "./Components/PageNotFound404/Error.jsx";
// Define routes using Routes and Route components
const App = () => {
  return (
    <React.StrictMode>
      <UserContextProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />}/>
          <Route path="signin/user" element={<User />}/>
          <Route path="signin/user/checkbalance" element={<Checkbalance />} />
          <Route path="signin/user/transfercash" element={<CashTransfer />} />
          <Route path="signin/user/transfercash/:transitionstatus" element={<TrasactionComplete />} />
          <Route path="signin/user/cashtransition/:userFunctionality" element={<UserFunctionality />} />
          <Route path="signin/user/cashtransition/:userFunctionality/:transitionstatus" element={<TrasactionComplete />} />
          
          <Route path="signup" element={<Signup />}/>
          <Route path="signup/user" element={<User />}/>
          <Route index element={<Checkbalance />} />
          <Route path="signup/user/checkbalance" element={<Checkbalance />} />
          <Route path="signup/user/transfercash" element={<CashTransfer />} />
          <Route path="signup/user/transfercash/:transitionstatus" element={<TrasactionComplete />} />
          <Route path="signup/user/cashtransition/:userFunctionality" element={<UserFunctionality />} />
          <Route path="/signup/user/cashtransition/:userFunctionality/:transitionstatus" element={<TrasactionComplete />} />
           
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </React.StrictMode>
  );
};

export default App;
