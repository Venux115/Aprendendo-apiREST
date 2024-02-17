const express = require("express");
const userRoutes = require("./src/routes/user.js");
const Connection = require('./src/middleware/Connection.js');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(Connection);
  }

  routes() {
    this.app.use("/users", userRoutes);
  }
}

module.exports = new App().app;
