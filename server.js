const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App rodando na porta http://localhost:${port}`);
});
