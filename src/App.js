import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';
import React from 'react';
import SearchBar from './SearchBar';

function App() {
  const APIurl = 'http://localhost:3501/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(APIurl);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    (async () => await fetchItems())();
  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleToggle = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      <main>
        {isLoading && <p>Loading Items</p>}
        {fetchError && <p style={{ color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase().trim()))}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        /> }
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
