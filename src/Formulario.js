import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Formulario({ addItem, updateItem, editingItem, setEditingItem }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    if (editingItem) {
      setNome(editingItem.nome);
      setDescricao(editingItem.descricao);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { nome, descricao, id: editingItem ? editingItem.id : Date.now() };
    if (editingItem) {
      updateItem(item);
      setEditingItem(null);
    } else {
      addItem(item);
    }
    setNome('');
    setDescricao('');
    navigate('/tabela'); // Navega para a página da tabela
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formDescricao">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {editingItem ? 'Atualizar' : 'Adicionar'}
      </Button>
    </Form>
  );
}

export default Formulario;
