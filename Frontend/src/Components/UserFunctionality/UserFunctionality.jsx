import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import Cashwithdraw from '../UserFunctionalityComponenet/Cashwithdraw.jsx';
import Deposit from '../UserFunctionalityComponenet/Deposit.jsx';

const UserFunctionality = () => {
    const { userFunctionality } = useParams();
    if(userFunctionality == 'cashwithdraw'){
        return <Cashwithdraw/>
    } 
    else if(userFunctionality == 'deposit'){
      return <Deposit/>
    }
    else{
      alert("Page not found")
    }

};

export default UserFunctionality;