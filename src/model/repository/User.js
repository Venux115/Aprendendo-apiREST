import UserModel from "../entity/User.js"
import HashHelper from "../../helper/HashHelper.js"
export default class User {
  #db
  constructor(db) {
    this.#db = db
  }
  async insert(user) {
    try {
      const { name, email, password } = user.getAll()
      const password_hash = await HashHelper.hashPassword(password)

      const result = await this.#db.query(`
      INSERT INTO users
      (name, email, password_hash)
      VALUES
      ($1, $2, $3)
    `, [name, email, password_hash])

      return result
    } catch (error) {
      throw new Error(error.message)

    }

  }

  async all() {
    try {
      const result = await this.#db.query(`SELECT * FROM users`)
      return result.map(user => {
        return new UserModel(user.name, user.email, user.password_hash, user.id).getAll()
      });
    } catch (error) {
      console.error(error)
    }
  }
}
