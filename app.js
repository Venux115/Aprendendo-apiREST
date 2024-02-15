import express from "express";
import userRoutes from "./src/routes/user.js"
import Connection from './src/middleware/Connection.js'

class App {
  constructor() {

    this.app = express()
    this.middlewares()
    this.routes()

  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(Connection)

  }
  routes() {

    this.app.use("/users", userRoutes)
  }


}

export default new App().app
