
import React, { useState } from "react";
import Balance from "./component/Balance";
import ExpenseSheet from "./component/ExpenseSheet";
import NewTransaction from "./component/NewTransaction";
import Transactions from "./component/Transactions";
import {  Box, makeStyles } from "@material-ui/core";
import './App.css'



const useStyles = makeStyles({
  component: {
    background: "#fff",
    padding: 10,
    boderRadius: 20,
    width: 500,
    "&> *": {
      padding: 10,
    },
  },
});

function App() {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Books", amount: -20 },
    { id: 2, text: "Flowers", amount: -10 },
    { id: 3, text: "Salary", amount: 300 },
    { id: 4, text: "Clothes", amount: -20 },
  ]);

  const addTransactions = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
  };

  const deleteTransactions = (id) => {
    setTransactions(
      transactions.filter((transactions) => transactions.id !== id)
    );
  };

  return (
    <center><div className="App">
      <div>
        <h2>Expense Tracker</h2>
      <Box className={classes.component}>
        <Balance transactions={transactions} />
        <ExpenseSheet transactions={transactions} />
        <Transactions
          transactions={transactions}
          deleteTransactions={deleteTransactions}
        />
        <NewTransaction addTransactions={addTransactions} />
      </Box>
      </div>
    </div></center>
  );
 }

 export default App;
