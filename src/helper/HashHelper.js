import bcrypt from "bcrypt";

export default class Hashhelper {


  static async hashPassword(password) {
    try {
      const saltRound = 10
      const salt = await bcrypt.genSalt(saltRound)
      const hashedPassword = await bcrypt.hash(password, salt)

      return hashedPassword
    } catch (error) {
      throw new Error(`Erro ao fazer hash de senha \n ${error}`)
    }
  }

  static async verifyPassword(password, password_hash) {
    try {
      return await bcrypt.compare(password, password_hash)
    } catch (error) {
      throw new Error(`Erro ao verificar senha \n ${error}`)
    }
  }
}

