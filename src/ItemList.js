import {
    List
} from '@mui/material';
import LineItem from './LineItem';
import React from 'react';
import Paper from '@mui/material/Paper';

const ItemList = ({ items, handleToggle, handleDelete }) => {
    return (
        <Paper 
            sx={{
                width: '100%',
                maxWidth: 400, 
                overflow: 'auto',  
                height: '80vh',
                boxShadow: 'none'
            }}
        >
            <List>
            {items.map((item) => (
                <LineItem 
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </List>
        </Paper>
    )
}

export default ItemList