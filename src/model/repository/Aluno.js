import AlunoModel from "../entity/Aluno.js"
export default class Aluno {
  #db
  constructor(db) {
    this.#db = db
  }
  insert(aluno) {
    try {
      const { name, birth, classs } = aluno.getAll()

      this.#db.query(`
      INSERT INTO alunos
      (name, birth, class)
      VALUES
      ($1, $2, $3)
    `, [name, birth, classs])
    } catch (error) {
      throw new Error(`Erro ao inserir aluno \n ${error}`)
    }

  }

  async all() {
    try {
      const result = await this.#db.query(`SELECT * FROM alunos`)
      return result.map(aluno => {
        return new AlunoModel(aluno.name, aluno.birth, aluno.class, aluno.id).getAll()
    });
    } catch (error) {
      throw new Error(`Erro ao buscar alunos \n ${error}`)
    }
  }
}
