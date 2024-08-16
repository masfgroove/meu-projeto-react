import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './Formulario';
import Tabela from './Tabela';
import NavBar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Sobre from './Sobre'; // Importa o componente Sobre

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // Carregar dados do localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Salvar dados no localStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (item) => {
    setItems(items.map((i) => (i.id === item.id ? item : i)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setEditingItem(item);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={
              <Formulario
                addItem={addItem}
                updateItem={updateItem}
                editingItem={editingItem}
                setEditingItem={setEditingItem}
              />
            } />
            <Route path="/tabela" element={
              <Tabela
                items={items}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            } />
            <Route path="/sobre" element={<Sobre />} /> {/* Adiciona a nova rota */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
