const { Client } = require('pg');
const dotenv = require("dotenv");
dotenv.config();

class Connection {
  constructor() {

    this.host = process.env.HOST;
    this.port = process.env.DATABASE_PORT;
    this.database = process.env.DATABASE;
    this.user = process.env.DATABASE_USERNAME;
    this.password = process.env.DATABASE_PASSWORD;

    try {
      this.client = new Client({
        host: this.host,
        port: this.port,
        database: this.database,
        user: this.user,
        password: this.password,
      });
    } catch (error) {
      throw new Error(`Erro ao conectar ao banco de dados: ${error}`);
    }
  }

  async query(sql, ...params) {
    try {
      const result = await this.client.query(sql, params);
      return result.rows;
    } catch (error) {
      throw new Error(error);
    }
  }

  async start() {
    try {

      await this.client.connect();
    } catch (error) {
      throw new Error(error);
    }
  }

  async end() {
    try {
      await this.client.end();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Connection;
