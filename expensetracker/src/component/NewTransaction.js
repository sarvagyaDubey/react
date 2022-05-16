import { useState } from "react";
import { Typography, Box, TextField, Button } from "@material-ui/core";
import '../App.css'

const NewTransactions = ({ addTransactions }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const newTransactions = (e) => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: text,
            amount: +amount,
        };
        addTransactions(transaction);
        setText("");
        setAmount("");
    };
    return (
        <><div className="box1">
            <Typography>New Transactions</Typography>
            <div className="box2"><Box>
                <TextField
                    value={text}
                    label="Enter Text"
                    onChange={(e) => setText(e.target.value)}
                />
            </Box>
            <Box>
                <TextField
                    value={amount}
                    label="Enter Amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </Box></div>
            <Button className="btn btn-primary" onClick={newTransactions}>Add Transaction</Button>
            </div>

        </>
    );
};

export default NewTransactions