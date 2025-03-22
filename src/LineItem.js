import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton,
    Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const LineItem = ({ item, handleToggle, handleDelete }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                marginBottom: 2,
                padding: 1,
                backgroundColor: item.checked ? 'rgb(218, 218, 214)' : 'rgb(246, 246, 242)',
                boxShadow: 3
            }}
        >
            <ListItem
                key={`${item.id}-${item.checked}`}
                secondaryAction={
                    <IconButton edge="end">
                        <DeleteIcon
                            onClick={() => handleDelete(item.id)} 
                        />
                    </IconButton>
                }
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={item.checked}
                        onChange={() => handleToggle(item.id)}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={item.item}
                    onDoubleClick={() => handleToggle(item.id)} 
                    sx={{
                        textDecoration: item.checked ? 'line-through' : 'none'
                    }}
                />
            </ListItem>
        </Paper>
    )
}

export default LineItem