import {
    ListItemText,
    ListItem,
    makeStyles,
    ListItemIcon,
} from "@material-ui/core";

// import {DeleteIcon }from "@material-ui/icons/Delete";

const useStyle = makeStyles({
    list: {
        display: "flex",
        marginTop: 10,
        border: "1px solid #F6F6F6",
    },
});

const Transaction = ({ transaction, deleteTransactions }) => {
    const styles = useStyle();
    const sign = transaction.amount > 0 ? "+₹" : "-₹";
    const amount = sign + Math.abs(transaction.amount);
    const color = transaction.amount > 0 ? "Green " : "Red";
    return (
       <div>
            <ListItem
            style={{ borderRight: `5px solid ${color}` }}
            className={styles.list}
        >
            <ListItemIcon>
                <button className="btn btn-danger" onClick={() => deleteTransactions(transaction.id)} >-</button>
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </ListItem>
       </div>
    );
};

export default Transaction;