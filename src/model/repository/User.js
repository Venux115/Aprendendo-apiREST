const UserModel = require("../entity/User.js");
const HashHelper = require("../../helper/HashHelper.js");

class User {
  constructor(db) {
    this._db = db;
  }

  async insert(user) {
    try {
      const { name, email, password } = user.getAll();
      const password_hash = await HashHelper.hashPassword(password);

      await this._db.query(
        `
        INSERT INTO users
        (name, email, password_hash)
        VALUES
        ($1, $2, $3)
      `,
        name,
        email,
        password_hash
      );

      try {
        const result = await this._db.query(
          `SELECT * FROM users WHERE password_hash = $1`,
          password_hash
        );
        return result.map((user) => {
          user = new UserModel(
            user.name,
            user.email,
            user.password_hash,
            user.id
          );

          return user.getAll();
        });
      } catch (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async all() {
    try {
      const result = await this._db.query(`SELECT * FROM users`);
      return result.map((user) => {
        return new UserModel(
          user.name,
          user.email,
          user.password_hash,
          user.id
        ).getAll();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async findById(id) {
    try {
      const result = await this._db.query(`SELECT * FROM users WHERE id = $1`, id);
      return result.map((user) => {
        return new UserModel(
          user.name,
          user.email,
          user.password_hash,
          user.id
        ).getAll();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async update({ id, name, email, password }) {
    try {
      const password_hash = await HashHelper.hashPassword(password);
      const result = await this._db.query(
        `
        UPDATE users SET
        name = $1, email = $2, password_hash = $3
        WHERE id = $4
        `,
        name,
        email,
        password_hash,
        id
      );
      return await this.findById(id);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteById(id) {
    try {
      const result = await this._db.query(
        `
        DELETE FROM users
        WHERE id = $1
        `,
        id
      );
      return await this.findById(id);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = User;
