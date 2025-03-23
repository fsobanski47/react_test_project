
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react';
import { useRef } from 'react';
//
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <Paper
            id="add"
            elevation={3}
            sx={{
                marginBottom: 0.25,
                padding: 1,
                backgroundColor: "#fff",
                width: '100%'
            }}
        >
            <Box 
                id="addbox"
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}
                onSubmit={handleSubmit}
            >
                <TextField 
                    sx={{
                        width: '85%'
                    }}
                    label="Add Item" 
                    variant="outlined" 
                    autoFocus
                    inputRef={inputRef}
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <Button 
                    id="addbutton"
                    variant="contained" 
                    type="submit"
                    sx={{
                        backgroundcolor: 'mediumblue',
                        '&:hover': {
                            backgroundcolor: '#1976d2'
                        },
                        width: '15%'
                    }}
                    onClick={() => inputRef.current.focus()}
                >
                    <span style={{ fontSize: '30px' }}>+</span>
                </Button>
            </Box>
        </Paper>
    )
}

export default AddItem