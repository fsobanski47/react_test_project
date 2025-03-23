import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    
    return (
        <Paper
            id="search"
            elevation={3}
            sx={{
                marginBottom: 2,
                padding: 1,
                backgroundColor: "#fff",
                width: '100%'
            }}
        >
            <TextField 
                sx={{
                    width: '100%'
                }}
                role="searchbox"
                label="Search Items" 
                variant="outlined" 
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Paper>
    )
}

export default SearchBar