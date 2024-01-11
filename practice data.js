const handlesubmit = async (e)=>{
    e.preventDefault();

    fetch(`http://localhost:5000/api/userData/${pin}/${accountNumber}`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("HELLO")
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
    })
    .catch(error => {
    alert("ERROR : "+error)  
    })
  }
