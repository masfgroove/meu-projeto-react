import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Tabela({ items, deleteItem, editItem }) {
  const navigate = useNavigate();

  const handleEdit = (item) => {
    // Configura o item para edição e navega para o formulário
    editItem(item);
    navigate('/formulario');
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center">Nenhum item encontrado</td>
          </tr>
        ) : (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(item)}>Editar</Button>
                <Button variant="danger" onClick={() => deleteItem(item.id)}>Excluir</Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default Tabela;
