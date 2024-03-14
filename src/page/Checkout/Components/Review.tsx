import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {TransactionDto, Item} from "../../../data/TransactionDto.ts"
import {useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts"
type Params = {
    transactionId:string
}

export default function Review() {
    const params = useParams<Params>()
    const [transactionData, setTransactionData] = useState<TransactionDto | undefined>(undefined);

    let total = 0;

    if (transactionData && transactionData.items) {
        total = transactionData.items.reduce((sum, item) => sum + item.subtotal, 0);
    }
    const getTransactionData = async() => {
        if (params.transactionId) {
            const data = await TransactionApi.getTransactionById(params.transactionId);
            setTransactionData(data);
        }
    }

    useEffect(()=>{
        getTransactionData()
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {transactionData?.items.map((item:Item) => (
                    <ListItem key={item.tpid} sx={{ py: 1, px: 0 }}>
                        <Box sx={{ marginRight: 2 }}>
                            {item.product.imageUrl && (
                                <img src={item.product.imageUrl} alt={item.product.name} style={{ height: '60px' }} />
                            )}
                        </Box>
                        <ListItemText primary={item.product.name} secondary={item.product.description} />
                        <Typography variant="body2">${item.subtotal.toFixed(2)}</Typography>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${total.toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}
