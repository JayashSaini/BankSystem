const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("HELLO");
});
app.post("/api/updateFile", async (req, res) => {
  const content = { ...req.body };
  try {
    const existingContent = await fs.readFileSync("../data.json", "utf-8");
    const parsedContent = JSON.parse(existingContent);

    if (Array.isArray(parsedContent)) {
      parsedContent.push(content);
    } else {
      console.error(
        "Data is not in an array format. Modify the logic as per the data structure.",
      );
    }

    fs.writeFileSync(
      "../data.json",
      JSON.stringify(parsedContent, null, 2),
      "utf-8",
    );
    res.status(200).send("File updated successfully");
    console.log("File updated successfully");
  } catch (error) {
    console.error("Error updating file:", error);
    res.status(500).send(`Error updating file: ${error.message}`); // Include error message in response
  }
});

app.get("/api/userData/:pin/:accountNumber", async function (req, res) {

  const pin = req.params.pin;
  const accountNumber = req.params.accountNumber;

  const existingContent = await fs.readFileSync("../data.json", "utf-8");
  const parsedContent = JSON.parse(existingContent);

  if (Array.isArray(parsedContent)) {

    let accobj = parsedContent.find((elem) => {
      return elem.accountNumber == accountNumber;
    });
    
    let indexobj = parsedContent.findIndex((obj)=>obj.accountNumber == accountNumber);

    if (accobj.accountNumber == accountNumber) {
      if (accobj.pin == pin) {
        res.json(parsedContent[indexobj]);
      }else {
        res.status(404).json({ error: ' PIN Not Found' });      }

    } 
    else {
      res.status(404).json({ error: 'Account Number Not Found' });  
      }
  } 
  else {
    res.status(500).send("Cannot access Data Properly")
  }
});

app.post("/api/cashtransition",async function(req,res){
  const content = {...req.body};
  const accesseddata = await fs.readFileSync('../data.json','utf8');
  parsedData = JSON.parse(accesseddata);

  if(Array.isArray(parsedData)){

    const userData = parsedData.find((elem)=>elem.accountNumber == content.accountNumber);
    const userDataIndex = parsedData.findIndex((elem)=>elem.accountNumber == content.accountNumber);
    const RuserData = parsedData.find((elem)=>elem.accountNumber == content.raccountNumber);
    const RuserDataIndex = parsedData.findIndex((elem)=>elem.accountNumber == content.raccountNumber);

    if(userData){
      userData['balance'] = parseInt(content.RemainingAmount);
       parsedData[userDataIndex] = userData;
       fs.writeFileSync(
        "../data.json",
        JSON.stringify(parsedData, null, 2),
        "utf-8",
      );
      res.status(200).send("cash withdraw successfully")
    }
    else if(RuserData){
      console.log(content.rbalance)
      RuserData['balance'] = parseInt(content.rbalance);
       parsedData[RuserDataIndex] = RuserData;
       fs.writeFileSync(
        "../data.json",
        JSON.stringify(parsedData, null, 2),
        "utf-8",
      );
      res.status(200).send("cash withdraw successfully")
    }
    else{
      res.status(500).send("User Details are wrong ")
    }
  }
  else{
    res.status(500).send("Server Can't access user data")
  }

})

app.get("/api/cashtransition/transfer/:accountNumber", async function(req,res){
  console.log("HELLO")
  let accountNumber = req.params.accountNumber;

  const accesseddata = await fs.readFileSync('../data.json','utf8');
  parsedData = JSON.parse(accesseddata);

  if(Array.isArray(parsedData)){
    let anotheruserdata = parsedData.find((elem) => elem.accountNumber == accountNumber);
    if(anotheruserdata){
      res.status(200).json({"balance":anotheruserdata.balance});
    }
    else{
      res.status(500).send("Account Number not Found");
    }
  }
  else{
    res.status(500).send("Cannot fetch data");
  }
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
