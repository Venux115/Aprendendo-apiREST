
import UserRepository from "../model/repository/User.js"
import UserModel from "../model/entity/User.js"
class Home {

  async index(req, res) {
    const userRepository = new UserRepository(req.dbConnection)
    const response = await userRepository.all()

    res.json(response)
  }

  async create(req, res) {
    const userRepository = new UserRepository(req.dbConnection)
    const { name, email, password } = req.body
    const user = new UserModel(name, email, password)
    try {
      await userRepository.insert(user)

      res.json(user.getAll())

    } catch (error) {
      console.error(error)
      res.json({ Error: "Erro ao criar usuario" })
    }
  }
}

export default new Home()
