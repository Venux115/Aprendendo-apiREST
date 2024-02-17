# Aprendendo apiREST

## Sobre
Esta aplicação é uma simples api com get, post, put e delete que se conecta com postgress sql via node-pg. Onde o intuito do desenvolvimento foi aprender conceitos basicos de apiREST

![Static Badge](https://img.shields.io/badge/Licence%20-%20MIT%20-%20%23004088?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/node-%20v14.17.0-%20%23339933?style=for-the-badge&logo=node.js)
![Static Badge](https://img.shields.io/badge/made%20with%20-%20Express%20-%20%2358A616?style=for-the-badge&logo=express)
![Static Badge](https://img.shields.io/badge/Postgres%20-%20v13.3-%20%234169E1?style=for-the-badge&logo=postgresql)



<h4 align="center"> 
	&#128187  Projeto em produção  🚧
</h4>


Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#Tabela-de-conteúdos)
   * [Features](#Features)
   * [Como usar](#Como-usar)
      * [Pre Requisitos](#Pré-requisitos)
   * [Tecnologias](#Tecnologias)
   * [Autor](#Autor)
<!--te-->


### Features

- [x] Busca de usuários
- [x] Cadastro de usuário
- [x] Alteração de usuário
- [x] Exclusão de usuário

## Como usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/products/docker-desktop/) e [Docker Compose](https://docs.docker.com/compose/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Venux115/Aprendendo-apiREST>

# Instale as dependências
$ npm install

# criea o arquivo .env na sua maquina
$ touch .env

# abra-o no VScode
$ code .env 

# Adicione o seguinte conteudo
  PORT=porta que deseja rodar a api
  HOST=host(localhost)
  DATABASE=escola(Banco de dados, não alterar)
  DATABASE_PORT=Porta para o banco de dados
  DATABASE_USERNAME=postgres(usuario do banco de dado, não alterar)
  DATABASE_PASSWORD=senha do banco de dados

# Salve e volte ao terminal

# Abra o arquivo docker-compose.yml e faça as seguintes alterações
  pg:
    image: postgres:16.2
    ports:
      - (Porta do banco de dados que você colocou no arquiv .env):5432
    environment:
      - "POSTGRES_PASSWORD=(Senha que você colocou no arquivo .env)"
      - "POSTGRES_USER=postgres"
      - "POSTGRES_DB=escola"
    volumes:
      - ./postgres:/var/lib/postgresql/data

  # Salve e volte ao terminal

  #Inicie o dokcer
  $ docker-compose up

  #inicie a aplicação
  $ npm start

```
### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Node Postgres](https://node-postgres.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

### Autor
---
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101436519?v=4" width="100px;" alt=""/>


<h3>Vinícius de Araujo Goulart</h3>


<h2>Feito com ❤️ por Vinícius Goular 👋🏽 Entre em contato!</h2>

[LinkedIn](https://www.linkedin.com/in/goulart-vinicius)

