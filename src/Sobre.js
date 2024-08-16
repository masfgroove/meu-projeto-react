import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Sobre() {
  return (
    <Container className="mt-4">
      <h1>Sobre o Projeto</h1>
      <p>Este projeto é uma aplicação de gerenciamento de itens desenvolvida com React e várias outras tecnologias. Abaixo estão os detalhes sobre a stack utilizada e a estrutura do projeto.</p>

      <Card>
        <Card.Header>Stack Tecnológica</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>React</h5>
            <p>Biblioteca JavaScript para criar interfaces de usuário. Utilizada para construir os componentes da aplicação e gerenciar o estado.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>React Router</h5>
            <p>Biblioteca para gerenciar rotas e navegação na aplicação. Utilizada para criar as rotas de navegação entre as páginas.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>React Bootstrap</h5>
            <p>Biblioteca que fornece componentes Bootstrap pré-estilizados para React. Utilizada para criar uma interface de usuário estilizada e responsiva.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Local Storage</h5>
            <p>API do navegador utilizada para armazenar e recuperar dados localmente. Utilizada para armazenar os itens cadastrados.</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="mt-4">
        <Card.Header>Estrutura do Projeto</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>Componente Home</h5>
            <p>Página inicial com um formulário de login para acessar a aplicação.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Componente Formulario</h5>
            <p>Formulário para adicionar e editar itens. Inclui validação e manipulação do estado.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Componente Tabela</h5>
            <p>Exibe uma tabela com os itens cadastrados e opções para editar ou excluir cada item.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Componente Navbar</h5>
            <p>Barra de navegação que permite a navegação entre as páginas da aplicação.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Componente Footer</h5>
            <p>Rodapé da aplicação com informações de copyright.</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="mt-4">
        <Card.Header>Como Executar o Projeto</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>Instalação</h5>
            <p>Clone o repositório e instale as dependências com <code>npm install</code>.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Execução</h5>
            <p>Inicie o servidor de desenvolvimento com <code>npm start</code> e acesse a aplicação em <code>http://localhost:3000</code>.</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default Sobre;
