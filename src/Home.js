import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simples verificação de login
    if (username === 'admin' && password === 'admin') {
      navigate('/tabela'); // Redireciona para a página da tabela
    } else {
      setError('Nome de usuário ou senha incorretos.');
    }
  };

  return (
    <div>
      <h1>Bem-vindo ao Meu Projeto de Exemplo de código React</h1>
      <p>Essa é a página inicial. (admin/admin)</p>

      <Form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: 'auto' }}>
        <Form.Group controlId="formUsername">
          <Form.Label>Nome de Usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default Home;
