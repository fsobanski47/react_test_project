import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import React from 'react';
import SearchBar from './SearchBar';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

const [newItem, setNewItem] = useState('')

const [search, setSearch] = useState('')

const setAndSave = (newItems) => {
  setItems(newItems);
  localStorage.setItem('shoppinglist', JSON.stringify(newItems));
}

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item};
  const listItems = [...items, myNewItem];
  setAndSave(listItems);
}

const handleToggle = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
  setAndSave(listItems);
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setAndSave(listItems);
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItem('');
}

  return (
    <div className="App">
      <Header title="Shopping List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchBar 
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
