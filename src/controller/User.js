const UserRepository = require("../model/repository/User.js");
const UserModel = require("../model/entity/User.js");

class Home {
  async index(req, res) {
    try {
      const userRepository = new UserRepository(req.dbConnection);
      const response = await userRepository.all();

      return res.json(response);
    } catch (error) {
      return res.json(null);
    }
  }

  async create(req, res) {
    const userRepository = new UserRepository(req.dbConnection);
    const { name, email, password } = req.body;

    const user = new UserModel(name, email, password);
    try {
      const userResult = await userRepository.insert(user);

      res.json(userResult);
    } catch (error) {
      console.error(error);
      res.json({ Error: "Erro ao criar usuario" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const userRepository = new UserRepository(req.dbConnection);
      const response = await userRepository.findById(id);

      if (response[0]) {
        return res.json(response);
      } else {
        return res.json("Usuario não encontrado");
      }
    } catch (error) {
      console.error(error);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      if (!id) {
        return res.status(400).json({
          Errors: ["Id não enviado"],
        });
      }
      const userRepository = new UserRepository(req.dbConnection);
      const responseUser = (await userRepository.findById(id))[0];

      if (!responseUser) {
        return res.status(400).json({
          Errors: ["Usuario não encontrado"],
        });
      }
      const user = new UserModel(name, email, password, id);

      const response = await userRepository.update(user.getAll());

      return res.json(response);
    } catch (error) {
      console.error(error);
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          Errors: ["Id não enviado"],
        });
      }
      const userRepository = new UserRepository(req.dbConnection);
      const responseUser = (await userRepository.deleteById(id))[0];

      if (responseUser) {
        return res.status(400).json({
          Errors: ["Usuario não deletado"],
        });
      }

      return res.json("Usuario deletado com sucesso");
    } catch (error) {
      console.error(error);
      return res.json(null);
    }
  }
}

module.exports = new Home();
