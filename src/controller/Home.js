
import AlunoRepository from "../model/repository/Aluno.js"
class Home {
  async index(req, res) {
    const alunoRepository = new AlunoRepository(req.dbConnection)
    const response = await alunoRepository.all()
    console.log(response)
    res.json(response)
  }
}

export default new Home()
