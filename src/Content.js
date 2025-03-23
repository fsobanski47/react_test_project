import ItemList from './ItemList';
import React from 'react';

const Content = ({ items, handleToggle, handleDelete }) => {
    return (
        <>
            {items.length ?(
                <ItemList
                    items={items}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />  
            ) : (
                <p>Your list is empty...</p>
            )}
        </>
    );
};

export default Content;