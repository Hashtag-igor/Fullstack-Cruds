# Fullstack CRUDs

Este repositório contém dois exemplos de implementação de CRUDs (Create, Read, Update, Delete) utilizando React, Node.js e MongoDB. As duas abordagens diferem na biblioteca utilizada para a interação com o banco de dados: Mongoose e Prisma.

## Estrutura do Repositório

- `API (React, Node, Mongodb e MONGOOSE)``: Este diretório contém a implementação do CRUD utilizando a biblioteca Mongoose para interagir com o MongoDB.
- `API (React, Node, Mongodb e PRISMA)``: Este diretório contém a implementação do CRUD utilizando a biblioteca Prisma para interagir com o MongoDB.

## Tecnologias Utilizadas

- **Frontend**: React
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB

## Descrição dos Projetos

### 1. CRUD com Mongoose

A pasta `API (React, Node, Mongodb e MONGOOSE)`` contém um exemplo de CRUD utilizando a biblioteca Mongoose. Mongoose é uma biblioteca de modelagem de dados para MongoDB e Node.js, que proporciona uma solução baseada em esquemas para a modelagem de dados da aplicação.

### 2. CRUD com Prisma

A pasta `API (React, Node, Mongodb e PRISMA)`` contém um exemplo de CRUD utilizando a biblioteca Prisma. Prisma é um ORM (Object-Relational Mapping) moderno que ajuda a transformar dados entre sistemas, proporcionando uma abordagem diferente para a interação com o banco de dados.

## Como Executar os Projetos

### Requisitos

- Node.js
- MongoDB

### Passos para Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/USERNAME/fullstack-cruds.git
    cd fullstack-cruds
    ```

2. Navegue até o diretório do projeto que deseja executar (`API (React, Node, Mongodb e MONGOOSE)` ou `API (React, Node, Mongodb e PRISMA)`).

3. Instale as dependências do backend e inicie o servidor:
    cd backend                //abra a pasta
    npm install              //baixe as dependências
    npm run server          //para rodar o projeto com MONGOOSE
    npm --watch server.js  //para rodar o projeto com PRISMA


5. Informações adicionais:
   Informações adicionais do BACKEND estão no arquivo ".env.example"
   Sobre o FRONTEND, você pode seguir esse passo a passo abaixo no terminal:
    cd frontend        //para abrir a pasta
    npm install      //para baixar as dependências
    npm run dev    //para rodar o projeto

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
