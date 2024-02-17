# Aprendendo apiREST

## Esta aplicação é uma simples api com get, post, put e delete que se conecta com postgress sql via node-pg. Onde o intuito do desenvolvimento foi aprender conceitos basicos de apiREST
![Static Badge](https://img.shields.io/badge/Licence%20-%20MIT%20-%20%23004088?style=for-the-badge)

para rodar voce precisará do docker, docker-compose,  um editor de texto ou IDE e um terminal

1. baixar dependencias:
  npm install

2. Iniciar banco de dados:
  docker-compose up

3. gerar um arquivo .env para conexao entre a api e o bd
  PORT=porta que deseja rodar a api
  HOST=host(localhost)
  DATABASE=escola(Banco de dados, não alterar)
  DATABASE_PORT=Porta para o banco de dados
  DATABASE_USERNAME=postgres(usuario do banco de dado, não alterar)
  DATABASE_PASSWORD=senha do banco de dados



3. rodar a aplicação
  npm rum
