import pkg from 'pg';
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config()

export default class Connection {
  #host
  #port
  #database
  #user
  #password

  constructor() {
    this.#host = process.env.HOST
    this.#port = process.env.DATABASE_PORT
    this.#database = process.env.DATABASE
    this.#user = process.env.DATABASE_USERNAME
    this.#password = process.env.DATABASE_PASSWORD

    try {
      this.client = new Client({
        host: this.#host,
        port: this.#port,
        database: this.#database,
        user: this.#user,
        password: this.#password,
      })
    } catch (error) {
      throw new Error(`Erro ao conectar ao banco de dados: ${error}`)
    }

  }

  async query(sql, paramns) {
    try {
      const result = await this.client.query(sql, paramns)
      return result.rows
    } catch (error) {
      throw new Error(error)

    }
  }

  async start() {
    try {
      await this.client.connect()
    } catch (error) {
      throw new Error(error)
    }
  }

  async end() {
    try {
      await this.client.end()
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
