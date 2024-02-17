# Aprendendo apiREST

## Esta aplicação é uma simples api com get, post, put e delete que se conecta com postgress sql via node-pg. Onde o intuito do desenvolvimento foi aprender conceitos basicos de apiREST
![Static Badge](https://img.shields.io/badge/Licence%20-%20MIT%20-%20%23004088?style=for-the-badge)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
![Static Badge](https://img.shields.io/badge/node-%20v20.11.0-%20%23339933?style=for-the-badge&logo=%3Csvg%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ENode.js%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.998%2C24c-0.321%2C0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383%20c0.585-0.203%2C0.703-0.25%2C1.328-0.604c0.065-0.037%2C0.151-0.023%2C0.218%2C0.017l2.256%2C1.339c0.082%2C0.045%2C0.197%2C0.045%2C0.272%2C0l8.795-5.076%20c0.082-0.047%2C0.134-0.141%2C0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271%2C0%20L3.075%2C6.68C2.99%2C6.729%2C2.936%2C6.825%2C2.936%2C6.921v10.15c0%2C0.097%2C0.054%2C0.189%2C0.139%2C0.235l2.409%2C1.392%20c1.307%2C0.654%2C2.108-0.116%2C2.108-0.89V7.787c0-0.142%2C0.114-0.253%2C0.256-0.253h1.115c0.139%2C0%2C0.255%2C0.112%2C0.255%2C0.253v10.021%20c0%2C1.745-0.95%2C2.745-2.604%2C2.745c-0.508%2C0-0.909%2C0-2.026-0.551L2.28%2C18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921%20c0-0.659%2C0.353-1.275%2C0.922-1.603l8.795-5.082c0.557-0.315%2C1.296-0.315%2C1.848%2C0l8.794%2C5.082c0.57%2C0.329%2C0.924%2C0.944%2C0.924%2C1.603%20v10.15c0%2C0.659-0.354%2C1.273-0.924%2C1.604l-8.794%2C5.078C12.643%2C23.916%2C12.324%2C24%2C11.998%2C24z%20M19.099%2C13.993%20c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528%2C0.235-1.233%2C2.258-1.233%20c1.807%2C0%2C2.473%2C0.389%2C2.747%2C1.607c0.024%2C0.115%2C0.129%2C0.199%2C0.247%2C0.199h1.141c0.071%2C0%2C0.138-0.031%2C0.186-0.081%20c0.048-0.054%2C0.074-0.123%2C0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508%2C0-4.004%2C1.058-4.004%2C2.833%20c0%2C1.925%2C1.488%2C2.457%2C3.895%2C2.695c2.88%2C0.282%2C3.103%2C0.703%2C3.103%2C1.269c0%2C0.983-0.789%2C1.402-2.642%2C1.402%20c-2.327%2C0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141%2C0-0.254%2C0.112-0.254%2C0.253%20c0%2C1.482%2C0.806%2C3.248%2C4.655%2C3.248C17.501%2C17.007%2C19.099%2C15.91%2C19.099%2C13.993z%22%2F%3E%3C%2Fsvg%3E)
![Static Badge](https://img.shields.io/badge/made%20with%20-%20Express%20-%20%2358A616?style=for-the-badge&logo=%3Csvg%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EExpress%3C%2Ftitle%3E%3Cpath%20d%3D%22M24%2018.588a1.529%201.529%200%2001-1.895-.72l-3.45-4.771-.5-.667-4.003%205.444a1.466%201.466%200%2001-1.802.708l5.158-6.92-4.798-6.251a1.595%201.595%200%20011.9.666l3.576%204.83%203.596-4.81a1.435%201.435%200%20011.788-.668L21.708%207.9l-2.522%203.283a.666.666%200%20000%20.994l4.804%206.412zM.002%2011.576l.42-2.075c1.154-4.103%205.858-5.81%209.094-3.27%201.895%201.489%202.368%203.597%202.275%205.973H1.116C.943%2016.447%204.005%2019.009%207.92%2017.7a4.078%204.078%200%20002.582-2.876c.207-.666.548-.78%201.174-.588a5.417%205.417%200%2001-2.589%203.957%206.272%206.272%200%2001-7.306-.933%206.575%206.575%200%2001-1.64-3.858c0-.235-.08-.455-.134-.666A88.33%2088.33%200%20010%2011.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944%202.094-5.071%205.264z%22%2F%3E%3C%2Fsvg%3E)



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
