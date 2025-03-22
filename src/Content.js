import ItemList from './ItemList';
import React from 'react';

const Content = ({ items, handleToggle, handleDelete }) => {
    return (
        <main className="content">
            {items.length ?(
                <ItemList
                    items={items}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />  
            ) : (
                <p>Your list is empty...</p>
            )}
        </main>
    );
};

export default Content;